import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator, Pressable } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";

export default function TrackScreen() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const navigation = useNavigation();

  // Simulated target location (somewhere in Ljubljana)
  const driverLocation = {
    latitude: 46.0511 + Math.random() * 0.01,
    longitude: 14.5051 + Math.random() * 0.01,
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc);
    })();
  }, []);

  if (errorMsg) {
    return (
      <View style={styles.center}>
        <Text>{errorMsg}</Text>
      </View>
    );
  }

  if (!location) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#4600DE" />
      </View>
    );
  }

  const userCoords = {
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
  };

  return (
    <View style={{ flex: 1 }}>
      <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>← Back</Text>
      </Pressable>

      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: userCoords.latitude,
          longitude: userCoords.longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        <Marker coordinate={userCoords} title="You" />
        <Marker coordinate={driverLocation} pinColor="red" title="Driver" />
        <Polyline
          coordinates={[userCoords, driverLocation]}
          strokeColor="#4600DE"
          strokeWidth={4}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 999,
    backgroundColor: "#fff",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  backButtonText: {
    fontSize: 16,
    color: "#4600DE",
    fontWeight: "600",
  },
});