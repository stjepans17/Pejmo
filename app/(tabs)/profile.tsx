import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, ActivityIndicator } from "react-native";

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
}

export default function ProfileScreen(): JSX.Element {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(`${HOST}/users/1`)
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch user:", err);
        setLoading(false);
      });
  }, []);

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

  const getStatusStyle = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
        return [styles.statusText, styles.statusCompleted];
      case "declined":
        return [styles.statusText, styles.statusDeclined];
      case "pending":
        return [styles.statusText, styles.statusPending];
      case "in progress":
        return [styles.statusText, styles.statusInProgress];
      default:
        return styles.statusText;
    }
  };

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
            {user.firstName} {user.lastName} •{" "}
            <Text style={styles.stars}>{renderStars(user.averageRating)}</Text>
          </Text>

          <Text style={styles.label}>
            Verification status:{" "}
            <Text style={getStatusStyle(user.kycStatus)}>{user.kycStatus}</Text>
          </Text>

          <Text style={styles.label}>Comments:</Text>

          {user.reviews.length === 0 ? (
            <Text style={styles.commentText}>No comments yet.</Text>
          ) : (
            user.reviews.map((review, index) => (
              <View key={index} style={styles.commentBlock}>
                <Text style={styles.commentHeader}>
                  {review.firstName} {review.lastName} •{" "}
                  <Text style={styles.stars}>{renderStars(review.rating)}</Text>
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