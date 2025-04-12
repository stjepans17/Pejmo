import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import { RideItem } from "../../features/reservations/types";
import { RideCard } from "../../features/reservations/RideCard";
import { styles } from "../../features/reservations/styles";
import { handleAccept, handleDecline, handleMessage } from "../../features/reservations/logic";
import CustomButton from "@/components/CustomButton";

export default function ReservationsScreen(): JSX.Element {
  const [chosenTab, setChosenTab] = useState<"Sent" | "Received">("Sent");

  // SENT
  const [sentPassengerRequests, setSentPassengerRequests] = useState<RideItem[]>([
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
  const [sentDriverOffers, setSentDriverOffers] = useState<RideItem[]>([
    {
      id: "3",
      user: "Anže",
      rating: 5,
      from: "Celje",
      to: "Maribor",
      dateTime: "Friday 17:00",
      seats: 1,
      price: 4,
      status: "pending",
    },
  ]);

  // RECEIVED
  const [receivedPassengerRequests, setReceivedPassengerRequests] = useState<RideItem[]>([
    {
      id: "4",
      user: "Maja",
      rating: 4,
      from: "Kranj",
      to: "Ljubljana",
      dateTime: "Monday 08:00",
      seats: 2,
      price: 6,
      status: "pending",
    },
  ]);
  const [receivedDriverOffers, setReceivedDriverOffers] = useState<RideItem[]>([
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
      <View style={styles.main}>
        <View style={styles.mainTitle}>
          <Text style={styles.heading}>Reservations</Text>
          <View style={styles.mainTitleButtons}>
            <CustomButton
              title="Sent"
              onPress={() => setChosenTab("Sent")}
              backgroundColor="#FFF"
              textColor={chosenTab === "Sent" ? "#4600DE" : "#000"}
              fontSize={14}
              padding={12}
              borderRadius={10}
              style={{
                borderWidth: 2,
                borderColor: chosenTab === "Sent" ? "#4600DE" : "#D8D8DC",
              }}
            />

            <CustomButton
              title="Received"
              onPress={() => setChosenTab("Received")}
              backgroundColor="#FFF"
              textColor={chosenTab === "Received" ? "#4600DE" : "#000"}
              fontSize={14}
              padding={12}
              borderRadius={10}
              width={'40%'}
              height={'80%'}
              style={{
                borderWidth: 2,
                borderColor: chosenTab === "Received" ? "#4600DE" : "#D8D8DC",
              }}
            />
          </View>
        </View>

        <View style={styles.mainRest}>
          {chosenTab === "Sent" ? (
            <>
              <Text style={styles.sectionTitle}>Your Passenger Requests</Text>
              {sentPassengerRequests.length === 0 ? (
                <Text style={styles.emptyText}>No passenger requests sent</Text>
              ) : (
                <FlatList
                  horizontal
                  data={sentPassengerRequests}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <RideCard
                      item={item}
                      isPassenger={true}
                      onAccept={() => handleAccept(item.id, true, setSentPassengerRequests)}
                      onDecline={() => handleDecline(item.id, true, setSentPassengerRequests)}
                      onMessage={() => handleMessage(item.user)}
                    />
                  )}
                  contentContainerStyle={styles.listContent}
                />
              )}

              <Text style={styles.sectionTitle}>Your Driver Offers</Text>
              {sentDriverOffers.length === 0 ? (
                <Text style={styles.emptyText}>No driver offers sent</Text>
              ) : (
                <FlatList
                  horizontal
                  data={sentDriverOffers}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <RideCard
                      item={item}
                      isPassenger={false}
                      onAccept={() => handleAccept(item.id, false, setSentDriverOffers)}
                      onDecline={() => handleDecline(item.id, false, setSentDriverOffers)}
                      onMessage={() => handleMessage(item.user)}
                    />
                  )}
                  contentContainerStyle={styles.listContent}
                />
              )}
            </>
          ) : (
            <>
              <Text style={styles.sectionTitle}>Passenger Requests Received</Text>
              {receivedPassengerRequests.length === 0 ? (
                <Text style={styles.emptyText}>No passenger requests received</Text>
              ) : (
                <FlatList
                  horizontal
                  data={receivedPassengerRequests}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <RideCard
                      item={item}
                      isPassenger={true}
                      onAccept={() => handleAccept(item.id, true, setReceivedPassengerRequests)}
                      onDecline={() => handleDecline(item.id, true, setReceivedPassengerRequests)}
                      onMessage={() => handleMessage(item.user)}
                    />
                  )}
                  contentContainerStyle={styles.listContent}
                />
              )}

              <Text style={styles.sectionTitle}>Driver Offers Received</Text>
              {receivedDriverOffers.length === 0 ? (
                <Text style={styles.emptyText}>No driver offers received</Text>
              ) : (
                <FlatList
                  horizontal
                  data={receivedDriverOffers}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <RideCard
                      item={item}
                      isPassenger={false}
                      onAccept={() => handleAccept(item.id, false, setReceivedDriverOffers)}
                      onDecline={() => handleDecline(item.id, false, setReceivedDriverOffers)}
                      onMessage={() => handleMessage(item.user)}
                    />
                  )}
                  contentContainerStyle={styles.listContent}
                />
              )}
            </>
          )}
        </View>
      </View>
    </View>
  );
}