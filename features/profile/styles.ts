import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // padding: 24,
    backgroundColor: "#F9FAFB",
  },
  main: {
    flex: 11
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 24,
    color: "#111827",
    textAlign: "center",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  name: {
    fontSize: 22,
    fontWeight: "600",
    color: "#1F2937",
    marginBottom: 12,
    textAlign: "center",
  },
  label: {
    fontSize: 15,
    fontWeight: "600",
    color: "#4B5563",
    marginTop: 16,
    marginBottom: 6,
  },
  value: {
    fontSize: 15,
    color: "#374151",
    marginBottom: 12,
  },
  commentBlock: {
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
  },
  commentHeader: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 4,
  },
  commentText: {
    fontSize: 14,
    color: "#374151",
    lineHeight: 20,
  },
  stars: {
    color: "#FBBF24", // gold but warmer
    fontSize: 14,
  },
  statusText: {
    fontWeight: "bold",
  },
  
  statusPending: {
    color: "#FFA500", // Orange
  },
  
  statusCompleted: {
    color: "#4CAF50", // Green
  },
  
  statusDeclined: {
    color: "#F44336", // Red
  },
  
  statusInProgress: {
    color: "#2196F3", // Blue
  },
  navbarTitle: {
    fontSize: 28,
    letterSpacing: -2.5,
    color: '#4600DE'
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
    marginBottom: 10
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
  }
});