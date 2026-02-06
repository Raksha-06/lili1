import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

// Inside your component:

export default function TherapistHome() {
  const router = useRouter();
  const [filters, setFilters] = useState({
    location: "",
    language: "",
    country: "",
  });

  const [filteredTherapists, setFilteredTherapists] = useState([]);

  const therapists = [
    {
      id: "1",
      name: "Dr. Sarah Johnson",
      specialization: "CBT",
      location: "Mumbai",
      language: "English",
    },
    {
      id: "2",
      name: "Dr. Rahul Verma",
      specialization: "Trauma Healing",
      location: "Bangalore",
      language: "Hindi",
    },
    {
      id: "3",
      name: "Dr. Ana García",
      specialization: "Mindfulness",
      location: "Madrid",
      language: "Spanish",
    },
  ];

  // Apply filters
  const applyFilters = () => {
    const results = therapists.filter((t) => {
      const matchesLocation = filters.location
        ? t.location.toLowerCase().includes(filters.location.toLowerCase())
        : true;
      const matchesLanguage = filters.language
        ? t.language.toLowerCase().includes(filters.language.toLowerCase())
        : true;
      const matchesCountry = filters.country
        ? t.location.toLowerCase().includes(filters.country.toLowerCase())
        : true;

      return matchesLocation && matchesLanguage && matchesCountry;
    });

    setFilteredTherapists(results);
  };

  // Decide which list to render: filtered or all
  const dataToShow =
    filteredTherapists.length > 0 ||
    filters.location ||
    filters.language ||
    filters.country
      ? filteredTherapists
      : therapists;

  return (
    <View style={styles.container}>
      {/* My Therapist Button */}
      <TouchableOpacity
        style={styles.myTherapistBtn}
        onPress={() => router.push("/(tabs)/pages/myTherapist")} // path to your TherapistPage
      >
        <Text style={{ color: "#F3E2C1", fontWeight: "bold" }}>
          My Therapist
        </Text>
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

      {/* Search Button */}
      <TouchableOpacity style={styles.searchBtn} onPress={applyFilters}>
        <Text style={{ color: "#F3E2C1", fontWeight: "bold" }}>Search</Text>
      </TouchableOpacity>

      {/* Therapist List */}
      <Text style={styles.sectionTitle}>Recommended Therapists</Text>

      <FlatList
        data={dataToShow}
        keyExtractor={(item) => item.id}
        style={{ marginTop: 10 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.text}>
              Specialization: {item.specialization}
            </Text>
            <Text style={styles.text}>Location: {item.location}</Text>
            <Text style={styles.text}>Language: {item.language}</Text>

            <TouchableOpacity style={styles.bookBtn}>
              <Text style={{ color: "#F3E2C1", fontWeight: "600" }}>
                View Profile
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#F3E2C1" }, // softCream

  myTherapistBtn: {
    backgroundColor: "#B77466", // primaryCoral
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
    marginBottom: 10,
    color: "#5A4938",
  }, // darkBrown

  input: {
    borderWidth: 1,
    borderColor: "#7D6C58", // softBrown
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    backgroundColor: "#F0D9B5", // warmCream
    color: "#5A4938", // text color darkBrown
  },

  searchBtn: {
    backgroundColor: "#8B4B3E", // accentBrown
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#E2B59A", // secondaryCoral
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 2,
    shadowColor: "#5A4938", // darkBrown shadow
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },

  name: { fontSize: 16, fontWeight: "bold", marginBottom: 5, color: "#5A4938" },
  text: { fontSize: 14, color: "#5A4938" },

  bookBtn: {
    backgroundColor: "#8B4B3E", // accentBrown
    padding: 10,
    marginTop: 10,
    borderRadius: 8,
    alignItems: "center",
  },
});
