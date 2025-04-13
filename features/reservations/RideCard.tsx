import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { RideItem } from "./types";
import { styles } from "./styles";
import { renderStars } from "@/utils";

interface RideCardProps {
  item: RideItem;
  isPassenger: boolean;
  onAccept?: () => void;
  onDecline?: () => void;
  onMessage?: () => void;
  onTrack?: () => void;
  onDelete?: () => void;
  showTrackButton?: boolean;
}

export const RideCard = ({
  item,
  isPassenger,
  onAccept,
  onDecline,
  onMessage,
  onTrack,
  onDelete,
  showTrackButton,
}: RideCardProps) => (
  <View style={styles.card}>
    {/* Row 1: Name + Stars + Price */}
    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
      <Text style={styles.cardTitle}>
        {item.user} • <Text style={styles.stars}>{renderStars(item.rating)}</Text>
      </Text>
      <Text style={[styles.cardTitle, { fontWeight: "700", color: "#222" }]}>€{item.price}</Text>
    </View>

    {/* Row 2: Date & time */}
    {/* <Text style={[styles.cardSub, { fontSize: 13, color: "#666", marginBottom: 4 }]}> */}
    <Text style={[styles.cardSub]}>
      {item.dateTime}
    </Text>

    {/* Row 3: Route */}
    <Text style={styles.cardSub}>{item.from} → {item.to}</Text>

    {/* Row 4: Seats */}
    {isPassenger && (
      <Text style={styles.cardSub}>Seats needed: {item.seats}</Text>
    )}

    {/* Action Buttons */}
    <View style={styles.cardActions}>
      { onAccept ? (
        <TouchableOpacity style={styles.button} onPress={onAccept}>
          <Text style={styles.buttonText}>Accept</Text>
        </TouchableOpacity>
      ) : null}
      { onMessage ? (
        <TouchableOpacity style={styles.button} onPress={onMessage}>
          <Text style={styles.buttonText}>Message</Text>
        </TouchableOpacity>
      ) : null }
      {showTrackButton && onTrack && (
        <TouchableOpacity style={styles.button} onPress={onTrack}>
          <Text style={styles.buttonText}>Track</Text>
        </TouchableOpacity>
      )}
      { onDecline ? (
        <TouchableOpacity style={styles.redButton} onPress={onDecline}>
          <Text style={styles.redButtonText}>Decline</Text>
        </TouchableOpacity>
      ) : null }
      { onDelete ? (
          <TouchableOpacity style={styles.redButton} onPress={onDecline}>
            <Text style={styles.redButtonText}>Delete</Text>
          </TouchableOpacity>
        ) : null
      }
    </View>
  </View>
);