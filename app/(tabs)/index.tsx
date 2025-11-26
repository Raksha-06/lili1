// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
//bothe lines not for expo

//import { AppRegistry } from 'react-native';
// import App from './App';
// import { name as appName } from './app.json';

// AppRegistry.registerComponent(appName, () => App);
//to make app.ja as entry but here im using index.js
// index.tsx
/////////////////////////////////////////////////////////////////////
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useRouter } from 'expo-router';
// import React, { useEffect, useState } from 'react';
// import AnimatedSplash from '../splash';

// export default function Index() {
//   const [showSplash, setShowSplash] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     const checkSplash = async () => {
//       const hasSeenSplash = await AsyncStorage.getItem('hasSeenSplash');

//       if (hasSeenSplash) {
//         // Already opened → skip splash
//         setShowSplash(false);
//         router.replace('/pages/home'); 
//       }
//       // else → keep splash showing
//     };

//     checkSplash();
//   }, []);

//   const handleSplashFinish = async () => {
//     await AsyncStorage.setItem('hasSeenSplash', 'true'); // mark splash seen
//     setShowSplash(false);
//     router.replace('/pages/home'); // navigate after splash
//   };

//   return showSplash ? <AnimatedSplash onFinish={handleSplashFinish} /> : null;
// }

////////////////////////////////////////////////////////////////////////////////////

// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useRouter } from 'expo-router';
// import React, { useEffect, useState } from 'react';
// import AnimatedSplash from '../splash';
// //import LoginScreen from './pages/userLoginPage'; // fixed case-sensitive import

// export default function Index() {
//   const [showSplash, setShowSplash] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     const checkSplash = async () => {
//       try {
//         const hasSeenSplash = await AsyncStorage.getItem('hasSeenSplash');
//         if (hasSeenSplash) {
//           // Skip splash completely and go to home
//           setShowSplash(false);
//           router.replace("/(tabs)/pages/home");
//         }
//       } catch (error) {
//         console.error("Error reading splash status:", error);
//       }
//     };

//     checkSplash();
//   }, []);

//   const handleSplashFinish = async () => {
//     try {
//       await AsyncStorage.setItem('hasSeenSplash', 'true'); 
//       setShowSplash(false);
//       router.replace("/(tabs)/pages/home");
//     } catch (error) {
//       console.error("Error saving splash status:", error);
//     }
//   };

//   // Show splash screen if needed
//   if (showSplash) {
//     return <AnimatedSplash onFinish={handleSplashFinish} />;
//   }

//   // After splash → show login page
//   //return <LoginScreen />;
// }
///////////////////////////////////////////////////
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import AnimatedSplash from "../splash";
// import LoginScreen from "./pages/userlLoginPage";
export default function Index() {
  const router = useRouter();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // When splash finishes, go to home
    if (!showSplash) {
      // router.replace("/(tabs)/pages/home");
         router.replace("/(tabs)/pages/userlLoginPage");
    }
  }, [showSplash]);

  const finishSplash = () => {
    setShowSplash(false);
  };

  // Show splash while true
  if (showSplash) return <AnimatedSplash onFinish={finishSplash} />;

  return null; // Home is handled by router.replace
}
