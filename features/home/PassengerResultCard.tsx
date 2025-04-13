import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { renderStars } from "../../utils";

interface PassengerInfo {
  id: string;
  time: string;
  passenger: string;
  rating: number;
  price: number;
}

interface Props {
  from: string;
  to: string;
  date: Date;
  passengers: PassengerInfo[];
}

export default function PassengerResultCard({ from, to, date, passengers }: Props) {
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

      {passengers.map((p) => (
        <View key={p.id} style={styles.rideRow}>
          <View style={styles.leftColumn}>
            <Text style={styles.time}>
              {new Date(p.time).toLocaleTimeString("sl-SI", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </Text>
          </View>

          <View style={styles.centerColumn}>
            <Text style={styles.driver}>{p.passenger} {" "}
              <Text style={styles.stars}>{renderStars(p.rating)}</Text>
            </Text>
            <View style={styles.buttonRow}>
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Offer ride</Text>
              </Pressable>
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Message</Text>
              </Pressable>
            </View>
          </View>

          <View style={styles.rightColumn}>
            <Text style={styles.price}>{p.price}€</Text>
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