import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";

interface Props {
  searchType: "ride" | "passenger";
  setSearchType: (type: "ride" | "passenger") => void;
  fromCity: string;
  toCity: string;
  setFromCity: (city: string) => void;
  setToCity: (city: string) => void;
}

const allCities = [
  "Ljubljana", "Maribor", "Koper", "Celje", "Novo mesto", "Kranj", "Velenje",
  "Nova Gorica", "Ptuj", "Murska Sobota",
];

export default function FromToSelector({
  searchType,
  setSearchType,
  fromCity,
  toCity,
  setFromCity,
  setToCity,
}: Props) {
  const [fromQuery, setFromQuery] = useState(fromCity);
  const [toQuery, setToQuery] = useState(toCity);
  const [showFromSuggestions, setShowFromSuggestions] = useState(false);
  const [showToSuggestions, setShowToSuggestions] = useState(false);

  const filteredFrom = allCities.filter(city =>
    city.toLowerCase().includes(fromQuery.toLowerCase()) && city !== toQuery
  );
  const filteredTo = allCities.filter(city =>
    city.toLowerCase().includes(toQuery.toLowerCase()) && city !== fromQuery
  );

  return (
    <View style={styles.container}>
      {/* From input */}
      <Text style={styles.label}>From:</Text>
      <TextInput
        value={fromQuery}
        onChangeText={(text) => {
          setFromQuery(text);
          setShowFromSuggestions(true);
        }}
        onFocus={() => setShowFromSuggestions(true)}
        placeholder="Start typing..."
        style={styles.input}
      />
      {showFromSuggestions && filteredFrom.length > 0 && (
        <FlatList
          data={filteredFrom}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                setFromCity(item);
                setFromQuery(item);
                setShowFromSuggestions(false);
              }}
              style={styles.suggestion}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
        />
      )}

      {/* To input */}
      <Text style={styles.label}>To:</Text>
      <TextInput
        value={toQuery}
        onChangeText={(text) => {
          setToQuery(text);
          setShowToSuggestions(true);
        }}
        onFocus={() => setShowToSuggestions(true)}
        placeholder="Start typing..."
        style={styles.input}
      />
      {showToSuggestions && filteredTo.length > 0 && (
        <FlatList
          data={filteredTo}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                setToCity(item);
                setToQuery(item);
                setShowToSuggestions(false);
              }}
              style={styles.suggestion}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    marginTop: 4,
    gap: 8,
  },
  label: {
    fontWeight: "600",
    fontSize: 15,
    color: "#333",
    marginBottom: 4,
  },
  input: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#ddd",
    fontSize: 15,
  },
  suggestion: {
    padding: 10,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
});