import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  Pressable,
  Alert,
  Image,
} from "react-native";
import * as DocumentPicker from "expo-document-picker";
import * as ImagePicker from "expo-image-picker";

import { styles } from "../../features/profile/styles";
import { renderStars } from "../../utils";
import { HOST } from "@/constants/Constants";

interface Review {
  firstName: string;
  lastName: string;
  rating: number;
  review: string;
}

interface User {
  firstName: string;
  lastName: string;
  averageRating: number;
  reviews: Review[];
  kycStatus: "validated" | "pending" | "rejected";
  idPhoto?: string;
  addressProof?: string;
  selfie?: string;
}

export default function ProfileScreen(): JSX.Element {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [selfieUri, setSelfieUri] = useState<string | null>(null);
  const [idUri, setIdUri] = useState<string | null>(null);
  const [addressUri, setAddressUri] = useState<string | null>(null);

  useEffect(() => {
    // Simulate fetch with mock data
    setTimeout(() => {
      fetch(`${HOST}/users/bojan`)
      .then(res => res.json())
      .then(data => {
        data.kycStatus = "pending"
        console.log(data);
        setUser(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch user:", err);
        setLoading(false);
      });

      // setUser({
      //   firstName: "Bojan",
      //   lastName: "Test",
      //   averageRating: 4,
      //   reviews: [],
      //   kycStatus: "pending",
      // });
      // setLoading(false);
    }, 800);
  }, []);

  const openCamera = async (setUri: (uri: string) => void) => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (!permission.granted) {
      Alert.alert("Camera permission denied");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({ allowsEditing: true });
    if (!result.canceled) {
      setUri(result.assets[0].uri);
    }
  };

  const openGallery = async (setUri: (uri: string) => void) => {
    const result = await ImagePicker.launchImageLibraryAsync({ allowsEditing: true });
    if (!result.canceled) {
      setUri(result.assets[0].uri);
    }
  };

  const openDocument = async (setUri: (uri: string) => void) => {
    const result = await DocumentPicker.getDocumentAsync({ type: "*/*" });
    if (result.assets && result.assets.length > 0) {
      setUri(result.assets[0].uri);
    }
  };

  const handleUploadOption = (setUri: (uri: string) => void) => {
    Alert.alert("Upload", "Choose source", [
      { text: "Camera", onPress: () => openCamera(setUri) },
      { text: "Gallery", onPress: () => openGallery(setUri) },
      { text: "Files", onPress: () => openDocument(setUri) },
      { text: "Cancel", style: "cancel" },
    ]);
  };

  const getStatusStyle = (status: string) => {
    switch (status.toLowerCase()) {
      case "validated":
        return [styles.statusText, styles.statusCompleted];
      case "rejected":
        return [styles.statusText, styles.statusDeclined];
      case "pending":
        return [styles.statusText, styles.statusPending];
      default:
        return styles.statusText;
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#888" />
      </View>
    );
  }

  if (!user) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Failed to load profile</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.navbar}>
        <View style={styles.navbarSide}></View>
        <View style={styles.navbarCenter}>
          <Text style={styles.navbarTitle}>pejmo!</Text>
        </View>
        <View style={styles.navbarSide}></View>
      </View>

      <View style={styles.main}>
        <View style={styles.card}>
          <Text style={styles.name}>
            {user.firstName} {user.lastName} • <Text style={styles.stars}>{renderStars(user.averageRating)}</Text>
          </Text>

          <Text style={styles.label}>Verification status: <Text style={getStatusStyle(user.kycStatus)}>{user.kycStatus}</Text></Text>

          <Text style={styles.label}>KYC Documents:</Text>

          <Pressable style={styles.uploadButton} onPress={() => openCamera(setSelfieUri)}>
            <Text style={styles.uploadButtonText}>Take a selfie</Text>
          </Pressable>
          {selfieUri && <Image source={{ uri: selfieUri }} style={styles.kycImage} />}

          <Pressable style={styles.uploadButton} onPress={() => handleUploadOption(setIdUri)}>
            <Text style={styles.uploadButtonText}>Upload ID</Text>
          </Pressable>
          {idUri && <Image source={{ uri: idUri }} style={styles.kycImage} />}

          <Pressable style={styles.uploadButton} onPress={() => handleUploadOption(setAddressUri)}>
            <Text style={styles.uploadButtonText}>Upload proof of address</Text>
          </Pressable>
          {addressUri && <Image source={{ uri: addressUri }} style={styles.kycImage} />}

          <Text style={styles.label}>Comments:</Text>

          {user.reviews.length === 0 ? (
            <Text style={styles.commentText}>No comments yet.</Text>
          ) : (
            user.reviews.map((review, index) => (
              <View key={index} style={styles.commentBlock}>
                <Text style={styles.commentHeader}>
                  {review.firstName} {review.lastName} • <Text style={styles.stars}>{renderStars(review.rating)}</Text>
                </Text>
                <Text style={styles.commentText}>{review.review}</Text>
              </View>
            ))
          )}
        </View>
      </View>
    </ScrollView>
  );
}