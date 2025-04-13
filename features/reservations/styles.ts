import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },

  heading: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 6,
    marginTop: 6,
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
    
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",

    width: 300,

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
    justifyContent: "center",
    marginTop: 6,
    gap: 3,
  },

  acceptButton: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: "#E8E8FF",
    borderRadius: 6,
  },

  messageButton: {
    paddingVertical: 6,
    paddingHorizontal: 5,
    backgroundColor: "#E8E8FF",
    borderRadius: 6,
  },

  buttonText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#4600DE", // unified for all
  },

  redButton: {
    paddingVertical: 6,
    paddingHorizontal: 5,
    borderColor: "#FF5252",
    borderWidth: 1,
    borderRadius: 6,
  },
  redButtonText: {
    color: "#FF5252",
    // fontWeight: "bold",
  },

  declineButton: {
    backgroundColor: "none",
    borderColor: "#F44336",
    borderWidth: 1,
    color: "#fff",
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 6,
  },

  declineButtonText: {
    color: "#F44336"
  },

  // Navbar

  navbar: {
    flex: 1,
    //height: 90,
    flexDirection: 'row',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
    zIndex: 10,
    backgroundColor: "#fff",
  },

  navbarSide: {
    flex: 1,
    alignItems: "center",
  },
  navbarCenter: {
    flex: 3,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 10
  },
  headerTitle: {
    color: '#4600DE',
    fontSize: 28,
  },
  navbarTitle: {
    fontSize: 28,
    // letterSpacing: -2.5,
    color: '#4600DE'
  },

  main: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center'
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
    paddingHorizontal: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E8E8FF",
    borderRadius: 6,
    marginRight: 6,
  },

  toggleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginBottom: 12,
  },
  toggleText: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    fontWeight: "600",
    fontSize: 16,
    color: "#666",
    borderRadius: 6,
  },
  active: {
    color: "#4600DE",
    backgroundColor: "#E8E8FF",
  },
  trackingContainer: {
    margin: 16,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 12,
    elevation: 2,
  },
  backButton: {
    marginTop: 4,
    marginLeft: 10,
    // marginBottom: 10,
    alignSelf: "flex-start",
  },
  backButtonText: {
    fontSize: 16,
    color: "#4600DE",
    fontWeight: "600",
  },


});