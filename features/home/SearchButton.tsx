import { Pressable, Text, StyleSheet } from "react-native";

export default function SearchButton({ onPress }: { onPress: () => void }) {
  return (
    <Pressable style={styles.btn} onPress={onPress}>
      <Text style={styles.text}>Search</Text>
    </Pressable>
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