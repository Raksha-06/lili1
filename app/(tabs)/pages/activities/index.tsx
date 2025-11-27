// import React, { useState } from 'react';
// import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';

// // Sample CBT Activities
// const CBT_ACTIVITIES = [
//   '1-Minute Breathing',
//   'Reframe One Thought',
//   'Tiny Gratitude',
//   'Say One Kind Thing to Yourself',
//   'Body Scan Mindfulness',
//   'Grounding Exercise',
//   'Positive Affirmation',
//   'Highlight a Success of the Day',
// ];

// export default function ActivitiesPage() {
//   // Store activity status: 'notStarted' | 'inProgress' | 'completed'
//   const [activityStatus, setActivityStatus] = useState(
//     CBT_ACTIVITIES.reduce((acc, activity) => {
//       acc[activity] = 'notStarted';
//       return acc;
//     }, {})
//   );

//   const handleStartActivity = (activity) => {
//     // Set to inProgress if not started
//     if (activityStatus[activity] === 'notStarted') {
//       setActivityStatus({ ...activityStatus, [activity]: 'inProgress' });
//     }
//   };

//   const handleCompleteActivity = (activity) => {
//     setActivityStatus({ ...activityStatus, [activity]: 'completed' });
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.header}>Daily CBT Activities</Text>

//       {CBT_ACTIVITIES.map((activity) => {
//         const status = activityStatus[activity];

//         let buttonStyle = styles.notStarted;
//         let buttonText = 'Start';
//         if (status === 'inProgress') {
//           buttonStyle = styles.inProgress;
//           buttonText = 'In Progress';
//         } else if (status === 'completed') {
//           buttonStyle = styles.completed;
//           buttonText = 'Completed';
//         }

//         return (
//           <TouchableOpacity
//             key={activity}
//             style={[styles.button, buttonStyle]}
//             onPress={() => {
//               if (status === 'notStarted') handleStartActivity(activity);
//               else if (status === 'inProgress') handleCompleteActivity(activity);
//             }}
//           >
//             <Text style={styles.buttonText}>{activity} — {buttonText}</Text>
//           </TouchableOpacity>
//         );
//       })}
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 16,
//     alignItems: 'center',
//   },
//   header: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   button: {
//     width: '90%',
//     paddingVertical: 15,
//     borderRadius: 10,
//     marginVertical: 8,
//     alignItems: 'center',
//   },
//   notStarted: {
//     backgroundColor: '#6C63FF', // blue
//   },
//   inProgress: {
//     backgroundColor: '#dc55ccff', // yellow / in progress
//   },
//   completed: {
//     backgroundColor: '#71b774ff', // green
//   },
//   buttonText: {
//     color: '#f8f0f0ff',
//     fontSize: 16,
//     fontWeight: '600',
//   },
// });
///////////////////////////
// import React, { useState } from 'react';
// import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// const CBT_ACTIVITIES = [
//   '1-Minute Breathing',
//   'Reframe One Thought',
//   'Tiny Gratitude',
//   'Say One Kind Thing to Yourself',
//   'Body Scan Mindfulness',
//   'Grounding Exercise',
//   'Positive Affirmation',
//   'Highlight a Success of the Day',
// ];

// export default function ActivitiesPage({ navigation }) {
//   const [activityStatus, setActivityStatus] = useState(
//     CBT_ACTIVITIES.reduce((acc, activity) => {
//       acc[activity] = 'notStarted';
//       return acc;
//     }, {})
//   );

//   const handlePressActivity = (activity) => {
//     navigation.navigate('ActivityDetail', {
//       activityName: activity,
//       progress: activityStatus[activity],
//     });
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.header}>Daily CBT Activities</Text>

//       {CBT_ACTIVITIES.map((activity) => {
//         const status = activityStatus[activity];

//         let buttonStyle = styles.notStarted;
//         if (status === 'inProgress') buttonStyle = styles.inProgress;
//         else if (status === 'completed') buttonStyle = styles.completed;

//         return (
//           <TouchableOpacity
//             key={activity}
//             style={[styles.button, buttonStyle]}
//             onPress={() => handlePressActivity(activity)}
//           >
//             <View style={styles.buttonContent}>
//               <Text style={styles.buttonText}>{activity}</Text>
//               <Text style={styles.statusText}>
//                 {status === 'notStarted'
//                   ? 'Start'
//                   : status === 'inProgress'
//                   ? 'In Progress'
//                   : 'Completed'}
//               </Text>
//             </View>

//             {/* Small visual progress bar */}
//             <View style={styles.progressBarBackground}>
//               <View
//                 style={[
//                   styles.progressBarFill,
//                   status === 'notStarted'
//                     ? { width: '0%' }
//                     : status === 'inProgress'
//                     ? { width: '50%' }
//                     : { width: '100%' },
//                 ]}
//               />
//             </View>
//           </TouchableOpacity>
//         );
//       })}
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: { padding: 16, alignItems: 'center' },
//   header: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
//   button: {
//     width: '90%',
//     paddingVertical: 15,
//     borderRadius: 10,
//     marginVertical: 8,
//     alignItems: 'center',
//   },
//   buttonContent: {
//     width: '100%',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingHorizontal: 12,
//     marginBottom: 6,
//   },
//   buttonText: { color: '#f8f0f0ff', fontSize: 16, fontWeight: '600' },
//   statusText: { color: '#f8f0f0ff', fontSize: 14, fontWeight: '600' },
//   notStarted: { backgroundColor: '#6C63FF' },
//   inProgress: { backgroundColor: '#dc55ccff' },
//   completed: { backgroundColor: '#71b774ff' },
//   progressBarBackground: {
//     width: '90%',
//     height: 5,
//     backgroundColor: '#ccc',
//     borderRadius: 3,
//     alignSelf: 'center',
//   },
//   progressBarFill: {
//     height: 5,
//     backgroundColor: '#ffdd00', // bright color for progress
//     borderRadius: 3,
//   },
// });
//////////////////////////////////
///////////////////////////////////
// import { router } from "expo-router";
// import React, { useState } from "react";
// import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";

// const CBT_ACTIVITIES = [
//   "1-Minute Breathing",
//   "Reframe One Thought",
//   "Tiny Gratitude",
//   "Say One Kind Thing to Yourself",
//   "Body Scan Mindfulness",
//   "Grounding Exercise",
//   "Positive Affirmation",
//   "Highlight a Success of the Day",
// ];

// export default function ActivitiesPage() {
//   const [activityStatus] = useState(() =>
//     Object.fromEntries(CBT_ACTIVITIES.map((item) => [item, "not Started"]))
//   );

//   const openActivity = (activity: string) => {
//     const status = activityStatus[activity];
//     const buttonLabel =
//       status === "notStarted"
//         ? "Start Activity"
//         : status === "inProgress"
//         ? "Continue"
//         : "View";

//    router.push({
//   pathname: "/(tabs)/pages/activities/[activity]",
//   params: { activity: "run" },
// });

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
/////////////////////////////
///////////////////////////////
import { router } from "expo-router";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";

const CBT_ACTIVITIES = [
  "Cognitive Restructuring / Reframing",
  "Behavioral Activation",
  "Thought Records / Journaling",
  "Exposure / Facing Fears",
  "Gratitude Journaling",
  "Mindfulness / Present-Moment Awareness",
  "Activity Scheduling / Planning Pleasant Events",
  "Problem-Solving Exercises",
  "Self-Compassion Exercises",
  "Goal Setting / Tracking Progress",
];


export default function ActivitiesPage() {
  // Initialize activity status
  const [activityStatus] = useState(() =>
    Object.fromEntries(CBT_ACTIVITIES.map((item) => [item, "notStarted"]))
  );

  // Function to open detail page with params
  const openActivity = (activity: string) => {
    const status = activityStatus[activity];

    // Decide button label based on status
    const buttonLabel =
      status === "notStarted"
        ? "Start Activity"
        : status === "inProgress"
        ? "Continue"
        : "View";

    // Navigate to ActivityDetail page with all info
    router.push({
      pathname: "/(tabs)/pages/activities/[activity]",
      params: {
        activityName: activity,
        status: status,
        buttonClicked: buttonLabel,
      },
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Daily CBT Activities</Text>

      {CBT_ACTIVITIES.map((activity) => (
        <TouchableOpacity
          key={activity}
          style={styles.card}
          onPress={() => openActivity(activity)}
        >
          <Text style={styles.text}>{activity}</Text>
          <Text style={styles.status}>{activityStatus[activity]}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 16 },
  card: {
    padding: 16,
    backgroundColor: "#6C63FF",
    borderRadius: 10,
    marginBottom: 12,
  },
  text: { color: "white", fontSize: 16, fontWeight: "600" },
  status: { color: "#eee", opacity: 0.7, marginTop: 4 },
});
