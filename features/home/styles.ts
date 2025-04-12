import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#f4f4f4",
  },
  heading: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  navbar: {
    // flex: 1,
    height: 90,
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
  screenContainer: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },
  scrollContainer: {
    padding: 20,
    flexGrow: 1,
  },
});

export default styles;