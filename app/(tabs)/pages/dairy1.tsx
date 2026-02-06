import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Calendar } from "react-native-calendars";

// Color palette
export const colors = {
  primaryCoral: "#B77466",
  secondaryCoral: "#E2B59A",
  softCream: "#F3E2C1",
  warmCream: "#F0D9B5",
  softBrown: "#7D6C58",
  darkBrown: "#5A4938",
  accentBrown: "#8B4B3E",
  doneViolet: "#8A2BE2",
};

export default function Diary() {
  const [activeTab, setActiveTab] = useState("journal");
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0],
  );

  const [journals, setJournals] = useState([]);
  const [todos, setTodos] = useState([]);
  const [journalText, setJournalText] = useState("");
  const [todoText, setTodoText] = useState("");

  const [markedDates, setMarkedDates] = useState({});

  // Recalculate marked dates whenever data or tab changes
  useEffect(() => {
    const newMarks = {};

    if (activeTab === "journal") {
      journals.forEach((j) => {
        newMarks[j.date] = {
          marked: true,
          dotColor: colors.secondaryCoral,
        };
      });
    } else {
      todos.forEach((t) => {
        newMarks[t.date] = {
          marked: true,
          dotColor: colors.softBrown,
        };
      });
    }

    // highlight selected date
    if (selectedDate) {
      newMarks[selectedDate] = {
        ...newMarks[selectedDate],
        selected: true,
        selectedColor: colors.accentBrown,
      };
    }

    setMarkedDates(newMarks);
  }, [activeTab, journals, todos, selectedDate]);

  // Save journal
  const saveJournal = () => {
    if (!journalText) return;
    setJournals((prev) => [...prev, { date: selectedDate, text: journalText }]);
    setJournalText("");
  };

  // Add todo
  const addTodo = () => {
    if (!todoText) return;
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        date: selectedDate,
        text: todoText,
        done: false,
      },
    ]);
    setTodoText("");
  };

  // Toggle todo done
  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
    );
  };

  const todaysJournals = journals.filter((j) => j.date === selectedDate);
  const todaysTodos = todos.filter((t) => t.date === selectedDate);

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: colors.softCream }}>
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
      <Calendar
        style={{ borderRadius: 10 }}
        theme={{
          textDayFontSize: 12,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 12,
          selectedDayBackgroundColor: colors.accentBrown,
          todayTextColor: colors.primaryCoral,
        }}
        markedDates={markedDates}
        onDayPress={(day) => setSelectedDate(day.dateString)}
        hideExtraDays={true}
      />

      {/* Content */}
      <View style={{ flex: 1, marginTop: 10 }}>
        {activeTab === "journal" ? (
          <View style={{ flex: 1 }}>
            {/* Journal input */}
            <TextInput
              placeholder="Write your journal..."
              value={journalText}
              onChangeText={setJournalText}
              style={styles.input}
              multiline
            />

            {/* Save Button */}
            <TouchableOpacity style={styles.saveButton} onPress={saveJournal}>
              <Text style={styles.buttonText}>Save Entry</Text>
            </TouchableOpacity>

            {/* Journal Entries */}
            <FlatList
              data={todaysJournals}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({ item }) => (
                <View style={styles.journalCard}>
                  <Text style={{ color: colors.darkBrown }}>{item.text}</Text>
                </View>
              )}
              style={{ marginTop: 10 }}
            />
          </View>
        ) : (
          <View style={{ flex: 1 }}>
            {/* To-Do Input */}
            <View style={{ flexDirection: "row", marginBottom: 10 }}>
              <TextInput
                placeholder="Add a task..."
                value={todoText}
                onChangeText={setTodoText}
                style={[styles.input, { flex: 1, marginRight: 10 }]}
              />
              <TouchableOpacity style={styles.addButton} onPress={addTodo}>
                <Text style={styles.buttonText}>Add</Text>
              </TouchableOpacity>
            </View>

            {/* To-Do List */}
            <FlatList
              data={todaysTodos}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.todoItem}
                  onPress={() => toggleTodo(item.id)}
                >
                  <View
                    style={[
                      styles.todoCircle,
                      {
                        backgroundColor: item.done
                          ? colors.doneViolet
                          : colors.softBrown,
                      },
                    ]}
                  />
                  <Text
                    style={{
                      color: item.done ? colors.doneViolet : colors.darkBrown,
                      textDecorationLine: item.done ? "line-through" : "none",
                      marginLeft: 10,
                    }}
                  >
                    {item.text}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
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
    backgroundColor: colors.softCream,
    alignItems: "center",
    borderRadius: 8,
  },
  activeTab: { backgroundColor: colors.primaryCoral },
  tabText: { color: colors.darkBrown, fontWeight: "bold" },

  input: {
    borderWidth: 1,
    borderColor: colors.softBrown,
    borderRadius: 8,
    padding: 10,
    backgroundColor: colors.warmCream,
  },

  saveButton: {
    backgroundColor: colors.primaryCoral,
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },

  addButton: {
    backgroundColor: colors.primaryCoral,
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },

  buttonText: { color: "white", fontWeight: "bold" },

  journalCard: {
    backgroundColor: colors.secondaryCoral,
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },

  todoItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginBottom: 8,
    backgroundColor: colors.softCream,
    borderRadius: 8,
  },

  todoCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
});
