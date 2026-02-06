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
//       <Text style={styles.title}>{activityData.title}</Text>
//       <Text style={styles.subtitle}>{activityData.description}</Text>

//       {/* Progress */}
//       <Text style={styles.progress}>
//         Step {Math.min(currentStep + 1, activityData.steps.length)} of{" "}
//         {activityData.steps.length}
//       </Text>

//       {/* Steps */}
//       {!isLastStep ? (
//         <View style={styles.card}>
//           <Text style={styles.stepTitle}>{step.title}</Text>
//           <Text style={styles.stepDescription}>{step.description}</Text>

//           <TextInput
//             style={styles.input}
//             placeholder="Type your thoughts here..."
//             multiline
//             value={responses[currentStep] || ""}
//             onChangeText={(text) => {
//               const updated = [...responses];
//               updated[currentStep] = text;
//               setResponses(updated);
//             }}
//           />

//           <TouchableOpacity style={styles.button} onPress={handleNext}>
//             <Text style={styles.buttonText}>Continue</Text>
//           </TouchableOpacity>
//         </View>
//       ) : (
//         /* Final Summary */
//         <View style={styles.card}>
//           <Text style={styles.stepTitle}>✨ Your Reflection</Text>

//           {activityData.steps.map((s, i) => (
//             <View key={i} style={styles.summaryItem}>
//               <Text style={styles.summaryTitle}>{s.title}</Text>
//               <Text style={styles.summaryText}>{responses[i] || "—"}</Text>
//             </View>
//           ))}

//           <View style={styles.reframeBox}>
//             <Text style={styles.reframeTitle}>Reframed Thought</Text>
//             <Text style={styles.reframeText}>
//               {activityData.reframeTemplate}
//             </Text>
//           </View>

//           <TouchableOpacity
//             style={[styles.button, styles.doneButton]}
//             onPress={() => router.back()}
//           >
//             <Text style={styles.buttonText}>Finish Activity</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     </ScrollView>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     backgroundColor: "#FAFBFF",
//   },

//   center: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   title: {
//     fontSize: 24,
//     fontWeight: "700",
//     color: "#1E293B",
//     marginBottom: 6,
//   },

//   subtitle: {
//     fontSize: 14,
//     color: "#64748B",
//     marginBottom: 20,
//   },

//   progress: {
//     fontSize: 12,
//     color: "#94A3B8",
//     marginBottom: 12,
//   },

//   card: {
//     backgroundColor: "#FFFFFF",
//     borderRadius: 18,
//     padding: 20,
//     shadowColor: "#000",
//     shadowOpacity: 0.05,
//     shadowRadius: 10,
//     elevation: 3,
//   },

//   stepTitle: {
//     fontSize: 18,
//     fontWeight: "600",
//     color: "#0F172A",
//     marginBottom: 6,
//   },

//   stepDescription: {
//     fontSize: 14,
//     color: "#475569",
//     marginBottom: 14,
//   },

//   input: {
//     minHeight: 100,
//     backgroundColor: "#F8FAFC",
//     borderRadius: 12,
//     padding: 12,
//     fontSize: 14,
//     textAlignVertical: "top",
//     borderWidth: 1,
//     borderColor: "#E2E8F0",
//     marginBottom: 16,
//   },

//   button: {
//     backgroundColor: "#6366F1",
//     paddingVertical: 14,
//     borderRadius: 14,
//     alignItems: "center",
//   },

//   doneButton: {
//     marginTop: 20,
//     backgroundColor: "#22C55E",
//   },

//   buttonText: {
//     color: "#FFFFFF",
//     fontWeight: "600",
//   },

//   summaryItem: {
//     marginBottom: 12,
//   },

//   summaryTitle: {
//     fontSize: 13,
//     fontWeight: "600",
//     color: "#334155",
//   },

//   summaryText: {
//     fontSize: 14,
//     color: "#475569",
//   },

//   reframeBox: {
//     marginTop: 20,
//     backgroundColor: "#EEF2FF",
//     padding: 14,
//     borderRadius: 12,
//   },

//   reframeTitle: {
//     fontSize: 14,
//     fontWeight: "700",
//     color: "#4338CA",
//     marginBottom: 6,
//   },

//   reframeText: {
//     fontSize: 14,
//     color: "#3730A3",
//   },
// });

import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { CBT_ACTIVITIES_DATA } from "../../../data/cbtActivities";

export default function ActivityJourneyPage() {
  const { activity } = useLocalSearchParams<{ activity: string }>();
  const activityData = CBT_ACTIVITIES_DATA[activity];

  const [currentStep, setCurrentStep] = useState(0);
  const [responses, setResponses] = useState<string[]>([]);

  if (!activityData) {
    return (
      <View style={styles.center}>
        <Text>Activity not found</Text>
      </View>
    );
  }

  const step = activityData.steps[currentStep];
  const isLastStep = currentStep === activityData.steps.length;

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.headerCard}>
        <Text style={styles.title}>{activityData.title}</Text>
        <Text style={styles.subtitle}>{activityData.description}</Text>

        <View style={styles.badge}>
          <Text style={styles.badgeText}>
            🎯 Step {Math.min(currentStep + 1, activityData.steps.length)} /{" "}
            {activityData.steps.length}
          </Text>
        </View>
      </View>

      {!isLastStep ? (
        <View style={styles.stepCard}>
          <Text style={styles.stepTitle}>{step.title}</Text>
          <Text style={styles.stepExplain}>{step.explain}</Text>

          {/* Examples / Hints */}
          {step.examples?.length > 0 && (
            <View style={styles.examplesBox}>
              <Text style={styles.examplesTitle}>💡 Examples</Text>
              {step.examples.map((ex: string, i: number) => (
                <View key={i} style={styles.exampleChip}>
                  <Text style={styles.exampleText}>{ex}</Text>
                </View>
              ))}
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
            <Text style={styles.buttonText}>Continue ➜</Text>
          </TouchableOpacity>
        </View>
      ) : (
        /* Final Summary Screen */
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
  container: {
    padding: 20,
    backgroundColor: "#F5F7FF",
  },

  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  headerCard: {
    backgroundColor: "#EEF2FF",
    borderRadius: 20,
    padding: 20,
    marginBottom: 18,
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#312E81",
  },

  subtitle: {
    fontSize: 14,
    color: "#4338CA",
    marginTop: 6,
  },

  badge: {
    alignSelf: "flex-start",
    marginTop: 12,
    backgroundColor: "#C7D2FE",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 999,
  },

  badgeText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#1E1B4B",
  },

  stepCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    padding: 22,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 4,
  },

  stepTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#0F172A",
    marginBottom: 8,
  },

  stepExplain: {
    fontSize: 14,
    color: "#475569",
    lineHeight: 20,
    marginBottom: 14,
  },

  examplesBox: {
    backgroundColor: "#F1F5FF",
    padding: 14,
    borderRadius: 16,
    marginBottom: 16,
  },

  examplesTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#4338CA",
    marginBottom: 8,
  },

  exampleChip: {
    backgroundColor: "#E0E7FF",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 12,
    marginBottom: 6,
  },

  exampleText: {
    fontSize: 13,
    color: "#3730A3",
  },

  input: {
    minHeight: 110,
    backgroundColor: "#F8FAFC",
    borderRadius: 16,
    padding: 14,
    fontSize: 14,
    textAlignVertical: "top",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    marginBottom: 18,
  },

  button: {
    backgroundColor: "#6366F1",
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: "center",
  },

  doneButton: {
    marginTop: 24,
    backgroundColor: "#22C55E",
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 15,
  },

  finalCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 22,
  },

  finalTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#065F46",
  },

  finalSubtitle: {
    fontSize: 14,
    color: "#047857",
    marginBottom: 18,
  },

  summaryItem: {
    marginBottom: 14,
  },

  summaryTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#334155",
  },

  summaryText: {
    fontSize: 14,
    color: "#475569",
    marginTop: 2,
  },

  reframeBox: {
    marginTop: 20,
    backgroundColor: "#ECFDF5",
    padding: 16,
    borderRadius: 16,
  },

  reframeTitle: {
    fontSize: 14,
    fontWeight: "800",
    color: "#065F46",
    marginBottom: 6,
  },

  reframeText: {
    fontSize: 14,
    color: "#047857",
  },
});
