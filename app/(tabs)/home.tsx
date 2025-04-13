import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import FromToSelector from "../../features/home/FromToSelector";
import DateSelector from "../../features/home/DateSelector";
import SearchButton from "../../features/home/SearchButton";
import RideResultCard from "../../features/home/RideResultCard";
import ListingSummary from "../../features/home/ListingSummary";
import { styles } from "../../features/home/styles";
import PassengerResultCard from "@/features/home/PassengerResultCard";
import { getAllPassengers, getAllRides } from "@/services/api";

interface RideResult {
  id: number;
  time: string;
  driverUsername: string;
  driver: string;
  rating: number;
  price: number;
}

interface PassengerResult {
  id: string;
  time: string;
  passenger: string;
  rating: number;
  price: number;
}

export default function HomeScreen() {
  const [searchType, setSearchType] = useState<"ride" | "passenger">("ride");
  const [searchTypeUsed, setSearchTypeUsed] = useState<"ride" | "passenger">("ride");
  const [fromCity, setFromCity] = useState("Ljubljana");
  const [toCity, setToCity] = useState("Koper");
  const [dateTime, setDateTime] = useState<Date>(new Date());
  const [searchResultsVisible, setSearchResultsVisible] = useState(false);
  const [rideResults, setRideResults] = useState<RideResult[]>([]);
  const [passengerResults, setPassengerResults] = useState<PassengerResult[]>([]);

  const listings = [
    {
      id: "1",
      from: "Ljubljana",
      to: "Koper",
      days: [
        { label: "Sunday", rides: 10, passengers: 11 },
        { label: "Monday", rides: 8, passengers: 6 },
      ],
    },
    {
      id: "2",
      from: "Ljubljana",
      to: "Celje",
      days: [
        { label: "Tuesday", rides: 4, passengers: 5 },
        { label: "Wednesday", rides: 6, passengers: 7 },
      ],
    },
  ];

  const fetchSearchResults = async () => {
    if (!fromCity || !toCity || !dateTime) {
      alert("Please fill in all fields.");
      return;
    }

    setSearchTypeUsed(searchType);
    setSearchResultsVisible(true);

    if (searchType === "ride") {
      try {
        const isoDate = dateTime.toISOString().split(".")[0];
        const rides = await getAllRides(fromCity, toCity, isoDate);

        const mapped = rides.map((r) => ({
          // id: r.id.toString(),
          id: r.id,
          time: new Date(r.startTime).toLocaleTimeString("sl-SI", {
            hour: "2-digit",
            minute: "2-digit",
          }),
          driverUsername: r.driver.username,
          driver: `${r.driver.firstName} ${r.driver.lastName}`,
          rating: r.driver.averageRating,
          price: r.price,
        }));

        setRideResults(mapped);
      } catch (error) {
        alert("Failed to fetch ride results.");
      }
    } else {
      try {
        const localDate = new Date(dateTime);
        localDate.setHours(0, 0, 0, 0); // force time to 00:00:00.000

        const isoDate = localDate.toISOString().split(".")[0];
        const passengers = await getAllPassengers(fromCity, toCity, isoDate);

        const mapped = passengers.map((p) => ({
          id: p.id.toString(),
          time: p.startTime,
          passenger: `${p.firstName} ${p.lastName}`,
          rating: p.averageRating,
          price: p.price,
        }));

        setPassengerResults(mapped);
      } catch (error) {
        alert("Failed to fetch passenger results.");
      }
    }
  };

  useEffect(() => {
    if (searchResultsVisible && searchType !== searchTypeUsed) {
      fetchSearchResults();
    }
  }, [searchType]);

  const handleBack = () => {
    setSearchResultsVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <View style={styles.navbarSide}></View>
        <View style={styles.navbarCenter}>
          <Text style={styles.navbarTitle}>pejmo!</Text>
        </View>
        <View style={styles.navbarSide}></View>
      </View>

      <View style={styles.main}>
        <View style={styles.mainContent}>
          <FlatList
            data={searchResultsVisible ? [] : listings}
            keyExtractor={(item) => item.id}
            extraData={{ fromCity, toCity, dateTime, searchType }}
            renderItem={({ item }) => (
              <ListingSummary from={item.from} to={item.to} days={item.days} />
            )}
            ListHeaderComponent={
              <View style={styles.container}>
                <Text style={styles.heading}>I'm looking for a:</Text>

                <View style={styles.toggleContainer}>
                  <Pressable onPress={() => setSearchType("ride")}>
                    <Text style={[styles.toggleText, searchType === "ride" && styles.active]}>
                      Ride
                    </Text>
                  </Pressable>
                  <Pressable onPress={() => setSearchType("passenger")}>
                    <Text style={[styles.toggleText, searchType === "passenger" && styles.active]}>
                      Passenger
                    </Text>
                  </Pressable>
                </View>

                {!searchResultsVisible && (
                  <View style={styles.inputs}>
                    <FromToSelector
                      searchType={searchType}
                      setSearchType={setSearchType}
                      fromCity={fromCity}
                      toCity={toCity}
                      setFromCity={setFromCity}
                      setToCity={setToCity}
                    />
                    <DateSelector dateTime={dateTime} setDateTime={setDateTime} />
                    <SearchButton onPress={fetchSearchResults} />
                  </View>
                )}

                {searchResultsVisible && (
                  <>
                    <Pressable onPress={handleBack} style={styles.backButton}>
                      <Text style={styles.backButtonText}>← Back</Text>
                    </Pressable>

                    {searchType === "ride" ? (
                      <RideResultCard
                        from={fromCity}
                        to={toCity}
                        date={dateTime}
                        rides={rideResults}
                      />
                    ) : (
                      <PassengerResultCard
                        from={fromCity}
                        to={toCity}
                        date={dateTime}
                        passengers={passengerResults}
                      />
                    )}
                  </>
                )}
              </View>
            }
            contentContainerStyle={{ paddingBottom: 80 }}
          />
        </View>
      </View>
    </View>
  );
}

