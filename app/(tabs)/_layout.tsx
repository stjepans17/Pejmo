import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useSignup } from "@/context/SignupContext";
// import { Redirect } from "expo-router"; // for auth gating

export default function TabLayout() {
  const { isLoggedIn } = useSignup();

  // Uncomment if you want to protect routes
  // if (!isLoggedIn) return <Redirect href="/login" />;

  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          switch (route.name) {
            case "home":
              iconName = "home-outline"; // 🏠 Home page
              break;
            case "reservations":
              iconName = "calendar-outline"; // 📅 Bookings / Reservations
              break;
            case "add":
              iconName = "add-circle-outline";
              break;
            case "profile":
              iconName = "person-outline"; // 👤 Profile
              break;
            case "messages":
              iconName = "chatbubble-ellipses-outline"; // 💬 Messages
              break;
            default:
              iconName = "home-outline";
              break;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: {
          backgroundColor: "white",
          borderTopWidth: 0,
          elevation: 3,
          shadowOpacity: 0.05,
        },
        tabBarActiveTintColor: "#4600DE",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tabs.Screen name="home" options={{ title: "Home" }} />
      <Tabs.Screen name="reservations" options={{ title: "Reservations" }} />
      <Tabs.Screen name="add" options={{ title: "Add" }} />
      <Tabs.Screen name="messages" options={{ title: "Messages" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}