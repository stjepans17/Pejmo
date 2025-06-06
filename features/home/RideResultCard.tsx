import React from "react";
import { View, Text, StyleSheet, Pressable, Alert } from "react-native";
import { renderStars } from "../../utils";
import { requestRide } from "@/services/api";

interface RideInfo {
  id: number;
  time: string;
  driver: string;
  driverUsername: string;
  rating: number;
  price: number;
}

interface Props {
  from: string;
  to: string;
  date: Date;
  rides: RideInfo[];
}

export default function RideResultCard({ from, to, date, rides }: Props) {
  const onRequestPress = async (username: string, rideId: number) => {
    console.log({username, rideId})
    try {
      const result = await requestRide(username, rideId);
      Alert.alert("Success", "Request sent successfully!");
      console.log("Response:", result);
    } catch (error) {
      Alert.alert("Error", "Failed to send request.");
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Text style={styles.route}>{from} → {to}</Text>
        <Text style={styles.date}>
          {date.toLocaleDateString("sl-SI", {
            day: "numeric",
            month: "numeric",
            year: "numeric",
          })}
        </Text>
      </View>

      {rides.map((ride) => (
        <View key={ride.id} style={styles.rideRow}>
          <View style={styles.leftColumn}>
            <Text style={styles.time}>{ride.time}</Text>
          </View>

          <View style={styles.centerColumn}>
            <Text style={styles.driver}>{ride.driver} {" "}
                <Text style={styles.stars}>{renderStars(ride.rating)}</Text>
            </Text>
            <View style={styles.buttonRow}>
              <Pressable onPress={() => onRequestPress(ride.driverUsername, ride.id)} style={styles.button}>
                <Text style={styles.buttonText}>Send request</Text>
              </Pressable>
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Message</Text>
              </Pressable>
            </View>
          </View>

          <View style={styles.rightColumn}>
            <Text style={styles.price}>{ride.price}€</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 0,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  route: {
    fontSize: 18,
    fontWeight: "700",
  },
  date: {
    fontSize: 14,
    color: "#666",
  },
  rideRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  leftColumn: {
    width: 50,
  },
  centerColumn: {
    flex: 1,
    paddingHorizontal: 10,
  },
  rightColumn: {
    width: 30,
    alignItems: "flex-end",
  },
  time: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  driver: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
  },
  stars: {
    fontSize: 14,
    color: "#FFD700",
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: "700",
    color: "#222",
  },
  buttonRow: {
    flexDirection: "row",
    gap: 8,
    marginTop: 6,
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: "#E8E8FF",
    borderRadius: 6,
  },
  buttonText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#4600DE",
  },
});