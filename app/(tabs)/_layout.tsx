import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useSignup } from "@/context/SignupContext";
// import { Redirect } from "expo-router"; // trenutno ne rabiš

export default function TabLayout() {
  const { isLoggedIn } = useSignup();

  // Za testiranje login flow-a lahko to pustiš izklopljeno:
  // if (!isLoggedIn) return <Redirect href="/login" />;

  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = "home-outline";

          // Zaenkrat imaš samo "home"
          if (route.name === "home") {
            iconName = "home-outline";
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
    </Tabs>
  );
}
