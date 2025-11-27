// import { router, useLocalSearchParams } from "expo-router";
// import React from "react";
// import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

// export default function ActivityDetail() {
//   const { activityName, status } = useLocalSearchParams();
// const actname ="Say One Kind Thing to Yourself";
//   return (
//     <View style={styles.container}>

//       {/* Top Bar: Back + Status */}
//       <View style={styles.topRow}>
//         <TouchableOpacity onPress={() => router.back()}>
//           <Text style={styles.backArrow}>←</Text>
//         </TouchableOpacity>

//         <View 
//           style={[
//             styles.statusBox,
//             status === "completed" ? styles.completed :
//             status === "inProgress" ? styles.inProgress :
//             styles.notStarted
//           ]}
//         >
//           <Text style={styles.statusText}>
//             {status === "notStarted" ? "Start" : status === "inProgress" ? "In Progress" : "Completed"}
//           </Text>
//         </View>
//       </View>

//       {/* Page Title */}
//       <Text style={styles.title}>{actname}</Text>

//       {/* Page Body */}
//       <View style={styles.body}>
//         <Text style={styles.placeholderText}>
//           Page content will go here...
//         </Text>
//       </View>

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#fff", paddingTop: 40 },

//   /** NEW TOP ROW */
//   topRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     paddingHorizontal: 20,
//     marginBottom: 10,
//   },

//   backArrow: { fontSize: 26, fontWeight: "700", color: "#333" },

//   /** STATUS TAG */
//   statusBox: {
//     paddingVertical: 6,
//     paddingHorizontal: 12,
//     borderRadius: 10,
//   },
//   statusText: { color: "#fff", fontWeight: "600", fontSize: 13 },

//   notStarted: { backgroundColor: "#6C63FF" },
//   inProgress: { backgroundColor: "#dc55cc" },
//   completed: { backgroundColor: "#71b774" },

//   /** TITLE */
//   title: {
//     textAlign: "center",
//     fontSize: 18,
//     fontWeight: "700",
//     color: "#333",
//     marginBottom: 16,
//   },

//   /** BODY */
//   body: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     paddingHorizontal: 20,
//   },
//   placeholderText: { fontSize: 16, color: "#555" },
// });
/////////////////////////////////
// import { router, useLocalSearchParams } from "expo-router";
// import React, { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import TreeReward from "../../../components/treeReward";

// export default function ActivityDetail() {
//   const { activityName, statues } = useLocalSearchParams();
//   const actname = "Say One Kind Thing to Yourself";
//   const status = "inProgress";

//   const [input, setInput] = useState("");
//   const [inputHeight, setInputHeight] = useState(40); // min height
//   const [sentiment, setSentiment] = useState(null);
//   const [selectedMood, setSelectedMood] = useState<"sad" | "neutral" | "happy" | null>(null);

//   const detectSentiment = (text: string) => {
//     const positiveWords = ["proud", "happy", "strong", "good", "capable", "love"];
//     const negativeWords = ["fail", "bad", "tired", "stressed", "discouraged"];
//     const lower = text.toLowerCase();
//     if (positiveWords.some((word) => lower.includes(word))) return "positive";
//     if (negativeWords.some((word) => lower.includes(word))) return "negative";
//     return "neutral";
//   };

//   const handleSubmit = () => {
//     const s = detectSentiment(input);
//     setSentiment(s);
//   };

//   const handleChange = (text: string) => {
//     if (text.length <= 100) setInput(text); // limit 100 chars
//   };

//   const selectMood = (mood: "sad" | "neutral" | "happy") => {
//     setSelectedMood(mood);
//     if (mood === "sad") setInput("I feel bad about today");
//     else if (mood === "neutral") setInput("I tried, not perfect");
//     else if (mood === "happy") setInput("I am proud I handled this well");
//   };

//   return (
//     <View style={styles.container}>
//       {/* Top Bar */}
//       <View style={styles.topRow}>
//         <TouchableOpacity onPress={() => router.back()}>
//           <Text style={styles.backArrow}>←</Text>
//         </TouchableOpacity>
//         <View
//           style={[
//             styles.statusBox,
//             status === "completed"
//               ? styles.completed
//               : status === "inProgress"
//               ? styles.inProgress
//               : styles.notStarted,
//           ]}
//         >
//           <Text style={styles.statusText}>
//             {status === "notStarted"
//               ? "Start"
//               : status === "inProgress"
//               ? "In Progress"
//               : "Completed"}
//           </Text>
//         </View>
//       </View>

//       {/* Page Title */}
//       <Text style={styles.title}>{actname}</Text>

//       {/* Sentiment Circles */}
//       <View style={styles.colorPicker}>
//         <View style={styles.colorColumn}>
//           <TouchableOpacity
//             style={[
//               styles.moodCircle,
//               styles.sadCircle,
//               selectedMood === "sad" ? styles.hollowCircle : styles.filledCircle,
//             ]}
//             onPress={() => selectMood("sad")}
//           />
//           <Text style={styles.colorLabel}>Sad</Text>
//         </View>
//         <View style={styles.colorColumn}>
//           <TouchableOpacity
//             style={[
//               styles.moodCircle,
//               styles.neutralCircle,
//               selectedMood === "neutral" ? styles.hollowCircle : styles.filledCircle,
//             ]}
//             onPress={() => selectMood("neutral")}
//           />
//           <Text style={styles.colorLabel}>Neutral</Text>
//         </View>
//         <View style={styles.colorColumn}>
//           <TouchableOpacity
//             style={[
//               styles.moodCircle,
//               styles.happyCircle,
//               selectedMood === "happy" ? styles.hollowCircle : styles.filledCircle,
//             ]}
//             onPress={() => selectMood("happy")}
//           />
//           <Text style={styles.colorLabel}>Happy</Text>
//         </View>
//       </View>

//       {/* Dynamic TextInput */}
//       <TextInput
//         style={[
//           styles.input,
//           { height: Math.min(Math.max(40, inputHeight), 120) },
//         ]}
//         multiline
//         value={input}
//         onChangeText={handleChange}
//         placeholder="Send"
//         placeholderTextColor="#aaa"
//         onContentSizeChange={(e) => setInputHeight(e.nativeEvent.contentSize.height + 10)}
//         textAlignVertical="top"
//       />

//       {/* Submit Button */}
//       <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//         <Text style={styles.buttonText}>Send</Text>
//       </TouchableOpacity>

//       {/* Growth Tree Component */}
//       {sentiment && <TreeReward sentiment={sentiment} />}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#efefefff", paddingTop: 40 },
//   topRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     paddingHorizontal: 20,
//     marginBottom: 10,
//   },
//   backArrow: { fontSize: 26, fontWeight: "700", color: "#333" },
//   statusBox: { paddingVertical: 6, paddingHorizontal: 12, borderRadius: 10 },
//   statusText: { color: "#e1ddddff", fontWeight: "600", fontSize: 13 },
//   notStarted: { backgroundColor: "#6C63FF" },
//   inProgress: { backgroundColor: "#dc55cc" },
//   completed: { backgroundColor: "#71b774" },
//   title: {
//     textAlign: "center",
//     fontSize: 18,
//     fontWeight: "700",
//     color: "#333",
//     marginBottom: 16,
//   },
//   input: {
//     width: "90%",
//     borderColor: "#ccc",
//     borderWidth: 1,
//     padding: 10,
//     borderRadius: 10,
//     marginBottom: 10,
//     alignSelf: "center",
//   },
//   colorPicker: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     marginBottom: 10,
//   },
//   colorColumn: { alignItems: "center" },
//   colorLabel: { fontSize: 12, color: "#333" },

//   // Mood Circle Styles
//   moodCircle: { width: 30, height: 30, borderRadius: 15, marginBottom: 4 },
//   sadCircle: { backgroundColor: "red" },
//   neutralCircle: { backgroundColor: "yellow" },
//   happyCircle: { backgroundColor: "green" },
//   filledCircle: { borderWidth: 0 },
//   hollowCircle: { backgroundColor: "transparent", borderWidth: 2, borderColor: "#333" },

//   button: {
//     backgroundColor: "#4CAF50",
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 10,
//     alignSelf: "center",
//   },
//   buttonText: { color: "white", fontWeight: "bold", fontSize: 16 },
// });
//////////////////
////////////////////////
// import { router, useLocalSearchParams } from "expo-router";
// import React, { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import TreeReward from "../../../components/treeReward";

// export default function ActivityDetail() {
//   const { activityName, statues } = useLocalSearchParams();
//   const actname = "Say One Kind Thing to Yourself";
//   const status = "inProgress";

//   const [input, setInput] = useState("");
//   const [inputHeight, setInputHeight] = useState(40);
//   const [sentiment, setSentiment] = useState<"positive" | "negative" | "neutral" | null>(null);
//   const [selectedMood, setSelectedMood] = useState<"sad" | "neutral" | "happy" | null>(null);
//   const [sentData, setSentData] = useState<any>(null); // To display sent info

//   // Simple sentiment detection
//   const detectSentiment = (text: string) => {
//     const positiveWords = ["proud", "happy", "strong", "good", "capable", "love"];
//     const negativeWords = ["fail", "bad", "tired", "stressed", "discouraged"];
//     const lower = text.toLowerCase();
//     if (positiveWords.some((word) => lower.includes(word))) return "positive";
//     if (negativeWords.some((word) => lower.includes(word))) return "negative";
//     return "neutral";
//   };

//   // Handle submit: detect sentiment, map mood to +/-, send to Python
//   const handleSubmit = async () => {
//     const s = detectSentiment(input);
//     setSentiment(s);

//     let moodSymbol: "+" | "-" | "neutral" = "neutral";
//     if (selectedMood === "happy") moodSymbol = "+";
//     else if (selectedMood === "sad") moodSymbol = "-";
//     else moodSymbol = "neutral";

//     const payload = {
//       text: input,
//       mood: moodSymbol,
//       sentiment: s,
//     };

//     setSentData(payload); // Display below button

//     try {
//       const response = await fetch("http://YOUR_PYTHON_SERVER_URL/submit", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });
//       const data = await response.json();
//       console.log("Response from Python:", data);
//     } catch (error) {
//       console.error("Error sending data:", error);
//     }
//   };

//   const handleChange = (text: string) => {
//     if (text.length <= 100) setInput(text);
//   };

//   const selectMood = (mood: "sad" | "neutral" | "happy") => {
//     setSelectedMood(mood);
//     if (mood === "sad") setInput("I feel bad about today");
//     else if (mood === "neutral") setInput("I tried, not perfect");
//     else if (mood === "happy") setInput("I am proud I handled this well");
//   };

//   return (
//     <View style={styles.container}>
//       {/* Top Bar */}
//       <View style={styles.topRow}>
//         <TouchableOpacity onPress={() => router.back()}>
//           <Text style={styles.backArrow}>←</Text>
//         </TouchableOpacity>
//         <View
//           style={[
//             styles.statusBox,
//             status === "completed"
//               ? styles.completed
//               : status === "inProgress"
//               ? styles.inProgress
//               : styles.notStarted,
//           ]}
//         >
//           <Text style={styles.statusText}>
//             {status === "notStarted"
//               ? "Start"
//               : status === "inProgress"
//               ? "In Progress"
//               : "Completed"}
//           </Text>
//         </View>
//       </View>

//       {/* Page Title */}
//       <Text style={styles.title}>{actname}</Text>

//       {/* Sentiment Circles */}
//       <View style={styles.colorPicker}>
//         <View style={styles.colorColumn}>
//           <TouchableOpacity
//             style={[
//               styles.moodCircle,
//               styles.sadCircle,
//               selectedMood === "sad" ? styles.hollowCircle : styles.filledCircle,
//             ]}
//             onPress={() => selectMood("sad")}
//           />
//           <Text style={styles.colorLabel}>Sad</Text>
//         </View>
//         <View style={styles.colorColumn}>
//           <TouchableOpacity
//             style={[
//               styles.moodCircle,
//               styles.neutralCircle,
//               selectedMood === "neutral" ? styles.hollowCircle : styles.filledCircle,
//             ]}
//             onPress={() => selectMood("neutral")}
//           />
//           <Text style={styles.colorLabel}>Neutral</Text>
//         </View>
//         <View style={styles.colorColumn}>
//           <TouchableOpacity
//             style={[
//               styles.moodCircle,
//               styles.happyCircle,
//               selectedMood === "happy" ? styles.hollowCircle : styles.filledCircle,
//             ]}
//             onPress={() => selectMood("happy")}
//           />
//           <Text style={styles.colorLabel}>Happy</Text>
//         </View>
//       </View>

//       {/* Dynamic TextInput */}
//       <TextInput
//         style={[
//           styles.input,
//           { height: Math.min(Math.max(40, inputHeight), 120) },
//         ]}
//         multiline
//         value={input}
//         onChangeText={handleChange}
//         placeholder="Send"
//         placeholderTextColor="#aaa"
//         onContentSizeChange={(e) => setInputHeight(e.nativeEvent.contentSize.height + 10)}
//         textAlignVertical="top"
//       />

//       {/* Submit Button */}
//       <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//         <Text style={styles.buttonText}>Send</Text>
//       </TouchableOpacity>

//       {/* Show sent information */}
//       {sentData && (
//         <View style={styles.sentInfo}>
//           <Text style={{ fontWeight: "bold" }}>Sent Information:</Text>
//           <Text>Text: {sentData.text}</Text>
//           <Text>Mood: {sentData.mood}</Text>
//           <Text>Sentiment: {sentData.sentiment}</Text>
//         </View>
//       )}

//       {/* Growth Tree Component */}
//       {sentiment && <TreeReward sentiment={sentiment} />}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#efefefff", paddingTop: 40 },
//   topRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     paddingHorizontal: 20,
//     marginBottom: 10,
//   },
//   backArrow: { fontSize: 26, fontWeight: "700", color: "#333" },
//   statusBox: { paddingVertical: 6, paddingHorizontal: 12, borderRadius: 10 },
//   statusText: { color: "#e1ddddff", fontWeight: "600", fontSize: 13 },
//   notStarted: { backgroundColor: "#6C63FF" },
//   inProgress: { backgroundColor: "#dc55cc" },
//   completed: { backgroundColor: "#71b774" },
//   title: {
//     textAlign: "center",
//     fontSize: 18,
//     fontWeight: "700",
//     color: "#333",
//     marginBottom: 16,
//   },
//   input: {
//     width: "90%",
//     borderColor: "#ccc",
//     borderWidth: 1,
//     padding: 10,
//     borderRadius: 10,
//     marginBottom: 10,
//     alignSelf: "center",
//   },
//   colorPicker: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     marginBottom: 10,
//   },
//   colorColumn: { alignItems: "center" },
//   colorLabel: { fontSize: 12, color: "#333" },
//   moodCircle: { width: 30, height: 30, borderRadius: 15, marginBottom: 4 },
//   sadCircle: { backgroundColor: "red" },
//   neutralCircle: { backgroundColor: "yellow" },
//   happyCircle: { backgroundColor: "green" },
//   filledCircle: { borderWidth: 0 },
//   hollowCircle: { backgroundColor: "transparent", borderWidth: 2, borderColor: "#333" },
//   button: {
//     backgroundColor: "#4CAF50",
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 10,
//     alignSelf: "center",
//   },
//   buttonText: { color: "white", fontWeight: "bold", fontSize: 16 },
//   sentInfo: {
//     marginTop: 10,
//     padding: 10,
//     backgroundColor: "#fff",
//     marginHorizontal: 20,
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: "#ccc",
//   },
// });
/////////////////
import { router, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function ActivityDetail() {
  // Receive data from previous page
  const [responseData, setResponseData] = useState(null);
  const [rating, setRating] = useState("");
  const [reason, setReason] = useState("");
  const [motivation, setMotivation] = useState("");
  const handleSubmit = () => {
  const moodSymbol: "+" | "-" | "neutral" =
    selectedMood === "happy" ? "+" : selectedMood === "sad" ? "-" : "neutral";

  const payload = {
    activityName,
    status,
    buttonClicked,
    userInput: input,
    mood: moodSymbol,
  };

  setSentData(payload);
  setInput(""); // optional: clear input after submit

  // ----- New: send data to Flask backend -----
  // fetch("http://192.168.1.7:5000/submit", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(payload),
  // })
  //   .then((res) => res.json())
  //   .then((data) => console.log("Server response:", data))
  //   .catch((err) => console.error("Error sending data:", err));
  fetch("http://192.168.1.7:5000/submit", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(payload),
})
  .then(async (res) => {
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Server error: ${res.status} - ${text}`);
    }
    return res.json(); // parse JSON if OK
  })
  .then((data) => {
    // Safely access only the part you want
    const modelResult = data.model_result || {};
    console.log("Server response:", modelResult);
    console.log("Rating:", modelResult.rating);
    console.log("Reason:", modelResult.reason);
    console.log("Motivation:", modelResult.motivation);
     setRating(modelResult.rating);
      setReason(modelResult.reason);
      setMotivation(modelResult.motivation);
  })
  .catch((err) => console.error("Error sending data:", err));

};

  const { activityName, status = "inProgress", buttonClicked } = useLocalSearchParams();

  const [input, setInput] = useState("");
  const [inputHeight, setInputHeight] = useState(40);
  const [selectedMood, setSelectedMood] = useState<"sad" | "neutral" | "happy" | null>(null);
  const [sentData, setSentData] = useState<any>(null); // Store submitted data

  // Handle submit: just save input + mood + received params
  // const handleSubmit = () => {
  //   const moodSymbol: "+" | "-" | "neutral" =
  //     selectedMood === "happy" ? "+" : selectedMood === "sad" ? "-" : "neutral";

  //   const payload = {
  //     activityName,
  //     status,
  //     buttonClicked,
  //     userInput: input,
  //     mood: moodSymbol,
  //   };

  //   setSentData(payload);
  //   setInput(""); // optional: clear input after submit
  // };

  const selectMood = (mood: "sad" | "neutral" | "happy") => setSelectedMood(mood);

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topRow}>
        <TouchableOpacity style={styles.backContainer} onPress={() => router.back()}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <View
          style={[
            styles.statusBox,
            status === "completed"
              ? styles.completed
              : status === "inProgress"
              ? styles.inProgress
              : styles.notStarted,
          ]}
        >
          <Text style={styles.statusText}>
            {status === "notStarted" ? "Start" : status === "inProgress" ? "In Progress" : "Completed"}
          </Text>
        </View>
      </View>

      {/* Page Title */}
      <Text style={styles.title}>{activityName || "Activity Detail"}</Text>

      {/* Mood Selection */}
      <View style={styles.colorPicker}>
        <View style={styles.colorColumn}>
          <TouchableOpacity
            style={[
              styles.moodCircle,
              styles.sadCircle,
              selectedMood === "sad" ? styles.hollowCircle : styles.filledCircle,
            ]}
            onPress={() => selectMood("sad")}
          />
          <Text style={styles.colorLabel}>Sad</Text>
        </View>
        <View style={styles.colorColumn}>
          <TouchableOpacity
            style={[
              styles.moodCircle,
              styles.neutralCircle,
              selectedMood === "neutral" ? styles.hollowCircle : styles.filledCircle,
            ]}
            onPress={() => selectMood("neutral")}
          />
          <Text style={styles.colorLabel}>Neutral</Text>
        </View>
        <View style={styles.colorColumn}>
          <TouchableOpacity
            style={[
              styles.moodCircle,
              styles.happyCircle,
              selectedMood === "happy" ? styles.hollowCircle : styles.filledCircle,
            ]}
            onPress={() => selectMood("happy")}
          />
          <Text style={styles.colorLabel}>Happy</Text>
        </View>
      </View>

      {/* Text Input */}
      <TextInput
        style={[styles.input, { height: Math.min(Math.max(40, inputHeight), 120) }]}
        multiline
        value={input}
        onChangeText={(text) => setInput(text)}
        placeholder="Type your response..."
        placeholderTextColor="#aaa"
        onContentSizeChange={(e) => setInputHeight(e.nativeEvent.contentSize.height + 10)}
        textAlignVertical="top"
      />

      {/* Submit Button */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>

      {/* Display Submitted Data */}
      {sentData && (
        <View style={styles.sentInfo}>
          <Text style={{ fontWeight: "bold" }}>Submitted Data:</Text>
          <Text>Activity: {sentData.activityName}</Text>
          <Text>Status: {sentData.status}</Text>
          <Text>Button: {sentData.buttonClicked}</Text>
          <Text>User Input: {sentData.userInput}</Text>
          <Text>Mood: {sentData.mood}</Text>
        </View>
      )}
        <Text style={styles.label}>Rating:</Text>
      <Text style={styles.value}>{rating}</Text>

      <Text style={styles.label}>Reason:</Text>
      <Text style={styles.value}>{reason}</Text>

      <Text style={styles.label}>Motivation:</Text>
      <Text style={styles.value}>{motivation}</Text>
    {/* </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#efefefff", paddingTop: 40 },
  topRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 20, marginBottom: 10 },

backArrow: {
  fontSize: 20,     fontFamily: "Roboto-Black",               // smaller to fit nicely in container
  fontWeight: "900",
  color: "#5755daff",                 // white arrow for contrast
},

  statusBox: { paddingVertical: 6, paddingHorizontal: 12, borderRadius: 10 },
  statusText: { color: "#ffffffff", fontWeight: "600", fontSize: 13 },
  notStarted: { backgroundColor: "#6C63FF" },
  inProgress: { backgroundColor: "#dc55cc" },
  completed: { backgroundColor: "#71b774" },
  title: { textAlign: "center", fontSize: 18, fontWeight: "700", color: "#333", marginBottom: 16 },
  colorPicker: { flexDirection: "row", justifyContent: "space-around", marginBottom: 10 },
  colorColumn: { alignItems: "center" },
  colorLabel: { fontSize: 12, color: "#333" },
  moodCircle: { width: 30, height: 30, borderRadius: 15, marginBottom: 4 },
  sadCircle: { backgroundColor: "red" },
  neutralCircle: { backgroundColor: "#eae206ff" },
  happyCircle: { backgroundColor: "#4cb74fff" },
  filledCircle: { borderWidth: 0 },
  hollowCircle: { backgroundColor: "transparent", borderWidth: 2, borderColor: "#333" },
  input: { width: "90%", borderColor: "#ccc", borderWidth: 1, padding: 10, borderRadius: 10, marginBottom: 10, alignSelf: "center" },
  button: { backgroundColor: "#3ea442ff", paddingVertical: 10, paddingHorizontal: 20, borderRadius: 10, alignSelf: "center" },
  buttonText: { color: "white", fontWeight: "bold", fontSize: 16 },
  sentInfo: { marginTop: 10, padding: 10, backgroundColor: "#fff", marginHorizontal: 20, borderRadius: 10, borderWidth: 1, borderColor: "#ccc" },
container: {
    padding: 20,
  },
  label: {
    fontWeight: "bold",
    marginTop: 15,
  },
  value: {
    fontSize: 16,
  },
});
