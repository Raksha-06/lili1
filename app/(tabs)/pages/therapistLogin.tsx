import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();
  const goToHome = () => {
    router.push("/(tabs)/pages/home"); // navigate to Home page
  };
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://via.placeholder.com/80" }}
        style={styles.logo}
      />

      <View style={styles.formContainer}>
        <Text style={styles.title}>Therapist Login</Text>

        <Text style={styles.label}>Email or Username</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter email or username"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter password"
          secureTextEntry
        />

        <TouchableOpacity>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} onPress={goToHome}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5b5d6ff", padding: 20 },
  logo: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    position: "absolute",
    top: 20,
    left: 20,
  },
  formContainer: { flex: 1, justifyContent: "center", paddingHorizontal: 20 },
  title: {
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 40,
  },
  label: { fontSize: 16, marginBottom: 5 },
  input: {
    width: "100%",
    height: 48,
    borderWidth: 2,
    borderColor: "#092a6bff",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  forgotText: {
    color: "#2e6bcf",
    textAlign: "right",
    marginBottom: 20,
    fontWeight: "500",
  },
  loginButton: {
    backgroundColor: "#528eefff",
    paddingVertical: 14,
    borderRadius: 8,
  },
  loginButtonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
