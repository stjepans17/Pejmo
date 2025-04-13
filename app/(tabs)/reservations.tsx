import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import { RideItem } from "../../features/reservations/types";
import { styles } from "../../features/reservations/styles";
import { handleAccept, handleDecline, handleMessage, handleDelete, handleTrack } from "../../features/reservations/logic";
import CustomButton from "@/components/CustomButton";
import SentPassengerCard from "../../features/reservations/cards/SentPassengerCard";
import SentRideCard from "../../features/reservations/cards/SentRideCard";
import ReceivedPassengerCard from "../../features/reservations/cards/ReceivedPassengerCard";
import ReceivedRideCard from "../../features/reservations/cards/ReceivedRideCard";

export default function ReservationsScreen(): JSX.Element {
  const [chosenTab, setChosenTab] = useState<"Sent" | "Received">("Sent");

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
      <View style={styles.navbar}>
        <View style={styles.navbarSide}></View>
        <View style={styles.navbarCenter}>
          <Text style={styles.headerTitle}>pejmo!</Text>
        </View>
        <View style={styles.navbarSide}></View>
      </View>

      <View style={styles.main}>
        <View style={styles.mainTitle}>
          <Text style={styles.heading}>Reservations</Text>
          <View style={styles.mainTitleButtons}>
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
              style={{ borderWidth: 2, borderColor: chosenTab === "Received" ? "#4600DE" : "#D8D8DC" }}
            />
            <CustomButton
              title="Sent"
              onPress={() => setChosenTab("Sent")}
              backgroundColor="#FFF"
              textColor={chosenTab === "Sent" ? "#4600DE" : "#000"}
              fontSize={14}
              padding={12}
              borderRadius={10}
              style={{ borderWidth: 2, borderColor: chosenTab === "Sent" ? "#4600DE" : "#D8D8DC" }}
            />
          </View>
        </View>

        <View style={styles.mainRest}>
          {chosenTab === "Sent" ? (
            <>
              <Text style={styles.sectionTitle}>Your Passenger Requests</Text>
              <FlatList
                horizontal
                data={sentPassengerRequests}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <SentPassengerCard
                    item={item}
                    onDelete={() => handleDecline(item.id, true, setSentPassengerRequests)}
                    onMessage={() => {}}
                    onTrack={() => handleMessage(item.user)}
                  />
                )}
                contentContainerStyle={styles.listContent}
              />

              <Text style={styles.sectionTitle}>Your Driver Offers</Text>
              <FlatList
                horizontal
                data={sentDriverOffers}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <SentRideCard
                    item={item}
                    onMessage={() => {}}
                    onDelete={() => handleDecline(item.id, false, setSentDriverOffers)}
                    onTrack={() => {}}
                  />
                )}
                contentContainerStyle={styles.listContent}
              />
            </>
          ) : (
            <>
              <Text style={styles.sectionTitle}>Passenger Requests Received</Text>
              <FlatList
                horizontal
                data={receivedPassengerRequests}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <ReceivedPassengerCard
                    item={item}
                    onAccept={() => handleAccept(item.id, true, setReceivedPassengerRequests)}
                    onDecline={() => handleDecline(item.id, true, setReceivedPassengerRequests)}
                    onMessage={() => handleMessage(item.user)}
                  />
                )}
                contentContainerStyle={styles.listContent}
              />

              <Text style={styles.sectionTitle}>Driver Offers Received</Text>
              <FlatList
                horizontal
                data={receivedDriverOffers}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <ReceivedRideCard
                    item={item}
                    onAccept={() => handleAccept(item.id, false, setReceivedDriverOffers)}
                    onDecline={() => handleDecline(item.id, false, setReceivedDriverOffers)}
                    onMessage={() => handleMessage(item.user)}
                    onTrack={() => handleTrack(item.id)}
                  />
                )}
                contentContainerStyle={styles.listContent}
              />
            </>
          )}
        </View>
      </View>
    </View>
  );
}