// import AsyncStorage from "@react-native-async-storage/async-storage";
// import React, { useEffect, useState } from "react";
// import { Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native";
// import { Calendar } from "react-native-calendars";

// export default function Dairy() {
//   const [activeTab, setActiveTab] = useState("actionPlan"); // actionPlan or moments
//   const [actionText, setActionText] = useState("");
//   const [momentText, setMomentText] = useState("");
//   const [actionList, setActionList] = useState([]);
//   const [momentsList, setMomentsList] = useState([]);
//   const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);
//   const [markedDates, setMarkedDates] = useState({});

//   // Load stored data
//   useEffect(() => {
//     loadData();
//   }, []);

//   const loadData = async () => {
//     try {
//       const actions = await AsyncStorage.getItem("actions");
//       const moments = await AsyncStorage.getItem("moments");
//       if (actions) setActionList(JSON.parse(actions));
//       if (moments) setMomentsList(JSON.parse(moments));
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   const saveData = async (key, data) => {
//     await AsyncStorage.setItem(key, JSON.stringify(data));
//   };

//   const addAction = () => {
//     if (actionText.trim() === "") return;
//     const newAction = { id: Date.now().toString(), text: actionText, date: selectedDate };
//     const updatedList = [...actionList, newAction];
//     setActionList(updatedList);
//     saveData("actions", updatedList);
//     setActionText("");
//     markDate(selectedDate);
//   };

//   const addMoment = () => {
//     if (momentText.trim() === "") return;
//     const newMoment = { id: Date.now().toString(), text: momentText };
//     const updatedList = [...momentsList, newMoment];
//     setMomentsList(updatedList);
//     saveData("moments", updatedList);
//     setMomentText("");
//   };

//   const markDate = (date) => {
//     setMarkedDates((prev) => ({ ...prev, [date]: { marked: true } }));
//   };

//   return (
//     <View style={{ flex: 1, padding: 20 }}>
//       <View style={{ flexDirection: "row", justifyContent: "space-around", marginBottom: 10 }}>
//         <Button title="Action Plan" onPress={() => setActiveTab("actionPlan")} />
//         <Button title="Moments" onPress={() => setActiveTab("moments")} />
//       </View>

//       {activeTab === "actionPlan" ? (
//         <View style={{ flex: 1 }}>
//           <TextInput
//             placeholder="Add an action..."
//             value={actionText}
//             onChangeText={setActionText}
//             style={styles.input}
//           />
//           <Button title="Add Action" onPress={addAction} />
//           <FlatList
//             data={actionList.filter((item) => item.date === selectedDate)}
//             keyExtractor={(item) => item.id}
//             renderItem={({ item }) => (
//               <View style={styles.listItem}>
//                 <Text>{item.text}</Text>
//               </View>
//             )}
//           />
//         </View>
//       ) : (
//         <View style={{ flex: 1 }}>
//           <TextInput
//             placeholder="Add a moment..."
//             value={momentText}
//             onChangeText={setMomentText}
//             style={styles.input}
//           />
//           <Button title="Add Moment" onPress={addMoment} />
//           <FlatList
//             data={momentsList}
//             keyExtractor={(item) => item.id}
//             renderItem={({ item }) => (
//               <View style={styles.listItem}>
//                 <Text>{item.text}</Text>
//               </View>
//             )}
//           />
//         </View>
//       )}

//       <Calendar
//         style={{ marginTop: 20 }}
//         onDayPress={(day) => setSelectedDate(day.dateString)}
//         markedDates={{ ...markedDates, [selectedDate]: { selected: true, marked: markedDates[selectedDate]?.marked } }}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   input: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     padding: 10,
//     marginVertical: 10,
//     borderRadius: 5,
//   },
//   listItem: {
//     padding: 10,
//     borderBottomWidth: 1,
//     borderColor: "#eee",
//   },
// });
//////////////////////
//////////////////////



import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Calendar } from "react-native-calendars";
import Journal from "./journal";
import TodoList from "./toDoList";

export default function Diary() {
  const [activeTab, setActiveTab] = useState("journal");
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);

  const [markedDates, setMarkedDates] = useState({});
  const [todos, setTodos] = useState([]);
  const [journals, setJournals] = useState([]);

  const markCalendar = (date, type) => {
    setMarkedDates((prev) => ({
      ...prev,
      [date]: {
        marked: true,
        dotColor: type === "todo" ? "green" : "blue",
        selected: date === selectedDate,
      },
    }));
  };

  return (
  <View style={{ flex: 1, padding: 20 }}>

    {/* Tabs */}
    <View style={styles.tabContainer}>
      <TouchableOpacity
        style={[styles.tab, activeTab === "journal" && styles.activeTab]}
        onPress={() => setActiveTab("journal")}
      >
        <Text style={styles.tabText}>Journal</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.tab, activeTab === "todo" && styles.activeTab]}
        onPress={() => setActiveTab("todo")}
      >
        <Text style={styles.tabText}>To-Do</Text>
      </TouchableOpacity>
    </View>

    {/* Calendar */}
    <View style={{ marginBottom: 100 }}>
      <Calendar
        style={{
          borderRadius: 10,
          padding: 5,
          height: 260, // slightly smaller
          transform: [{ scale: 0.9 }],
        }}
        theme={{
          textDayFontSize: 12,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 12,
          selectedDayBackgroundColor: "#6C63FF",
        }}
        markedDates={{
          ...markedDates,
          [selectedDate]: {
            selected: true,
            selectedColor: "#6C63FF",
          },
        }}
        onDayPress={(d) => setSelectedDate(d.dateString)}
      />
    </View>

    {/* Content Area (Fix overlapping) */}
    <View style={{ flex: 1, marginTop: 10 }}>
      {activeTab === "journal" ? (
        <Journal
          selectedDate={selectedDate}
          journals={journals}
          setJournals={setJournals}
          markCalendar={markCalendar}
        />
      ) : (
        <TodoList
          selectedDate={selectedDate}
          todos={todos}
          setTodos={setTodos}
          markCalendar={markCalendar}
        />
      )}
    </View>
  </View>
);

}

const styles = StyleSheet.create({
  tabContainer: { flexDirection: "row", marginBottom: 10 },
  tab: {
    flex: 1,
    padding: 10,
    backgroundColor: "#bbbabaff",
    alignItems: "center",
    borderRadius: 8,
  },
  activeTab: { backgroundColor: "#6C63FF" },
  tabText: { color: "white", fontWeight: "bold" },
});
