import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },

  heading: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
    marginTop: 12,
    textAlign: "center",
    color: "#222",
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 16,
    marginBottom: 8,
    paddingHorizontal: 16,
    color: "#333",
  },

  emptyText: {
    color: "#999",
    textAlign: "center",
    marginTop: 12,
  },

  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 40,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#222",
    marginBottom: 2,
  },

  cardSub: {
    fontSize: 14,
    color: "#555",
    marginVertical: 1,
  },

  cardActions: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 6,
    gap: 3,
  },

  acceptButton: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: "#E8E8FF",
    borderRadius: 6,  },
  
  messageButton: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: "#E8E8FF",
    borderRadius: 6,  },
  
  buttonText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#4600DE", // unified for all
  },

  declineButton: {
    backgroundColor: "none",
    borderColor: "#F44336",
    borderWidth: 2,
    color: "#fff",
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 6,
  },

  declineButtonText: {
    color: "#F44336"
  },
  
  // Navbar

  navbar: {
    flexDirection: "row",
    paddingTop: 16,
    paddingBottom: 12,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 3,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },

  navbarSide: {
    flex: 1,
    alignItems: "center",
  },

  navbarCenter: {
    flex: 3,
    alignItems: "center",
  },

  navbarTitle: {
    fontSize: 26,
    fontWeight: "700",
    letterSpacing: -1,
    color: "#4600DE",
  },

  main: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 16,
  },

  mainTitle: {
    marginBottom: 10,
    alignItems: "center",
  },

  mainTitleButtons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
  },

  mainRest: {
    flex: 1,
    marginTop: 12,
  },
  stars: {
    color: "#FBBF24", // gold but warmer
    fontSize: 14,
  },

  button: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: "#E8E8FF",
    borderRadius: 6,
    marginRight: 6,
  },
});