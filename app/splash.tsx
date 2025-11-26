// // SplashScreen.js
// import * as ExpoSplashScreen from 'expo-splash-screen';
// import React, { useEffect, useRef } from 'react';
// import { Animated, StyleSheet, Text, View } from 'react-native';

// export default function AnimatedSplash({ onFinish }) {
//   const fadeLogo = useRef(new Animated.Value(0)).current;
//   const fadeText = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     let isMounted = true;

//     async function runAnimation() {
//       try {
//         // Keep Expo splash visible
//         await ExpoSplashScreen.preventAutoHideAsync();

//         // Optional brief delay
//         await new Promise(resolve => setTimeout(resolve, 200));

//         // Animation sequence
//         Animated.sequence([
//           // Fade in logo and text together
//           Animated.parallel([
//             Animated.timing(fadeLogo, {
//               toValue: 1,
//               duration: 1000,
//               useNativeDriver: true,
//             }),
//             Animated.timing(fadeText, {
//               toValue: 1,
//               duration: 1000,
//               useNativeDriver: true,
//             }),
//           ]),
//           // Keep visible for 2 seconds
//           Animated.delay(2000),
//           // Fade out logo and text together slowly
//           Animated.parallel([
//             Animated.timing(fadeLogo, {
//               toValue: 0,
//               duration: 800,
//               useNativeDriver: true,
//             }),
//             Animated.timing(fadeText, {
//               toValue: 0,
//               duration: 800,
//               useNativeDriver: true,
//             }),
//           ]),
//         ]).start(async () => {
//           if (isMounted) {
//             await ExpoSplashScreen.hideAsync();
//             onFinish?.();
//           }
//         });
//       } catch (e) {
//         console.warn('Splash animation error:', e);
//         onFinish?.();
//       }
//     }

//     runAnimation();

//     return () => {
//       isMounted = false;
//     };
//   }, [fadeLogo, fadeText, onFinish]);

//   return (
//     <View style={styles.container}>
//       <Animated.Image
//         source={require('../assets/images/logo.png')} // adjust path as needed
//         style={[styles.logo, { opacity: fadeLogo }]}
//         resizeMode="contain"
//       />

//       <Animated.View style={{ opacity: fadeText, alignItems: 'center' }}>
//         <Text style={styles.title}>MELDA</Text>
//         <Text style={styles.subtitle}>
//           Find a Therapy Activity and your Psychologist
//         </Text>
//       </Animated.View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5b5d6ff',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   logo: {
//     width: 180,
//     height: 180,
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#150d0dff',
//   },
//   subtitle: {
//     fontSize: 14,
//     color: '#092648ff',
//     marginTop: 4,
//     textAlign: 'center',
//     paddingHorizontal: 20,
//        fontStyle: 'italic',
//            fontFamily: 'sans-serif',
//   },
// });

import * as ExpoSplashScreen from "expo-splash-screen";
import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";

export default function AnimatedSplash({ onFinish }) {
  const fadeLogo = useRef(new Animated.Value(0)).current;
  const fadeText = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    let isMounted = true;

    async function runAnimation() {
      try {
        // Keep Expo splash visible
        await ExpoSplashScreen.preventAutoHideAsync();

        // Optional small delay
        await new Promise((resolve) => setTimeout(resolve, 200));

        Animated.sequence([
          Animated.parallel([
            Animated.timing(fadeLogo, {
              toValue: 1,
              duration: 1000,
              useNativeDriver: true,
            }),
            Animated.timing(fadeText, {
              toValue: 1,
              duration: 1000,
              useNativeDriver: true,
            }),
          ]),
          Animated.delay(2000),
          Animated.parallel([
            Animated.timing(fadeLogo, {
              toValue: 0,
              duration: 800,
              useNativeDriver: true,
            }),
            Animated.timing(fadeText, {
              toValue: 0,
              duration: 800,
              useNativeDriver: true,
            }),
          ]),
        ]).start(async () => {
          if (isMounted) {
            await ExpoSplashScreen.hideAsync();
            onFinish?.();
          }
        });
      } catch (e) {
        console.warn("Splash animation error:", e);
        onFinish?.();
      }
    }

    runAnimation();

    return () => {
      isMounted = false;
    };
  }, [fadeLogo, fadeText, onFinish]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("../assets/images/logo.png")} // make sure path exists
        style={[styles.logo, { opacity: fadeLogo }]}
        resizeMode="contain"
      />

      <Animated.View style={{ opacity: fadeText, alignItems: "center" }}>
        <Text style={styles.title}>MELDA</Text>
        <Text style={styles.subtitle}>
          Find a Therapy Activity and your Psychologist
        </Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5b5d6ff",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#150d0dff",
  },
  subtitle: {
    fontSize: 14,
    color: "#092648ff",
    marginTop: 4,
    textAlign: "center",
    paddingHorizontal: 20,
    fontStyle: "italic",
    fontFamily: "sans-serif",
  },
});
