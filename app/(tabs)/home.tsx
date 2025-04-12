import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import FromToSelector from "../../features/home/FromToSelector";
import DateSelector from "../../features/home/DateSelector";
import SearchButton from "../../features/home/SearchButton";
import RideResultCard from "../../features/home/RideResultCard";
import ListingSummary from "../../features/home/ListingSummary";
import { styles } from "../../features/home/styles";
import PassengerResultCard from "@/features/home/PassengerResultCard";

interface RideResult {
  id: string;
  time: string;
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

  const fetchSearchResults = () => {
    if (!fromCity || !toCity || !dateTime) {
      alert("Please fill in all fields.");
      return;
    }

    setSearchTypeUsed(searchType);
    setSearchResultsVisible(true);

    setTimeout(() => {
      if (searchType === "ride") {
        setRideResults([
          { id: "1", time: "10:00", driver: "Tomaz", rating: 5, price: 5 },
          { id: "2", time: "11:30", driver: "Matej", rating: 4, price: 6 },
        ]);
      } else {
        setPassengerResults([
          {
            id: "p1",
            time: "09:00",
            passenger: "Sara",
            rating: 5,
            price: 4,
          },
          {
            id: "p2",
            time: "14:45",
            passenger: "Nejc",
            rating: 4,
            price: 5,
          },
        ]);
      }
    }, 500);
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
            renderItem={({ item }) => (
              <ListingSummary from={item.from} to={item.to} days={item.days} />
            )}
            ListHeaderComponent={
              <View style={styles.container}>
                <Text style={styles.heading}>I'm looking for a:</Text>

                <View style={styles.toggleContainer}>
                  <Pressable onPress={() => setSearchType("ride")}>
                    <Text style={[styles.toggleText, searchType === "ride" && styles.active]}>Ride</Text>
                  </Pressable>

                  <Pressable onPress={() => setSearchType("passenger")}>
                    <Text style={[styles.toggleText, searchType === "passenger" && styles.active]}>Passenger</Text>
                  </Pressable>
                </View>

                {!searchResultsVisible && (
                  <>
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
                  </>
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
