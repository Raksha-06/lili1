import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { Calendar } from "react-native-calendars";

export default function TherapistDashboard() {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0],
  );

  //   const therapist = {
  const therapist = null; // simulate no therapist assigned
  // const therapist = undefined; // alternative

  // Example meetings with reports
  const meetings = [
    {
      id: "1",
      date: "2026-02-10",
      time: "10:00 AM",
      duration: "30 mins",
      type: "Video Call",
      note: "Discuss progress",
      reports: ["Progress_Report.pdf", "Homework.docx"],
    },
    {
      id: "2",
      date: "2026-02-10",
      time: "03:00 PM",
      duration: "45 mins",
      type: "Chat",
      note: "Follow-up",
      reports: [],
    },
    {
      id: "3",
      date: "2026-02-12",
      time: "11:30 AM",
      duration: "60 mins",
      type: "Call",
      note: "New session",
      reports: ["Session_Notes.pdf"],
    },
  ];

  const todaysMeetings = meetings.filter((m) => m.date === selectedDate);

  // Calendar marking
  const markedDates = {};
  meetings.forEach((m) => {
    markedDates[m.date] = { marked: true, dotColor: "#8B4B3E" };
  });
  markedDates[selectedDate] = {
    ...(markedDates[selectedDate] || {}),
    selected: true,
    selectedColor: "#8B4B3E",
  };

  // Static actions
  const handleMessage = () =>
    Alert.alert("Message", `Start messaging ${therapist.name}`);
  const handleCall = () =>
    Alert.alert("Call", `Start call with ${therapist.name}`);
  const handleNotes = () =>
    Alert.alert("Notes", `View notes/reports from ${therapist.name}`);
  const handleReport = (file) =>
    Alert.alert("Download Report", `Download/View file: ${file}`);

  if (!therapist) {
    return (
      <View style={styles.container}>
        <Text style={styles.noTherapistText}>
          You have no therapist assigned.
        </Text>
        <TouchableOpacity
          style={styles.bookBtn}
          onPress={() => router.push("/(tabs)/pages/therapistHome")} // change path to your booking page
        >
          <Text style={styles.bookBtnText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {/* Therapist Card */}
      <View style={styles.therapistCard}>
        <Text style={styles.therapistName}>{therapist.name}</Text>
        <Text style={styles.therapistSpec}>{therapist.specialization}</Text>

        {/* Static Actions */}
        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.actionBtn} onPress={handleMessage}>
            <Text style={styles.actionText}>Message</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionBtn} onPress={handleCall}>
            <Text style={styles.actionText}>Call</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionBtn} onPress={handleNotes}>
            <Text style={styles.actionText}>Notes</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Calendar */}
      <Calendar
        style={{ marginTop: 10, borderRadius: 12 }}
        theme={{
          selectedDayBackgroundColor: "#8B4B3E",
          todayTextColor: "#B77466",
          textDayFontSize: 12,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 12,
        }}
        markedDates={markedDates}
        onDayPress={(day) => setSelectedDate(day.dateString)}
      />

      {/* Today's Meetings */}
      <Text style={styles.sectionTitle}>
        Meetings on {selectedDate} ({todaysMeetings.length})
      </Text>

      {todaysMeetings.length > 0 ? (
        todaysMeetings.map((meeting) => (
          <View key={meeting.id} style={styles.meetingCard}>
            <Text style={styles.meetingTime}>
              {meeting.time} ({meeting.duration}) - {meeting.type}
            </Text>
            <Text style={styles.meetingNote}>{meeting.note}</Text>

            {/* Meeting-specific Actions */}
            <View style={styles.actionRow}>
              <TouchableOpacity
                style={styles.actionBtn}
                onPress={() =>
                  Alert.alert("Notes", `View notes for ${meeting.type}`)
                }
              >
                <Text style={styles.actionText}>Notes</Text>
              </TouchableOpacity>
            </View>

            {/* Reports */}
            {meeting.reports.length > 0 && (
              <View style={{ marginTop: 8 }}>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "#5A4938",
                    marginBottom: 4,
                  }}
                >
                  Reports:
                </Text>
                {meeting.reports.map((file, idx) => (
                  <TouchableOpacity
                    key={idx}
                    style={styles.reportBtn}
                    onPress={() => handleReport(file)}
                  >
                    <Text style={styles.reportText}>{file}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        ))
      ) : (
        <Text style={styles.noMeetingText}>
          No meetings scheduled for this day.
        </Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#F3E2C1" },

  therapistCard: {
    backgroundColor: "#E2B59A",
    padding: 15,
    borderRadius: 12,
    shadowColor: "#5A4938",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 10,
  },
  therapistName: { fontSize: 18, fontWeight: "bold", color: "#5A4938" },
  therapistSpec: { fontSize: 14, color: "#7D6C58", marginTop: 4 },

  actionRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  actionBtn: {
    backgroundColor: "#8f5248",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  actionText: { color: "#ffffff", fontWeight: "bold", textAlign: "center" },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 8,
    color: "#5A4938",
  },

  meetingCard: {
    backgroundColor: "#F0D9B5",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#5A4938",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  meetingTime: { fontWeight: "bold", color: "#5A4938" },
  meetingNote: { color: "#7D6C58", marginVertical: 4 },

  reportBtn: {
    backgroundColor: "#8B4B3E",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
    marginBottom: 4,
  },
  reportText: { color: "#F3E2C1" },

  noTherapistText: {
    color: "#5A4938",
    fontSize: 16,
    textAlign: "center",
    marginVertical: 20,
  },
  bookBtn: {
    backgroundColor: "#B77466",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  bookBtnText: { color: "#F3E2C1", fontWeight: "bold" },

  noMeetingText: {
    color: "#5A4938",
    fontStyle: "italic",
    marginTop: 10,
    textAlign: "center",
  },
});
