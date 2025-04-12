// app/(tabs)/home.tsx
import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import FromToSelector from "../../features/home/FromToSelector";
import DateSelector from "../../features/home/DateSelector";
import SearchButton from "../../features/home/SearchButton";
import ListingSummary from "../../features/home/ListingSummary";
import styles from "../../features/home/styles";
import RNPickerSelect from "react-native-picker-select";

export default function HomeScreen() {
    const [searchType, setSearchType] = useState<"ride" | "passenger">("ride");
    // const [fromCity, setFromCity] = useState("");
    // const [toCity, setToCity] = useState("");
    const [fromCity, setFromCity] = useState<string>("Ljubljana");
    const [toCity, setToCity] = useState<string>("Koper");
    const [dateTime, setDateTime] = useState<Date | null>(null);

    return (
        <View style={styles.screenContainer}>
            <View style={styles.navbar}>
                <View style={styles.navbarSide}></View>
                <View style={styles.navbarCenter}>
                    <Text style={styles.navbarTitle}>pejmo!</Text>
                </View>
                <View style={styles.navbarSide}></View>
            </View>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <RNPickerSelect
                    placeholder={{ label: "Choose city...", value: null }}
                    onValueChange={setToCity}
                    items={[{ label: "Ljubljana", value: "Ljubljana" },]}
                    value={toCity || ""}
                />

                <Text style={styles.heading}>I’m looking for a:</Text>

                <FromToSelector
                    searchType={searchType}
                    setSearchType={setSearchType}
                    fromCity={fromCity}
                    toCity={toCity}
                    setFromCity={setFromCity}
                    setToCity={setToCity}
                />

                <DateSelector dateTime={dateTime} setDateTime={setDateTime} />

                <SearchButton />

                {/* Listings */}
                <ListingSummary from="Ljubljana" to="Koper" />
                <ListingSummary from="Ljubljana" to="Celje" />
                <ListingSummary from="Maribor" to="Novo mesto" />
                <ListingSummary from="Kranj" to="Ljubljana" />
            </ScrollView>
        </View>

    );
}