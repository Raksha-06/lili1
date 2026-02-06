// import { router, useLocalSearchParams } from "expo-router";
// import { useState } from "react";
// import {
//   ScrollView,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import { CBT_ACTIVITIES_DATA } from "../../../data/cbtActivities";

// export default function ActivityJourneyPage() {
//   const { activity } = useLocalSearchParams<{ activity: string }>();
//   const activityData = CBT_ACTIVITIES_DATA[activity];

//   const [currentStep, setCurrentStep] = useState(0);
//   const [responses, setResponses] = useState<string[]>([]);

//   if (!activityData) {
//     return (
//       <View style={styles.center}>
//         <Text>Activity not found</Text>
//       </View>
//     );
//   }

//   const step = activityData.steps[currentStep];
//   const isLastStep = currentStep === activityData.steps.length;

//   const handleNext = () => {
//     setCurrentStep((prev) => prev + 1);
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       {/* Header */}
//       <View style={styles.headerCard}>
//         <Text style={styles.title}>{activityData.title}</Text>
//         <Text style={styles.subtitle}>{activityData.description}</Text>

//         <View style={styles.badge}>
//           <Text style={styles.badgeText}>
//             🎯 Step {Math.min(currentStep + 1, activityData.steps.length)} /{" "}
//             {activityData.steps.length}
//           </Text>
//         </View>
//       </View>

//       {!isLastStep ? (
//         <View style={styles.stepCard}>
//           <Text style={styles.stepTitle}>{step.title}</Text>
//           <Text style={styles.stepExplain}>{step.explain}</Text>

//           {/* Examples / Hints */}
//           {step.examples?.length > 0 && (
//             <View style={styles.examplesBox}>
//               <Text style={styles.examplesTitle}>💡 Examples</Text>
//               {step.examples.map((ex: string, i: number) => (
//                 <View key={i} style={styles.exampleChip}>
//                   <Text style={styles.exampleText}>{ex}</Text>
//                 </View>
//               ))}
//             </View>
//           )}

//           {/* Input */}
//           <TextInput
//             style={styles.input}
//             placeholder="Type your thoughts here..."
//             placeholderTextColor="#94A3B8"
//             multiline
//             value={responses[currentStep] || ""}
//             onChangeText={(text) => {
//               const updated = [...responses];
//               updated[currentStep] = text;
//               setResponses(updated);
//             }}
//           />

//           <TouchableOpacity style={styles.button} onPress={handleNext}>
//             <Text style={styles.buttonText}>Continue ➜</Text>
//           </TouchableOpacity>
//         </View>
//       ) : (
//         /* Final Summary Screen */
//         <View style={styles.finalCard}>
//           <Text style={styles.finalTitle}>🌼 You Completed This Journey</Text>
//           <Text style={styles.finalSubtitle}>
//             Take a moment to see what you reflected on
//           </Text>

//           {activityData.steps.map((s: any, i: number) => (
//             <View key={i} style={styles.summaryItem}>
//               <Text style={styles.summaryTitle}>{s.title}</Text>
//               <Text style={styles.summaryText}>{responses[i] || "—"}</Text>
//             </View>
//           ))}

//           <View style={styles.reframeBox}>
//             <Text style={styles.reframeTitle}>✨ Gentle Reframe</Text>
//             <Text style={styles.reframeText}>
//               {activityData.reframeExamples?.[0]}
//             </Text>
//           </View>

//           <TouchableOpacity
//             style={[styles.button, styles.doneButton]}
//             onPress={() => router.back()}
//           >
//             <Text style={styles.buttonText}>Finish</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     backgroundColor: "#F5F7FF",
//   },

//   center: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   headerCard: {
//     backgroundColor: "#EEF2FF",
//     borderRadius: 20,
//     padding: 20,
//     marginBottom: 18,
//   },

//   title: {
//     fontSize: 26,
//     fontWeight: "700",
//     color: "#312E81",
//   },

//   subtitle: {
//     fontSize: 14,
//     color: "#4338CA",
//     marginTop: 6,
//   },

//   badge: {
//     alignSelf: "flex-start",
//     marginTop: 12,
//     backgroundColor: "#C7D2FE",
//     paddingVertical: 6,
//     paddingHorizontal: 12,
//     borderRadius: 999,
//   },

//   badgeText: {
//     fontSize: 12,
//     fontWeight: "600",
//     color: "#1E1B4B",
//   },

//   stepCard: {
//     backgroundColor: "#FFFFFF",
//     borderRadius: 22,
//     padding: 22,
//     shadowColor: "#000",
//     shadowOpacity: 0.05,
//     shadowRadius: 12,
//     elevation: 4,
//   },

//   stepTitle: {
//     fontSize: 20,
//     fontWeight: "700",
//     color: "#0F172A",
//     marginBottom: 8,
//   },

//   stepExplain: {
//     fontSize: 14,
//     color: "#475569",
//     lineHeight: 20,
//     marginBottom: 14,
//   },

//   examplesBox: {
//     backgroundColor: "#F1F5FF",
//     padding: 14,
//     borderRadius: 16,
//     marginBottom: 16,
//   },

//   examplesTitle: {
//     fontSize: 13,
//     fontWeight: "700",
//     color: "#4338CA",
//     marginBottom: 8,
//   },

//   exampleChip: {
//     backgroundColor: "#E0E7FF",
//     paddingVertical: 6,
//     paddingHorizontal: 10,
//     borderRadius: 12,
//     marginBottom: 6,
//   },

//   exampleText: {
//     fontSize: 13,
//     color: "#3730A3",
//   },

//   input: {
//     minHeight: 110,
//     backgroundColor: "#F8FAFC",
//     borderRadius: 16,
//     padding: 14,
//     fontSize: 14,
//     textAlignVertical: "top",
//     borderWidth: 1,
//     borderColor: "#E2E8F0",
//     marginBottom: 18,
//   },

//   button: {
//     backgroundColor: "#6366F1",
//     paddingVertical: 14,
//     borderRadius: 16,
//     alignItems: "center",
//   },

//   doneButton: {
//     marginTop: 24,
//     backgroundColor: "#22C55E",
//   },

//   buttonText: {
//     color: "#FFFFFF",
//     fontWeight: "700",
//     fontSize: 15,
//   },

//   finalCard: {
//     backgroundColor: "#FFFFFF",
//     borderRadius: 24,
//     padding: 22,
//   },

//   finalTitle: {
//     fontSize: 22,
//     fontWeight: "800",
//     color: "#065F46",
//   },

//   finalSubtitle: {
//     fontSize: 14,
//     color: "#047857",
//     marginBottom: 18,
//   },

//   summaryItem: {
//     marginBottom: 14,
//   },

//   summaryTitle: {
//     fontSize: 13,
//     fontWeight: "700",
//     color: "#334155",
//   },

//   summaryText: {
//     fontSize: 14,
//     color: "#475569",
//     marginTop: 2,
//   },

//   reframeBox: {
//     marginTop: 20,
//     backgroundColor: "#ECFDF5",
//     padding: 16,
//     borderRadius: 16,
//   },

//   reframeTitle: {
//     fontSize: 14,
//     fontWeight: "800",
//     color: "#065F46",
//     marginBottom: 6,
//   },

//   reframeText: {
//     fontSize: 14,
//     color: "#047857",
//   },
// });
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
  LayoutAnimation,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  UIManager,
  View,
} from "react-native";
import ConfettiCannon from "react-native-confetti-cannon";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { CBT_ACTIVITIES_DATA } from "../../../data/cbtActivities";

// Enable LayoutAnimation on Android
if (Platform.OS === "android") {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

// ----------------- Progress Bar -----------------
const ProgressBar = ({ progress }: { progress: number }) => {
  const animatedProgress = useSharedValue(0);

  useEffect(() => {
    animatedProgress.value = withTiming(progress, { duration: 500 });
  }, [progress]);

  const barStyle = useAnimatedStyle(() => ({
    width: `${animatedProgress.value * 100}%`,
  }));

  return (
    <View style={styles.progressBackground}>
      <Animated.View style={[styles.progressFill, barStyle]} />
    </View>
  );
};

// ----------------- Main Page -----------------
export default function ActivityJourneyPage() {
  const { activity } = useLocalSearchParams<{ activity: string }>();
  const activityData = CBT_ACTIVITIES_DATA[activity];

  const [currentStep, setCurrentStep] = useState(-1); // -1 = start screen
  const [responses, setResponses] = useState<string[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showExamples, setShowExamples] = useState(false);

  if (!activityData) {
    return (
      <View style={styles.center}>
        <Text>Activity not found</Text>
      </View>
    );
  }

  const totalSteps = activityData.steps.length;
  const isLastStep = currentStep === totalSteps;
  const step = activityData.steps[currentStep];

  const handleNext = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setShowExamples(false);
    setCurrentStep((prev) => prev + 1);
  };

  useEffect(() => {
    if (isLastStep) {
      setShowConfetti(true);
    }
  }, [isLastStep]);

  // ----------------- Start Screen -----------------
  if (currentStep === -1) {
    return (
      <View style={styles.startContainer}>
        <View style={styles.startCard}>
          <Text style={styles.startTitle}>{activityData.title}</Text>
          <Text style={styles.startDescription}>
            {activityData.description}
          </Text>
          <Text style={styles.totalMinTimeMinutes}>
            Max Duration : {activityData.totalMinTimeMinutes} minutes
          </Text>

          <TouchableOpacity style={styles.startButton} onPress={handleNext}>
            <Text style={styles.startButtonText}>Start</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  // ----------------- Step / Final -----------------
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {showConfetti && (
        <ConfettiCannon
          count={150}
          origin={{ x: 0, y: 0 }}
          fadeOut
          fallSpeed={4000}
        />
      )}

      <ProgressBar
        progress={Math.min(currentStep + 1, totalSteps) / totalSteps}
      />

      {!isLastStep ? (
        <View style={styles.stepCard}>
          <Text style={styles.stepTitle}>{step.title}</Text>
          <Text style={styles.stepExplain}>{step.explain}</Text>

          {/* Examples toggle */}
          {step.examples?.length > 0 && (
            <View style={{ marginBottom: 12 }}>
              <TouchableOpacity
                style={styles.exampleToggleButton}
                onPress={() => {
                  LayoutAnimation.configureNext(
                    LayoutAnimation.Presets.easeInEaseOut,
                  );
                  setShowExamples((prev) => !prev);
                }}
              >
                <Text style={styles.exampleToggleText}>
                  {showExamples ? "Hide Examples ▲" : "Show Examples ▼"}
                </Text>
              </TouchableOpacity>
              {showExamples && (
                <View style={styles.examplesBox}>
                  {step.examples.map((ex: string, i: number) => (
                    <View key={i} style={styles.exampleChip}>
                      <Text style={styles.exampleText}>{ex}</Text>
                    </View>
                  ))}
                </View>
              )}
            </View>
          )}

          {/* Input */}
          <TextInput
            style={styles.input}
            placeholder="Type your thoughts here..."
            placeholderTextColor="#94A3B8"
            multiline
            value={responses[currentStep] || ""}
            onChangeText={(text) => {
              const updated = [...responses];
              updated[currentStep] = text;
              setResponses(updated);
            }}
          />

          <TouchableOpacity style={styles.button} onPress={handleNext}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      ) : (
        // Final Summary
        <View style={styles.finalCard}>
          <Text style={styles.finalTitle}>🌼 You Completed This Journey</Text>
          <Text style={styles.finalSubtitle}>
            Take a moment to see what you reflected on
          </Text>

          {activityData.steps.map((s: any, i: number) => (
            <View key={i} style={styles.summaryItem}>
              <Text style={styles.summaryTitle}>{s.title}</Text>
              <Text style={styles.summaryText}>{responses[i] || "—"}</Text>
            </View>
          ))}

          <View style={styles.reframeBox}>
            <Text style={styles.reframeTitle}>✨ Gentle Reframe</Text>
            <Text style={styles.reframeText}>
              {activityData.reframeExamples?.[0]}
            </Text>
          </View>

          <TouchableOpacity
            style={[styles.button, styles.doneButton]}
            onPress={() => router.back()}
          >
            <Text style={styles.buttonText}>Finish</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // ----------------- Start Screen -----------------
  startContainer: {
    flex: 1,
    backgroundColor: "#C9A68E", // warm muted background
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  startCard: {
    backgroundColor: "#F3E2C1", // soft cream, gentle on eyes
    borderRadius: 24,
    padding: 30,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 8,
    width: "100%",
  },
  startTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: "#B77466", // coral accent
    marginBottom: 12,
    textAlign: "center",
  },
  startDescription: {
    fontSize: 16,
    color: "#7D6C58", // soft brown
    marginBottom: 24,
    lineHeight: 22,
    textAlign: "center",
  },
  totalMinTimeMinutes: {
    fontSize: 16,
    color: "#7D6C58",
    marginBottom: 24,
    lineHeight: 22,
    textAlign: "center",
  },
  startButton: {
    backgroundColor: "#E2B59A",
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: "center",
    shadowColor: "#E2B59A",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 6,
  },
  startButtonText: { color: "#5A4938", fontWeight: "700", fontSize: 18 },

  // ----------------- Main Container -----------------
  container: {
    padding: 20,
    backgroundColor: "#F0D9B5", // warm cream
    paddingBottom: 60,
  },
  center: { flex: 1, alignItems: "center", justifyContent: "center" },

  // ----------------- Step Card -----------------
  stepCard: {
    backgroundColor: "#F3E2C1", // soft cream card
    borderRadius: 24,
    padding: 22,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 4,
    marginTop: 20,
    marginBottom: 20,
  },
  stepTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#B77466", // coral
    marginBottom: 8,
  },
  stepExplain: {
    fontSize: 14,
    color: "#7D6C58", // soft brown
    lineHeight: 20,
    marginBottom: 12,
  },

  // Examples toggle
  exampleToggleButton: { paddingVertical: 6 },
  exampleToggleText: { color: "#B77466", fontWeight: "600", fontSize: 14 },
  examplesBox: { marginTop: 8 },
  exampleChip: {
    backgroundColor: "#E2B59A",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    marginBottom: 6,
  },
  exampleText: { fontSize: 13, color: "#5A4938" },

  // Input
  input: {
    minHeight: 110,
    backgroundColor: "#F0D9B5",
    borderRadius: 16,
    padding: 14,
    fontSize: 14,
    textAlignVertical: "top",
    borderWidth: 1,
    borderColor: "#D3A88C",
    marginBottom: 18,
    color: "#5A4938",
  },

  // Buttons
  button: {
    backgroundColor: "#E2B59A",
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: "center",
    marginTop: 6,
  },
  buttonText: { color: "#5A4938", fontWeight: "700", fontSize: 15 },
  doneButton: { backgroundColor: "#B77466", marginTop: 24 },

  // ----------------- Final Summary -----------------
  finalCard: { backgroundColor: "#F3E2C1", borderRadius: 24, padding: 22 },
  finalTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#B77466",
    marginBottom: 6,
  },
  finalSubtitle: { fontSize: 14, color: "#7D6C58", marginBottom: 18 },
  summaryItem: {
    marginBottom: 14,
    backgroundColor: "#E2B59A",
    padding: 12,
    borderRadius: 14,
  },
  summaryTitle: { fontSize: 13, fontWeight: "700", color: "#8b4b3e" },
  summaryText: { fontSize: 14, color: "#453425", marginTop: 2 },

  // Reframe
  reframeBox: {
    marginTop: 20,
    backgroundColor: "#F0D9B5",
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#D3A88C",
  },
  reframeTitle: {
    fontSize: 14,
    fontWeight: "800",
    color: "#713d32",
    marginBottom: 6,
  },
  reframeText: { fontSize: 14, color: "#713d32" },

  // Progress bar
  progressBackground: {
    width: "100%",
    height: 10,
    backgroundColor: "#F0D9B5",
    borderRadius: 10,
    marginVertical: 16,
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#B77466",
    borderRadius: 10,
  },
});
