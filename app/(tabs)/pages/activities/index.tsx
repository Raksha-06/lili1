// import { router } from "expo-router";
// import React, { useState } from "react";
// import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";

// const CBT_ACTIVITIES = [
//   "Cognitive Restructuring / Reframing",
//   "Behavioral Activation",
//   "Thought Records / Journaling",
//   "Exposure / Facing Fears",
//   "Gratitude Journaling",
//   "Mindfulness / Present-Moment Awareness",
//   "Activity Scheduling / Planning Pleasant Events",
//   "Problem-Solving Exercises",
//   "Self-Compassion Exercises",
//   "Goal Setting / Tracking Progress",
// ];

// export default function ActivitiesPage() {
//   // Initialize activity status
//   const [activityStatus] = useState(() =>
//     Object.fromEntries(CBT_ACTIVITIES.map((item) => [item, "notStarted"]))
//   );

//   // Function to open detail page with params
//   const openActivity = (activity: string) => {
//     const status = activityStatus[activity];

//     // Decide button label based on status
//     const buttonLabel =
//       status === "notStarted"
//         ? "Start Activity"
//         : status === "inProgress"
//         ? "Continue"
//         : "View";

//     // Navigate to ActivityDetail page with all info
//     router.push({
//       pathname: "/(tabs)/pages/activities/[activity]",
//       params: {
//         activityName: activity,
//         status: status,
//         buttonClicked: buttonLabel,
//       },
//     });
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.header}>Daily CBT Activities</Text>

//       {CBT_ACTIVITIES.map((activity) => (
//         <TouchableOpacity
//           key={activity}
//           style={styles.card}
//           onPress={() => openActivity(activity)}
//         >
//           <Text style={styles.text}>{activity}</Text>
//           <Text style={styles.status}>{activityStatus[activity]}</Text>
//         </TouchableOpacity>
//       ))}
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: { padding: 16 },
//   header: { fontSize: 22, fontWeight: "bold", marginBottom: 16 },
//   card: {
//     padding: 16,
//     backgroundColor: "#6C63FF",
//     borderRadius: 10,
//     marginBottom: 12,
//   },
//   text: { color: "white", fontSize: 16, fontWeight: "600" },
//   status: { color: "#eee", opacity: 0.7, marginTop: 4 },
// });
import { router } from "expo-router";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
const CBT_ACTIVITIES = [
  {
    id: "cognitive_restructuring",
    title: "Cognitive Restructuring / Reframing",
  },
  { id: "behavioral_activation", title: "Behavioral Activation" },
  { id: "thought_journaling", title: "Thought Records / Journaling" },
  { id: "exposure", title: "Exposure / Facing Fears" },
  { id: "gratitude_journaling", title: "Gratitude Journaling" },
  { id: "emotional_reasoning", title: "Emotional Reasoning" },
];

export default function ActivitiesPage() {
  const [activityStatus] = useState(() =>
    Object.fromEntries(CBT_ACTIVITIES.map((a) => [a.id, "notStarted"])),
  );

  const openActivity = (activityId: string) => {
    router.push({
      pathname: "/(tabs)/pages/activities/[activity]",

      params: { activity: activityId },
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Daily CBT Activities</Text>

      {CBT_ACTIVITIES.map((activity) => (
        <TouchableOpacity
          key={activity.id}
          style={styles.card}
          onPress={() => openActivity(activity.id)}
        >
          <Text style={styles.text}>{activity.title}</Text>
          <Text style={styles.status}>{activityStatus[activity.id]}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
const theme = {
  background: "#F5F7FB",
  card: "#FFFFFF",
  primary: "#6366F1",
  secondary: "#E0E7FF",
  textPrimary: "#111827",
  textSecondary: "#6B7280",
  statusBg: "#EEF2FF",
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: theme.background,
  },

  header: {
    fontSize: 26,
    fontWeight: "700",
    color: theme.textPrimary,
    marginBottom: 22,
  },

  card: {
    backgroundColor: theme.card,
    borderRadius: 18,
    padding: 18,
    marginBottom: 16,
    borderLeftWidth: 5,
    borderLeftColor: theme.primary,

    // iOS shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 10,

    // Android
    elevation: 4,
  },

  text: {
    fontSize: 17,
    fontWeight: "600",
    color: theme.textPrimary,
    marginBottom: 8,
  },

  status: {
    alignSelf: "flex-start",
    backgroundColor: theme.statusBg,
    color: theme.primary,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 999,
    fontSize: 12,
    fontWeight: "500",
    textTransform: "capitalize",
  },
});
