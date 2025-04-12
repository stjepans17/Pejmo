import React from "react";
import { View, Text, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";

interface Props {
  searchType: "ride" | "passenger";
  setSearchType: (type: "ride" | "passenger") => void;
  fromCity: string;
  toCity: string;
  setFromCity: (city: string) => void;
  setToCity: (city: string) => void;
}

const cities = [
  { label: "Ljubljana", value: "Ljubljana" },
  { label: "Maribor", value: "Maribor" },
  { label: "Koper", value: "Koper" },
  { label: "Celje", value: "Celje" },
  { label: "Novo mesto", value: "Novo mesto" },
  { label: "Kranj", value: "Kranj" },
];

export default function FromToSelector({
  searchType,
  setSearchType,
  fromCity,
  toCity,
  setFromCity,
  setToCity,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.toggleContainer}>
        <Text
          style={[styles.toggleText, searchType === "ride" && styles.active]}
          onPress={() => setSearchType("ride")}
        >
          ride
        </Text>
        <Text
          style={[styles.toggleText, searchType === "passenger" && styles.active]}
          onPress={() => setSearchType("passenger")}
        >
          passenger
        </Text>
      </View>

      <Text style={styles.label}>From:</Text>

      <View>
				<RNPickerSelect
					placeholder={{ label: "Choose city...", value: "" }}
					onValueChange={(value) => setFromCity(value)}
					items={cities}
					value={fromCity || ""}
					style={pickerStyles}
				/>
			</View>

      <Text style={styles.label}>To:</Text>
      <RNPickerSelect
        placeholder={{ label: "Choose city...", value: null }}
        onValueChange={setToCity}
        items={cities}
        value={toCity || ""}
        style={pickerStyles}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 20 },
  toggleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginBottom: 16,
  },
  toggleText: {
    padding: 8,
    fontWeight: "600",
    fontSize: 16,
    color: "#555",
  },
  active: {
    color: "#4600DE",
    textDecorationLine: "underline",
  },
  label: {
    marginTop: 12,
    fontWeight: "600",
  },
});

const pickerStyles = {
  inputIOS: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 6,
    marginTop: 4,
  },
  inputAndroid: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 6,
    marginTop: 4,
  },
};