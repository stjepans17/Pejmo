import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface DayData {
  label: string;
  rides: number;
  passengers: number;
}

interface Props {
  from: string;
  to: string;
  days: DayData[];
}

export default function ListingSummary({ from, to, days }: Props) {
  const handlePress = (day: string) => {
    console.log(`Pressed ${day}`);
  };

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.route}>
          {from} → {to}
        </Text>
        <Ionicons name="swap-horizontal" size={22} color="#444" />
      </View>

      {days.map((day) => (
        <Pressable
          key={day.label}
          onPress={() => handlePress(day.label)}
          style={({ pressed }) => [
            styles.dayRow,
            pressed && styles.dayRowPressed,
          ]}
        >
          <Text style={styles.dayLabel}>{day.label}</Text>
          <Text style={styles.dayData}>
            {day.rides} rides | {day.passengers} passengers
          </Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 16,
    marginHorizontal: 16,
    marginTop: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  route: {
    fontSize: 17,
    fontWeight: "600",
    color: "#222",
  },
  dayRow: {
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 8,
    marginBottom: 6,
    backgroundColor: "#F6F6F6",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dayRowPressed: {
    backgroundColor: "#EDEAFF",
  },
  dayLabel: {
    fontWeight: "600",
    color: "#333",
  },
  dayData: {
    fontSize: 14,
    color: "#555",
  },
});