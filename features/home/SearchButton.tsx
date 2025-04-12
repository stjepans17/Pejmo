import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function SearchButton() {
  return (
    <TouchableOpacity style={styles.btn}>
      <Text style={styles.text}>Search</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    marginTop: 16,
    backgroundColor: "#4600DE",
    paddingVertical: 12,
    borderRadius: 8,
  },
  text: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
  },
});