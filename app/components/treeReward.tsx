// TreeReward.js
import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, Text } from "react-native";

export default function TreeReward({ sentiment }) {
  const animation = useRef(new Animated.Value(0)).current;

  // Map sentiment to visual and message
  let emoji = "🌱";
  let message = "";
  switch (sentiment) {
    case "positive":
      emoji = "🌸";
      message = "Amazing! Your tree grows 🌸";
      break;
    case "neutral":
      emoji = "🟩";
      message = "Good effort! 🌿";
      break;
    case "negative":
      emoji = "🍂";
      message = "It’s okay, challenging thoughts matter 🍂";
      break;
    default:
      emoji = "🌱";
      message = "";
  }

  useEffect(() => {
    // Simple pop animation
    animation.setValue(0);
    Animated.spring(animation, {
      toValue: 1,
      friction: 2,
      useNativeDriver: true,
    }).start();
  }, [sentiment]);

  return (
    <>
      <Animated.Text
        style={[styles.tree, { transform: [{ scale: animation }] }]}
      >
        {emoji}
      </Animated.Text>
      <Text style={styles.feedback}>{message}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  tree: { fontSize: 60, marginTop: 20 },
  feedback: { fontSize: 16, marginTop: 10, textAlign: "center" },
});
