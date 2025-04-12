import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { RideItem } from "./types";
import { styles } from "./styles";

interface RideCardProps {
  item: RideItem;
  isPassenger: boolean;
  onAccept: () => void;
  onDecline: () => void;
  onMessage: () => void;
}

export const RideCard = ({
  item,
  isPassenger,
  onAccept,
  onDecline,
  onMessage,
}: RideCardProps) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>
      {item.user} ({item.rating} ★)
    </Text>
    <Text style={styles.cardSub}>
      From: {item.from} → {item.to}
    </Text>
    <Text style={styles.cardSub}>Date/Time: {item.dateTime}</Text>
    {isPassenger && (
      <Text style={styles.cardSub}>Seats needed: {item.seats}</Text>
    )}
    <Text style={styles.cardSub}>Price offer: €{item.price}</Text>

    <View style={styles.cardActions}>
      <TouchableOpacity style={styles.acceptButton} onPress={onAccept}>
        <Text style={styles.buttonText}>Accept</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.declineButton} onPress={onDecline}>
        <Text style={styles.buttonText}>Decline</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.messageButton} onPress={onMessage}>
        <Text style={styles.buttonText}>Message</Text>
      </TouchableOpacity>
    </View>
  </View>
);