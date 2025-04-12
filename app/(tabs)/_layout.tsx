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
              iconName = "home-outline";
              break;
            case "reservations":
              iconName = "home-outline";
              break;
            case "profile":
              iconName = "home-outline";
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
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}