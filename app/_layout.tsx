// import { Stack } from "expo-router";

// export default function RootLayout() {
//   return <Stack />;
// }

// // import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
// // import { Stack } from "expo-router";
// // import { StatusBar } from "expo-status-bar";
// // import { useEffect } from "react";
// // import "react-native-reanimated";
// // import * as SplashScreen from "expo-splash-screen";

// // import { useColorScheme } from "@/hooks/useColorScheme";

// // // Prevent the splash screen from auto-hiding before asset loading is complete.
// // SplashScreen.preventAutoHideAsync();

// // export default function RootLayout() {
// //   const colorScheme = useColorScheme();

// //   useEffect(() => {
// //     SplashScreen.hideAsync();
// //   }, []);

// //   return (
// //     <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
// //       <Stack>
// //         <Stack.Screen name="index" options={{ headerShown: false }} />
// //         <Stack.Screen name="signup" options={{ headerShown: false }} />
// //         <Stack.Screen name="signup2" options={{ headerShown: false }} />
// //         <Stack.Screen name="login" options={{ headerShown: false }} />
// //         <Stack.Screen name="home" options={{ headerShown: false }} />
// //       </Stack>
// //       <StatusBar style="auto" />
// //     </ThemeProvider>
// //   );
// // }


// //THIS IS LAST VERSION
// // import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
// // import { Stack } from "expo-router";
// // import { StatusBar } from "expo-status-bar";
// // import { useEffect } from "react";
// // import "react-native-reanimated";
// // import * as SplashScreen from "expo-splash-screen";

// // import { useColorScheme } from "@/hooks/useColorScheme";
// // import { SignupProvider } from "@/context/SignupContext"; 

// // // Prevent the splash screen from auto-hiding before asset loading is complete.
// // SplashScreen.preventAutoHideAsync();

// // export default function RootLayout() {
// //   const colorScheme = useColorScheme();

// //   useEffect(() => {
// //     SplashScreen.hideAsync();
// //   }, []);

// //   return (
// //     <SignupProvider> 
// //       <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
// //         <Stack>
// //           <Stack.Screen name="index" options={{ headerShown: false }} />
// //           <Stack.Screen name="signup" options={{ headerShown: false }} />
// //           <Stack.Screen name="signup2" options={{ headerShown: false }} />
// //           <Stack.Screen name="login" options={{ headerShown: false }} />
// //           <Stack.Screen name="home" options={{ headerShown: false }} />
// //         </Stack>
// //         <StatusBar style="auto" />
// //       </ThemeProvider>
// //     </SignupProvider>
// //   );
// // }

// import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
// import { Stack, useRouter, Redirect } from "expo-router";
// import { StatusBar } from "expo-status-bar";
// import { useEffect } from "react";
// import "react-native-reanimated";
// import * as SplashScreen from "expo-splash-screen";

// import { useColorScheme } from "@/hooks/useColorScheme";
// import { SignupProvider, useSignup } from "@/context/SignupContext"; 

// // Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

// export default function RootLayout() {
//   const colorScheme = useColorScheme();

//   useEffect(() => {
//     SplashScreen.hideAsync();
//   }, []);

//   return (
//     <SignupProvider> 
//       <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
//         <AuthNavigation />
//         <StatusBar style="auto" />
//       </ThemeProvider>
//     </SignupProvider>
//   );
// }

// // ✅ Function to handle navigation based on authentication
// function AuthNavigation() {
//   const { isLoggedIn } = useSignup();

//   if (isLoggedIn) {
//     return <Redirect href="/(tabs)/home" />; // Redirect to tabs when logged in
//   }

//   return (
//     <Stack>
//       <Stack.Screen name="index" options={{ headerShown: false }} />
//       <Stack.Screen name="signup" options={{ headerShown: false }} />
//       <Stack.Screen name="signup2" options={{ headerShown: false }} />
//       <Stack.Screen name="login" options={{ headerShown: false }} />
//     </Stack>
//   );
// }


import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Slot, Redirect, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import "react-native-reanimated";
import * as SplashScreen from "expo-splash-screen";

import { useColorScheme } from "@/hooks/useColorScheme";
import { SignupProvider, useSignup } from "@/context/SignupContext";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <SignupProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <AuthNavigation />
        <StatusBar style="auto" />
      </ThemeProvider>
    </SignupProvider>
  );
}

function AuthNavigation() {
  const { isLoggedIn } = useSignup();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  // Wait for the layout to mount before navigating
  useEffect(() => {
    setMounted(true);
  }, []);

  // Once mounted, perform navigation
  useEffect(() => {
    if (mounted) {
      if (isLoggedIn) {
        router.replace("/"); 
      }
    }
  }, [isLoggedIn, mounted]);

  return <Slot />; 
}



