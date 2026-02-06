import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import SectionTwo from "./section2Home";
import SectionOne from "./sectionhome"; // make sure path is correct
export default function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <Text style={styles.profileName}>Hi Danny</Text>
          <Image
            source={require("./diary.png")} // adjust path if needed
            style={styles.profileImage}
          />
        </View>
      </View>

      {/* Single Section */}
      <SectionOne navigation={navigation} />
      {/* Section Two - Mood Slider */}
      <SectionTwo />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F0D9B5", // softCream
  },
  scrollContainer: {
    padding: 10,
    backgroundColor: "#F0D9B5",
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end", // right align
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: "#B77466", // primaryCoral
    borderRadius: 12,
    marginBottom: 15,
    elevation: 2,
    shadowColor: "#5A4938", // darkBrown
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#59332d", // darkBrown
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 8,
    backgroundColor: "#F0D9B5", // warmCream
  },
});
