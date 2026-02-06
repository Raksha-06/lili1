import { useRouter } from "expo-router"; // ✅ useRouter for navigation
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const SectionOne = () => {
  const router = useRouter();

  const onPressFeature = (feature) => {
    switch (feature) {
      case "AI Chatbot":
        router.push("/pages/chatbot");
        break;
      case "Diary":
        router.push("/pages/dairy1");
        break;
      case "Talk to Therapist":
        router.push("/(tabs)/pages/therapistHome");
        break;
      default:
        alert(`Clicked ${feature}`);
    }
  };

  const onPressExplore = (option) => {
    switch (option) {
      case "Activities":
        router.push("/(tabs)/pages/activities");
        break;
      case "Self Check":
        router.push("/self-check");
        break;
      case "Exercise":
        router.push("/(tabs)/pages/exercises");
        break;
      default:
        alert(`Clicked ${option}`);
    }
  };

  return (
    <View>
      {/* --- Features Section --- */}
      <View style={styles.containerFeatures}>
        <Text style={styles.title}>Features</Text>
        <View style={styles.iconRow}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => onPressFeature("AI Chatbot")}
          >
            <Icon name="robot" size={40} color="#59332d" />
            <Text style={styles.iconText}>AI Chatbot</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => onPressFeature("Diary")}
          >
            <Icon name="book-open" size={40} color="#59332d" />
            <Text style={styles.iconText}>Diary</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => onPressFeature("Talk to Therapist")}
          >
            <Icon name="account-heart" size={40} color="#59332d" />
            <Text style={styles.iconText}>Therapist</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* --- Explore More Section --- */}
      <View style={styles.containerExplore}>
        <Text style={styles.title}>Explore More</Text>
        <View style={styles.iconRow}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => onPressExplore("Activities")}
          >
            <Icon name="clipboard-list" size={40} color="#59332d" />
            <Text style={styles.iconText}>Activities</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => onPressExplore("Self Check")}
          >
            <Icon name="account-check" size={40} color="#59332d" />
            <Text style={styles.iconText}>Self Check</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => onPressExplore("Exercise")}
          >
            <Icon name="meditation" size={40} color="#59332d" />
            <Text style={styles.iconText}>Exercise</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerFeatures: {
    padding: 20,
    backgroundColor: "#B77466", // primaryCoral
    borderRadius: 12,
    marginHorizontal: 10,
    marginBottom: 20,
  },
  containerExplore: {
    padding: 20,
    backgroundColor: "#B77466", // primaryCoral
    borderRadius: 12,
    marginHorizontal: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff", // softCream
    marginBottom: 15,
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  iconButton: {
    alignItems: "center",
    padding: 10,
    backgroundColor: "#E2B59A", // secondaryCoral
    borderRadius: 12,
    width: 100,
    height: 100,
    justifyContent: "center",
    shadowColor: "#F0D9B5", // warmCream as subtle shadow
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  iconText: {
    color: "#59332d", // softCream
    marginTop: 5,
    fontSize: 12,
    textAlign: "center",
    fontWeight: "600",
  },
});

export default SectionOne;
