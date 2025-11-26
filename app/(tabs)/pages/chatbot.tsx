
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function ChatbotScreen() {
  const [input, setInput] = useState('');
  const [chats, setChats] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [activeSession, setActiveSession] = useState(null);
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [chatToShare, setChatToShare] = useState(null);

  const dummyResponses = [
    ["Sure! Here are a few points to get started:", "1. Define your goal clearly.", "2. Gather relevant data and plan structure.", "3. Iterate with improvements."],
    ["Here’s a summary of your topic:", "• It helps improve workflow efficiency.", "• Easy to integrate and scale.", "• User-friendly interface."],
    ["Let’s break that down:", "→ Step 1: Understand requirements.", "→ Step 2: Implement and test.", "→ Step 3: Review and deploy."]
  ];

  const therapists = [
    { id: 1, name: "Dr. Alice" },
    { id: 2, name: "Dr. Bob" },
    { id: 3, name: "Dr. Charlie" }
  ];

  // Load chat sessions
  useEffect(() => { loadSessions(); }, []);

  const loadSessions = async () => {
    try {
      const stored = await AsyncStorage.getItem('chat_sessions');
      if (stored) setSessions(JSON.parse(stored));
    } catch (e) { console.log('Error loading sessions:', e); }
  };

  const saveSessions = async (data) => {
    try { await AsyncStorage.setItem('chat_sessions', JSON.stringify(data)); }
    catch (e) { console.log('Error saving sessions:', e); }
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const newChats = [...chats, { sender: 'user', text: input }];
    const botResponse = dummyResponses[Math.floor(Math.random() * dummyResponses.length)];
    const updatedChats = [...newChats, { sender: 'bot', text: botResponse }];
    setChats(updatedChats);
    setInput('');

    if (activeSession) {
      const updatedSessions = sessions.map((s) =>
        s.id === activeSession ? { ...s, messages: updatedChats, title: newChats[0]?.text || s.title } : s
      );
      setSessions(updatedSessions);
      saveSessions(updatedSessions);
    }
  };

  const startNewChat = () => {
    const newSession = { id: Date.now().toString(), title: 'New Chat', messages: [] };
    const updated = [newSession, ...sessions];
    setSessions(updated);
    setActiveSession(newSession.id);
    setChats([]);
    saveSessions(updated);
  };

  const openChat = (session) => { setActiveSession(session.id); setChats(session.messages); };

  const deleteChat = (id) => {
    const updated = sessions.filter((s) => s.id !== id);
    setSessions(updated);
    saveSessions(updated);
    if (activeSession === id) { setActiveSession(null); setChats([]); }
  };

  const handleLongPress = (session) => {
    setChatToShare(session);
    setModalVisible(true);
  };

  const shareWithTherapist = (therapist) => {
    setModalVisible(false);
    alert(`Chat shared with ${therapist.name}`);
  };

  const renderMessage = ({ item }) => {
    if (item.sender === 'user') return (
      <View style={styles.userMsg}><Text style={styles.userText}>{item.text}</Text></View>
    );
    return (
      <View style={styles.botMsg}>{item.text.map((line, i) => <Text key={i} style={styles.botText}>{line}</Text>)}</View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      {/* Sidebar */}
      {sidebarVisible ? (
        <View style={styles.sidebar}>
          <View style={styles.sidebarTopBar}>
            <Text style={styles.sidebarTitle}>🗂️ Chats</Text>
            <TouchableOpacity onPress={() => setSidebarVisible(false)}>
              <Text style={styles.sidebarTopBtn}>✖️</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.newChatBtn} onPress={startNewChat}>
            <Text style={styles.newChatText}>+ New Chat</Text>
          </TouchableOpacity>

          <ScrollView>
            {sessions.map((s) => (
              <TouchableOpacity
                key={s.id}
                style={[styles.chatItem, s.id === activeSession && styles.chatItemActive]}
                onPress={() => openChat(s)}
                onLongPress={() => handleLongPress(s)}
              >
                <Text style={styles.chatItemText} numberOfLines={1}>
                  {s.title || 'Untitled Chat'}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      ) : (
        <TouchableOpacity style={styles.sidebarCollapsedFloating} onPress={() => setSidebarVisible(true)}>
          <Text style={{ color: '#fff', fontSize: 16 }}>🗂️</Text>
        </TouchableOpacity>
      )}

      {/* Chat container */}
      <View style={styles.chatContainer}>
        <View style={styles.chatTopRow}>
          <Text style={styles.title}>Let's Talk!</Text>
          <TouchableOpacity style={styles.therapistBtn} onPress={() => console.log('Talk to my therapist')}>
            <Text style={styles.therapistBtnText}>Talk to My Therapist</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={chats}
          renderItem={renderMessage}
          keyExtractor={(_, i) => i.toString()}
          contentContainerStyle={{ padding: 10 }}
        />

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type your message..."
            value={input}
            onChangeText={setInput}
          />
          <TouchableOpacity style={styles.sendBtn} onPress={handleSend}>
            <Text style={styles.sendText}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Therapist Modal */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Share with Therapist</Text>
            <FlatList
              data={therapists}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.modalItem} onPress={() => shareWithTherapist(item)}>
                  <Text style={styles.modalItemText}>{item.name}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity style={styles.modalCancel} onPress={() => setModalVisible(false)}>
              <Text style={styles.modalCancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1, flexDirection: 'row', backgroundColor: '#f5f5f5' },
  sidebar: { width: 160, backgroundColor: '#2f3640', paddingTop: 40, paddingHorizontal: 5 },
  sidebarCollapsedFloating: { position: 'absolute', left: 5, top: 50, width: 30, height: 30, backgroundColor: '#2f3640', justifyContent: 'center', alignItems: 'center', borderRadius: 6, zIndex: 1000 },
  sidebarTopBar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, paddingHorizontal: 5 },
  sidebarTopBtn: { color: '#fff', fontSize: 16 },
  sidebarTitle: { color: '#fff', fontWeight: 'bold', fontSize: 13, textAlign: 'center', flex: 1 },
  newChatBtn: { backgroundColor: '#00a8ff', paddingVertical: 8, borderRadius: 6, marginBottom: 10 },
  newChatText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
  chatItem: { backgroundColor: '#353b48', marginVertical: 5, padding: 8, borderRadius: 6 },
  chatItemActive: { backgroundColor: '#718093' },
  chatItemText: { color: '#f5f6fa', fontSize: 12 },
  chatContainer: { flex: 1, paddingTop: 20, paddingHorizontal: 10 },
  chatTopRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, paddingHorizontal: 10 },
  title: { fontSize: 20, fontWeight: 'bold' },
  therapistBtn: { backgroundColor: '#656bbaff', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20 },
  therapistBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 14 },
  userMsg: { alignSelf: 'flex-end', backgroundColor: '#0c37b8ff', marginVertical: 4, padding: 10, borderRadius: 10, maxWidth: '80%' },
  botMsg: { alignSelf: 'flex-start', backgroundColor: '#dcdde1', marginVertical: 4, padding: 10, borderRadius: 10, maxWidth: '80%' },
  userText: { color: '#fff' },
  botText: { color: '#2f3640', marginVertical: 2 },
  inputContainer: { flexDirection: 'row', alignItems: 'center', paddingVertical: 8, borderTopWidth: 1, borderColor: '#ccc' },
  input: { flex: 1, backgroundColor: '#efe1f9ff', padding: 10, borderRadius: 20, marginRight: 8 },
  sendBtn: { backgroundColor: '#0984e3', paddingVertical: 10, paddingHorizontal: 15, borderRadius: 20 },
  sendText: { color: '#ecebfeff', fontWeight: 'bold' },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.4)', justifyContent: 'center', alignItems: 'center' },
  modalContainer: { backgroundColor: '#fff', width: '80%', borderRadius: 10, padding: 15 },
  modalTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  modalItem: { paddingVertical: 12, borderBottomWidth: 1, borderColor: '#ccc' },
  modalItemText: { fontSize: 16 },
  modalCancel: { marginTop: 10, paddingVertical: 12, backgroundColor: '#dcdde1', borderRadius: 6 },
  modalCancelText: { textAlign: 'center', fontWeight: 'bold', fontSize: 16 },
});


