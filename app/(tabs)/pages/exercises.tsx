// import * as Speech from "expo-speech";
// import React, { useEffect, useRef, useState } from "react";
// import {
//   Animated,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// export default function BreathingExercise() {
//   const [started, setStarted] = useState(false);
//   const [phase, setPhase] = useState("Get Ready");
//   const [timeElapsed, setTimeElapsed] = useState(0); // seconds elapsed
//   const circleAnim = useRef(new Animated.Value(1)).current;

//   const phases = [
//     { name: "Inhale", duration: 4 },
//     { name: "Hold", duration: 4 },
//     { name: "Exhale", duration: 6 },
//     { name: "Hold", duration: 2 },
//   ];

//   const speak = (text: string) => {
//     Speech.speak(text, { rate: 0.9 });
//   };

//   useEffect(() => {
//     if (started) {
//       speak("Get ready to begin your breathing exercise.");
//       startCycle();
//     }
//   }, [started]);

//   // Animate circle with a promise
//   const animateCircle = (scale: number, duration: number) => {
//     return new Promise((resolve) => {
//       Animated.timing(circleAnim, {
//         toValue: scale,
//         duration: duration,
//         useNativeDriver: true,
//       }).start(() => resolve(true));
//     });
//   };

//   // Breathing cycle
//   const startCycle = async () => {
//     let totalSeconds = 0;

//     while (totalSeconds < 240) {
//       // total session 4 minutes
//       for (const p of phases) {
//         if (totalSeconds >= 240) break;

//         setPhase(p.name);
//         speak(p.name);

//         // Animate the circle
//         const scale = p.name === "Inhale" ? 1.5 : 1;
//         animateCircle(scale, p.duration * 1000);

//         // Update timer every second
//         for (let i = 0; i < p.duration; i++) {
//           await new Promise((res) => setTimeout(res, 1000));
//           totalSeconds += 1;
//           setTimeElapsed(totalSeconds);
//         }
//       }
//     }

//     speak("Well done! You have completed your session.");
//     setPhase("Done");
//     setStarted(false);
//   };

//   const onPressExplore = (activity: string) => {
//     speak(`Exploring ${activity}`);
//   };

//   const formatTime = (seconds: number) => {
//     const min = Math.floor(seconds / 60);
//     const sec = seconds % 60;
//     return `${min}:${sec.toString().padStart(2, "0")}`;
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Buddha Breathing Exercise</Text>

//       <Animated.View
//         style={[styles.circle, { transform: [{ scale: circleAnim }] }]}
//       >
//         <TouchableOpacity
//           style={styles.iconButton}
//           onPress={() => onPressExplore("Meditation")}
//         >
//           <Icon name="meditation" size={40} color="#fff" />
//           <Text style={styles.iconText}>Meditation</Text>
//         </TouchableOpacity>
//       </Animated.View>

//       <Text style={styles.phaseText}>{phase}</Text>
//       <Text style={styles.timerText}>{formatTime(timeElapsed)}</Text>

//       {!started && (
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => setStarted(true)}
//         >
//           <Text style={styles.buttonText}>Start</Text>
//         </TouchableOpacity>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F0D9B5",
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "700",
//     color: "#B77466",
//     marginBottom: 20,
//   },
//   circle: {
//     width: 220,
//     height: 220,
//     borderRadius: 110,
//     backgroundColor: "#E2B59A",
//     alignItems: "center",
//     justifyContent: "center",
//     marginBottom: 20,
//   },
//   iconButton: {
//     alignItems: "center",
//   },
//   iconText: {
//     color: "#fff",
//     marginTop: 8,
//     fontSize: 14,
//     fontWeight: "600",
//     textAlign: "center",
//   },
//   phaseText: {
//     fontSize: 22,
//     fontWeight: "700",
//     color: "#713d32",
//     marginBottom: 10,
//   },
//   timerText: {
//     fontSize: 20,
//     fontWeight: "600",
//     color: "#5A4938",
//     marginBottom: 20,
//   },
//   button: {
//     backgroundColor: "#B77466",
//     paddingVertical: 14,
//     paddingHorizontal: 30,
//     borderRadius: 16,
//   },
//   buttonText: {
//     color: "#FFF3DE",
//     fontWeight: "700",
//     fontSize: 16,
//   },
// });
import * as Speech from "expo-speech";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function BreathingExercise() {
  const [started, setStarted] = useState(false);
  const [phase, setPhase] = useState("Get Ready");
  const [timeElapsed, setTimeElapsed] = useState(0);

  const circleAnim = useRef(new Animated.Value(1)).current;
  const isRunningRef = useRef(false);

  const TOTAL_TIME = 240; // 4 minutes

  const phases = [
    { name: "Inhale", duration: 4 },
    { name: "Hold", duration: 4 },
    { name: "Exhale", duration: 6 },
    { name: "Hold", duration: 2 },
  ];

  const speak = (text: string) => {
    Speech.stop();
    Speech.speak(text, { rate: 0.9 });
  };

  useEffect(() => {
    if (started) {
      isRunningRef.current = true;
      speak("Get ready to begin your breathing exercise.");
      startCycle();
    }

    return () => {
      isRunningRef.current = false;
      Speech.stop();
      circleAnim.stopAnimation();
    };
  }, [started]);

  const animateCircle = (scale: number, duration: number) => {
    Animated.timing(circleAnim, {
      toValue: scale,
      duration,
      useNativeDriver: true,
    }).start();
  };

  const startCycle = async () => {
    let totalSeconds = 0;

    while (totalSeconds < TOTAL_TIME && isRunningRef.current) {
      for (const p of phases) {
        if (!isRunningRef.current || totalSeconds >= TOTAL_TIME) break;

        setPhase(p.name);
        speak(p.name);

        animateCircle(p.name === "Inhale" ? 1.35 : 1, p.duration * 1000);

        for (let i = 0; i < p.duration; i++) {
          if (!isRunningRef.current) return;

          await new Promise((res) => setTimeout(res, 1000));
          totalSeconds++;
          setTimeElapsed(totalSeconds);
        }
      }
    }

    if (isRunningRef.current) {
      speak("Well done. You have completed your session.");
    }

    stopExercise();
  };

  const stopExercise = () => {
    isRunningRef.current = false;
    Speech.stop();
    circleAnim.stopAnimation();
    circleAnim.setValue(1);
    setStarted(false);
    setPhase("Get Ready");
    setTimeElapsed(0);
  };

  const formatTime = (seconds: number) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buddha Breathing</Text>

      <View style={styles.circleWrapper}>
        <Animated.View
          style={[styles.circle, { transform: [{ scale: circleAnim }] }]}
        >
          <Icon name="meditation" size={48} color="#FFF" />
        </Animated.View>
      </View>

      <Text style={styles.phaseText}>{phase}</Text>
      <Text style={styles.timerText}>{formatTime(timeElapsed)}</Text>

      <TouchableOpacity
        style={[styles.button, started && { backgroundColor: "#8C4A3F" }]}
        onPress={() => {
          started ? stopExercise() : setStarted(true);
        }}
      >
        <Text style={styles.buttonText}>{started ? "Stop" : "Start"}</Text>
      </TouchableOpacity>
    </View>
  );
}

/* ✅ STYLES MUST BE DEFINED HERE */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0D9B5",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#B77466",
    marginBottom: 24,
  },
  // circle: {
  //   width: 220,
  //   height: 220,
  //   borderRadius: 110,
  //   backgroundColor: "#E2B59A",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   marginBottom: 24,
  // },
  circle: {
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: "#E2B59A",
    alignItems: "center",
    justifyContent: "center",
  },

  circleWrapper: {
    height: 300, // gives room for scale animation
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },

  phaseText: {
    fontSize: 22,
    fontWeight: "700",
    color: "#713D32",
    marginBottom: 8,
  },
  timerText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#5A4938",
    marginBottom: 24,
  },
  button: {
    backgroundColor: "#B77466",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 18,
  },
  buttonText: {
    color: "#FFF3DE",
    fontWeight: "700",
    fontSize: 16,
  },
});
