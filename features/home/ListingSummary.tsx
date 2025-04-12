import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  from: string;
  to: string;
}

export default function ListingSummary({ from, to }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.route}>
          {from} → {to}
        </Text>
        <Ionicons name="swap-horizontal" size={22} />
      </View>

      {["Sunday", "Monday"].map((day) => (
        <View key={day} style={styles.row}>
          <Text style={styles.day}>{day}</Text>
          <Text style={styles.data}>10 rides | 11 passengers</Text>
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
    marginTop: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 3,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  route: {
    fontWeight: "600",
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  day: {
    fontWeight: "500",
  },
  data: {
    color: "#444",
  },
});