import React, { useState } from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import { RideItem } from "../../features/reservations/types";
import { styles } from "../../features/reservations/styles";
import { handleAccept, handleDecline, handleMessage, handleDelete, handleTrack } from "../../features/reservations/logic";
import CustomButton from "@/components/CustomButton";
import SentPassengerCard from "../../features/reservations/cards/SentPassengerCard";
import SentRideCard from "../../features/reservations/cards/SentRideCard";
import ReceivedPassengerCard from "../../features/reservations/cards/ReceivedPassengerCard";
import ReceivedRideCard from "../../features/reservations/cards/ReceivedRideCard";
import MapView, { Marker } from "react-native-maps";

export default function ReservationsScreen(): JSX.Element {
  const [chosenTab, setChosenTab] = useState<"Sent" | "Received">("Sent");
  const [trackingDriver, setTrackingDriver] = useState<string | null>(null);

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
    {
      id: "2",
      user: "Nika",
      rating: 4,
      from: "Celje",
      to: "Ptuj",
      dateTime: "Monday 07:30 AM",
      seats: 1,
      price: 3,
      status: "pending",
    },
    {
      id: "3",
      user: "Bine",
      rating: 5,
      from: "Maribor",
      to: "Ljubljana",
      dateTime: "Friday 5:00 PM",
      seats: 2,
      price: 6,
      status: "pending",
    },
  ]);

  const [sentDriverOffers, setSentDriverOffers] = useState<RideItem[]>([
    {
      id: "4",
      user: "Anže",
      rating: 5,
      from: "Celje",
      to: "Maribor",
      dateTime: "Friday 17:00",
      seats: 1,
      price: 4,
      status: "pending",
    },
    {
      id: "5",
      user: "Klara",
      rating: 4,
      from: "Novo mesto",
      to: "Kranj",
      dateTime: "Saturday 13:00",
      seats: 3,
      price: 7,
      status: "pending",
    },
    {
      id: "6",
      user: "Simon",
      rating: 5,
      from: "Murska Sobota",
      to: "Ljubljana",
      dateTime: "Sunday 09:00 AM",
      seats: 2,
      price: 8,
      status: "pending",
    },
  ]);

  const [receivedPassengerRequests, setReceivedPassengerRequests] = useState<RideItem[]>([
    {
      id: "7",
      user: "Maja",
      rating: 4,
      from: "Kranj",
      to: "Ljubljana",
      dateTime: "Monday 08:00",
      seats: 2,
      price: 6,
      status: "pending",
    },
    {
      id: "8",
      user: "Zoran",
      rating: 5,
      from: "Nova Gorica",
      to: "Postojna",
      dateTime: "Thursday 17:45",
      seats: 1,
      price: 5,
      status: "pending",
    },
    {
      id: "9",
      user: "Petra",
      rating: 4,
      from: "Kočevje",
      to: "Ljubljana",
      dateTime: "Tuesday 07:00",
      seats: 3,
      price: 4,
      status: "pending",
    },
  ]);

  const [receivedDriverOffers, setReceivedDriverOffers] = useState<RideItem[]>([
    {
      id: "10",
      user: "Tomaž",
      rating: 5,
      from: "Ljubljana",
      to: "Koper",
      dateTime: "Sunday 10:00 AM",
      seats: 2,
      price: 5,
      status: "pending",
    },
    {
      id: "11",
      user: "Nejc",
      rating: 4,
      from: "Ptuj",
      to: "Celje",
      dateTime: "Friday 18:30",
      seats: 1,
      price: 3,
      status: "pending",
    },
    {
      id: "12",
      user: "Eva",
      rating: 5,
      from: "Trbovlje",
      to: "Ljubljana",
      dateTime: "Saturday 12:00",
      seats: 2,
      price: 6,
      status: "pending",
    },
  ]);

  if (trackingDriver) {
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

        <Pressable onPress={() => setTrackingDriver(null)} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Back</Text>
        </Pressable>
        <Text style={styles.heading}>Tracking {trackingDriver}</Text>
        <MapView
          style={{ width: "100%", height: "85%" }}
          initialRegion={{
            latitude: 46.0569,
            longitude: 14.5058,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
        >
          <Marker
            coordinate={{ latitude: 46.0569, longitude: 14.5058 }}
            title="You"
            pinColor="blue"
          />
          <Marker
            coordinate={{
              latitude: 46.06 + Math.random() * 0.02,
              longitude: 14.51 + Math.random() * 0.02,
            }}
            title={trackingDriver}
            description="Driver's Location"
          />
        </MapView>
      </View>
</View>

    );
  }

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
          <View style={styles.toggleContainer}>
            <Pressable onPress={() => setChosenTab("Received")}>
              <Text
                style={[
                  styles.toggleText,
                  chosenTab === "Received" && styles.active,
                ]}
              >
                Received
              </Text>
            </Pressable>

            <Pressable onPress={() => setChosenTab("Sent")}>
              <Text
                style={[
                  styles.toggleText,
                  chosenTab === "Sent" && styles.active,
                ]}
              >
                Sent
              </Text>
            </Pressable>
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
                    onTrack={() => setTrackingDriver(item.user)}
                  />
                )}
                ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
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
                  />
                )}
                ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
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
                ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
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
                    // onTrack={() => handleTrack(item.id)}
                    onTrack={() => setTrackingDriver(item.user)}
                  />
                )}
                ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
                contentContainerStyle={styles.listContent}
              />
            </>
          )}
        </View>
      </View>
    </View>
  );
}