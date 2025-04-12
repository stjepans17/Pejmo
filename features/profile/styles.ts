import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    backgroundColor: "#F4F4F4",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
    color: "#333",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 6,
    elevation: 4,
  },
  name: {
    fontSize: 20,
    fontWeight: "600",
    color: "#222",
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#555",
    marginTop: 12,
    marginBottom: 4,
  },
  value: {
    fontSize: 14,
    color: "#333",
    marginBottom: 12,
  },
  commentBlock: {
    marginBottom: 14,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  commentHeader: {
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  commentText: {
    fontSize: 14,
    color: "#444",
    lineHeight: 20,
  },
  stars: {
    color: "#FFD700",
  },
});