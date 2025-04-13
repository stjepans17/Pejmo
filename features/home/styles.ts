import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f9f9f9",
  },
  heading: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    marginVertical: 20,
    color: "#333",
  },
  toggleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
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
  main: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainAdd: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  mainContent: {
    width: '80%'
  },
  navbarSide: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 10
  },
  navbarCenter: {
    flex: 3,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 10
  },
  navbarTitle: {
    fontSize: 28,
    letterSpacing: -2.5,
    color: '#4600DE'
  },
  screenContainer: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },
  scrollContainer: {
    padding: 20,
    flexGrow: 1,
  },
  backButton: {
    marginTop: 10,
    marginBottom: 10,
    alignSelf: "flex-start",
  },
  backButtonText: {
    fontSize: 16,
    color: "#4600DE",
    fontWeight: "600",
  },

  resultWrapper: {
    marginTop: 24,
  },
  resultsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  resultTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
  },
  resultDate: {
    fontSize: 15,
    color: "#555",
  },
  label: {
    marginTop: 12,
    fontWeight: "600",
    fontSize: 15,
    color: "#333",
  },
  input: {
    backgroundColor: "#f5f5f5",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#ddd",
    marginTop: 4,
  },
});