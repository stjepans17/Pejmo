import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 8,
    marginBottom: 8,
  },
  emptyText: {
    color: "#888",
    marginVertical: 8,
  },
  listContent: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  cardSub: {
    fontSize: 14,
    marginVertical: 2,
  },
  cardActions: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 12,
  },
  acceptButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  declineButton: {
    backgroundColor: "#F44336",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  messageButton: {
    backgroundColor: "#2196F3",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});