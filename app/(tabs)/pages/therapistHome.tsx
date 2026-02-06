import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function TherapistHome() {
  
  const [filters, setFilters] = useState({
    location: "",
    language: "",
    country: "",
  });

  // temporary therapist data
  const therapists = [
    { id: "1", name: "Dr. Sarah Johnson", specialization: "CBT", location: "Mumbai", language: "English" },
    { id: "2", name: "Dr. Rahul Verma", specialization: "Trauma Healing", location: "Bangalore", language: "Hindi" },
    { id: "3", name: "Dr. Ana García", specialization: "Mindfulness", location: "Madrid", language: "Spanish" },
  ];

  return (
    <View style={styles.container}>

      {/* My Therapist Button */}
      <TouchableOpacity style={styles.myTherapistBtn}>
        <Text style={{ color: "white", fontWeight: "bold" }}>My Therapist</Text>
      </TouchableOpacity>

      {/* Filters Section */}
      <Text style={styles.sectionTitle}>Filter by</Text>

      <TextInput
        placeholder="Location"
        style={styles.input}
        value={filters.location}
        onChangeText={(t) => setFilters({ ...filters, location: t })}
      />

      <TextInput
        placeholder="Language"
        style={styles.input}
        value={filters.language}
        onChangeText={(t) => setFilters({ ...filters, language: t })}
      />

      <TextInput
        placeholder="Country"
        style={styles.input}
        value={filters.country}
        onChangeText={(t) => setFilters({ ...filters, country: t })}
      />

      {/* Therapist List */}
      <Text style={styles.sectionTitle}>Recommended Therapists</Text>

      <FlatList
        data={therapists}
        keyExtractor={(item) => item.id}
        style={{ marginTop: 10 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.text}>Specialization: {item.specialization}</Text>
            <Text style={styles.text}>Location: {item.location}</Text>
            <Text style={styles.text}>Language: {item.language}</Text>

            <TouchableOpacity style={styles.bookBtn}>
              <Text style={{ color: "white", fontWeight: "600" }}>View Profile</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "white" },

  myTherapistBtn: {
    backgroundColor: "#6C63FF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20
  },

  sectionTitle: { fontSize: 18, fontWeight: "600", marginTop: 10, marginBottom: 10 },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
    marginBottom: 10
  },

  card: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 2
  },

  name: { fontSize: 16, fontWeight: "bold", marginBottom: 5 },
  text: { fontSize: 14, color: "#555" },

  bookBtn: {
    backgroundColor: "#4a90e2",
    padding: 10,
    marginTop: 10,
    borderRadius: 8,
    alignItems: "center"
  },
});
