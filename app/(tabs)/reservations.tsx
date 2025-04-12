import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import { RideItem } from "../../features/reservations/types";
import { RideCard } from "../../features/reservations/RideCard";
import { styles } from "../../features/reservations/styles";
import { handleAccept, handleDecline, handleMessage } from "../../features/reservations/logic";

export default function ReservationsScreen(): JSX.Element {
  const [passengerRequests, setPassengerRequests] = useState<RideItem[]>([
    {
      id: "1",
      user: "Tikei",
      rating: 5,
      from: "Ljubljana",
      to: "Koper",
      dateTime: "Sunday 10:00 AM",
      seats: 3,
      price: 5,
      status: "pending",
    },
  ]);

  const [driverOffers, setDriverOffers] = useState<RideItem[]>([
    {
      id: "2",
      user: "Tomaž",
      rating: 5,
      from: "Ljubljana",
      to: "Koper",
      dateTime: "Sunday 10:00 AM",
      seats: 2,
      price: 5,
      status: "pending",
    },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Reservations</Text>

      <Text style={styles.sectionTitle}>Passenger requests</Text>
      {passengerRequests.length === 0 ? (
        <Text style={styles.emptyText}>You have no passenger requests</Text>
      ) : (
        <FlatList
          data={passengerRequests}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <RideCard
              item={item}
              isPassenger={true}
              onAccept={() => handleAccept(item.id, true, setPassengerRequests)}
              onDecline={() => handleDecline(item.id, true, setPassengerRequests)}
              onMessage={() => handleMessage(item.user)}
            />
          )}
          contentContainerStyle={styles.listContent}
        />
      )}

      <Text style={styles.sectionTitle}>Driver offers</Text>
      {driverOffers.length === 0 ? (
        <Text style={styles.emptyText}>You have no driver offers</Text>
      ) : (
        <FlatList
          data={driverOffers}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <RideCard
              item={item}
              isPassenger={false}
              onAccept={() => handleAccept(item.id, false, setDriverOffers)}
              onDecline={() => handleDecline(item.id, false, setDriverOffers)}
              onMessage={() => handleMessage(item.user)}
            />
          )}
          contentContainerStyle={styles.listContent}
        />
      )}
    </View>
  );
}