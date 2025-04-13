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
    margin: "auto",
    marginTop: 16,
    // marginBottom: 8,
    backgroundColor: "#4600DE",
    paddingVertical: 12,
    borderRadius: 8,
    width: "50%",
  },
  text: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
  },
});