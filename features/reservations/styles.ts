import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // paddingTop: 20,
    // paddingHorizontal: 16,
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
  navbar: {
    flex: 1,
    flexDirection: 'row',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
    zIndex: 10,
    backgroundColor: "#fff"
  },
  main: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  navbarSide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  navbarCenter: {
    flex: 3,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 9
  },
  navbarTitle: {
    fontSize: 28,
    letterSpacing: -2.5,
    color: '#4600DE'
  },
  mainTitle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainTitleButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  mainRest: {
    flex: 3
  }
});