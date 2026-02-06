import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function TodoList({ selectedDate, todos, setTodos, markCalendar }) {
  const [todoText, setTodoText] = useState("");

  const addTodo = () => {
    if (!todoText.trim()) return;

    const newTodo = { id: Date.now().toString(), date: selectedDate, text: todoText };
    const updated = [...todos, newTodo];

    setTodos(updated);

    // ✔ Mark only when this is the first todo for that date
    const alreadyMarked = updated.filter(item => item.date === selectedDate).length > 1;
    if (!alreadyMarked) {
      markCalendar(selectedDate); // no emotion or journal marking
    }

    setTodoText("");
  };

  return (
    <View style={{ flex: 1 }}>
      <TextInput
        placeholder="Add a task..."
        value={todoText}
        onChangeText={setTodoText}
        style={styles.input}
      />

      <TouchableOpacity style={styles.addBtn} onPress={addTodo}>
        <Text style={{ color: "white" }}>Add Task</Text>
      </TouchableOpacity>

      <FlatList
        data={todos.filter(item => item.date === selectedDate)}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Text style={styles.listItem}>• {item.text}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, borderRadius: 8, marginBottom: 10 },
  addBtn: { backgroundColor: "#4a90e2", padding: 10, borderRadius: 8, alignItems: "center", marginBottom: 15 },
  listItem: { padding: 10, backgroundColor: "#f7f7f7", marginVertical: 5, borderRadius: 5 },
});
