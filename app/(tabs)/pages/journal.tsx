import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Journal({ selectedDate, journals, setJournals }) {
  const [journalText, setJournalText] = useState("");
  const [journalColor, setJournalColor] = useState("default");

  const colorThemes = {
    default: "#c1c1c1ff",     // normal entry
    positive: "#5cc5fdff",    // good mood
    neutral: "#e7de56ff",     // okay day
    negative: "#F4A9A8",      // tough day
  };

  // ✔ Load journal for selected date when clicked on calendar
  useEffect(() => {
    const existingEntry = journals.find((j) => j.date === selectedDate);
    setJournalText(existingEntry ? existingEntry.text : "");
    setJournalColor(existingEntry ? existingEntry.color : "default");
  }, [selectedDate, journals]);

  const addJournal = () => {
    if (!journalText.trim()) return;

    const newEntry = {
      id: Date.now(),
      date: selectedDate,
      text: journalText,
      color: journalColor,
    };

    // ✔ Prevent duplicates for same date (update instead of adding again)
    const filtered = journals.filter(j => j.date !== selectedDate);

    setJournals([...filtered, newEntry]);

    setJournalText("");
    setJournalColor("default");
  };

  return (
    <View style={{ flex: 1 }}>
      <TextInput
        placeholder="Write your thoughts..."
        placeholderTextColor="#414040ff"
        value={journalText}
        onChangeText={setJournalText}
        style={styles.input}
        multiline
      />

      {/* Color Selection Buttons */}
      <View style={styles.colorRow}>
        {Object.keys(colorThemes).map((c) => (
          <TouchableOpacity
            key={c}
            onPress={() => setJournalColor(c)}
            style={[
              styles.colorButton,
              { backgroundColor: colorThemes[c] },
              journalColor === c && styles.selectedColor,
            ]}
          />
        ))}
      </View>

      <TouchableOpacity style={styles.addBtn} onPress={addJournal}>
        <Text style={{ color: "white", fontWeight: "600" }}>Save Entry</Text>
      </TouchableOpacity>

      <FlatList
        data={journals.filter((j) => j.date === selectedDate)}
        keyExtractor={(i) => i.id.toString()}
        renderItem={({ item }) => (
          <View style={[styles.entryBox, { backgroundColor: colorThemes[item.color] }]}>
            <Text style={styles.entryText}>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#d9d9d9ff",
    color: "#212121ff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    minHeight: 100,
    textAlignVertical: "top",
  },
  addBtn: { 
    backgroundColor: "#6C63FF", 
    padding: 12, 
    borderRadius: 10, 
    alignItems: "center", 
    marginBottom: 15 
  },
  entryBox: { 
    padding: 12, 
    borderRadius: 10, 
    marginVertical: 6 
  },
  entryText: { 
    fontSize: 15, 
    color: "#000" 
  },
  colorRow: { 
    flexDirection: "row", 
    justifyContent: "space-around", 
    marginBottom: 10 
  },
  colorButton: { 
    width: 30, 
    height: 30, 
    borderRadius: 50, 
    borderWidth: 2, 
    borderColor: "#999" 
  },
  selectedColor: { 
    borderColor: "black", 
    borderWidth: 3 
  },
});
