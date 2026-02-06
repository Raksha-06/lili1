// import React, { useRef, useState } from "react";
// import { Animated, PanResponder, StyleSheet, Text, View } from "react-native";

// export default function SectionTwo() {
//   const sliderWidth = 300;
//   const handleSize = 50;

//   const moodSteps = ["😡", "😕", "😐", "🙂", "😄"];
//   const stepCount = moodSteps.length;
//   const stepWidth = sliderWidth / (stepCount - 1);

//   const pan = useRef(new Animated.ValueXY({ x: stepWidth * 2, y: 0 })).current; // start middle
//   const [currentEmoji, setCurrentEmoji] = useState("😐");
//   const [selectedEmoji, setSelectedEmoji] = useState("😐");

//   const offsetX = useRef(stepWidth * 2); // remembers last position

//   const panResponder = useRef(
//     PanResponder.create({
//       onStartShouldSetPanResponder: () => true,
//       onPanResponderGrant: (_, gestureState) => {
//         pan.setOffset({ x: offsetX.current, y: 0 }); // set offset so drag starts from current
//         pan.setValue({ x: 0, y: 0 }); // reset temporary value
//       },
//       onPanResponderMove: (_, gesture) => {
//         let newX = gesture.dx + offsetX.current;
//         if (newX < 0) newX = 0;
//         if (newX > sliderWidth) newX = sliderWidth;

//         pan.setValue({ x: gesture.dx, y: 0 }); // relative movement

//         // show emoji dynamically
//         const index = Math.round((newX / sliderWidth) * (stepCount - 1));
//         setCurrentEmoji(moodSteps[index]);
//       },
//       onPanResponderRelease: (_, gesture) => {
//         let newX = gesture.dx + offsetX.current;
//         if (newX < 0) newX = 0;
//         if (newX > sliderWidth) newX = sliderWidth;

//         // snap to nearest emoji
//         const index = Math.round((newX / sliderWidth) * (stepCount - 1));
//         const snappedX = stepWidth * index;

//         setSelectedEmoji(moodSteps[index]);
//         setCurrentEmoji(moodSteps[index]);

//         offsetX.current = snappedX; // remember for next drag

//         // reset pan offset and animate
//         pan.flattenOffset();
//         Animated.spring(pan, {
//           toValue: { x: snappedX, y: 0 },
//           useNativeDriver: false,
//         }).start();
//       },
//     }),
//   ).current;

//   return (
//     <View style={styles.container}>
//       {/* Dynamic Emoji */}
//       <Text style={styles.currentEmoji}>{currentEmoji}</Text>

//       {/* Selected Mood Text */}
//       <Text style={styles.label}>Today's Mood</Text>

//       {/* Slider Track */}
//       <View style={styles.trackContainer}>
//         <View style={styles.track} />

//         {/* Handle */}
//         <Animated.View
//           {...panResponder.panHandlers}
//           style={[styles.handle, { transform: [{ translateX: pan.x }] }]}
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { alignItems: "center", marginBottom: 40 },
//   currentEmoji: { fontSize: 60, marginBottom: 20 },
//   trackContainer: { width: 300, height: 60, justifyContent: "center" },
//   track: { height: 12, backgroundColor: "#E5E5E5", borderRadius: 6 },
//   handle: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: "#848adbff",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//     elevation: 5,
//     position: "absolute",
//     top: 5,
//   },

//   label: {
//     fontSize: 18,
//     fontFamily: "Arial, Helvetica, sans-serif",
//     color: "#211e1eff",
//   },
// });
import React, { useRef, useState } from "react";
import { Animated, PanResponder, StyleSheet, Text, View } from "react-native";

export default function SectionTwo() {
  const sliderWidth = 300;
  const handleSize = 50;

  const moodSteps = ["😡", "😕", "😐", "🙂", "😄"];
  const stepCount = moodSteps.length;
  const stepWidth = sliderWidth / (stepCount - 1);

  const pan = useRef(new Animated.ValueXY({ x: stepWidth * 2, y: 0 })).current; // start middle
  const [currentEmoji, setCurrentEmoji] = useState("😐");
  const [selectedEmoji, setSelectedEmoji] = useState("😐");

  const offsetX = useRef(stepWidth * 2); // remembers last position

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: (_, gestureState) => {
        pan.setOffset({ x: offsetX.current, y: 0 });
        pan.setValue({ x: 0, y: 0 });
      },
      onPanResponderMove: (_, gesture) => {
        let newX = gesture.dx + offsetX.current;
        if (newX < 0) newX = 0;
        if (newX > sliderWidth) newX = sliderWidth;

        pan.setValue({ x: gesture.dx, y: 0 });

        const index = Math.round((newX / sliderWidth) * (stepCount - 1));
        setCurrentEmoji(moodSteps[index]);
      },
      onPanResponderRelease: (_, gesture) => {
        let newX = gesture.dx + offsetX.current;
        if (newX < 0) newX = 0;
        if (newX > sliderWidth) newX = sliderWidth;

        const index = Math.round((newX / sliderWidth) * (stepCount - 1));
        const snappedX = stepWidth * index;

        setSelectedEmoji(moodSteps[index]);
        setCurrentEmoji(moodSteps[index]);

        offsetX.current = snappedX;

        pan.flattenOffset();
        Animated.spring(pan, {
          toValue: { x: snappedX, y: 0 },
          useNativeDriver: false,
        }).start();
      },
    }),
  ).current;

  return (
    <View style={styles.container}>
      <Text style={styles.currentEmoji}>{currentEmoji}</Text>
      <Text style={styles.label}>Today's Mood</Text>
      <View style={styles.trackContainer}>
        <View style={styles.track} />
        <Animated.View
          {...panResponder.panHandlers}
          style={[styles.handle, { transform: [{ translateX: pan.x }] }]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center", marginBottom: 40 },
  currentEmoji: { fontSize: 60, marginBottom: 20 },
  trackContainer: { width: 300, height: 60, justifyContent: "center" },
  track: { height: 12, backgroundColor: "#8B4B3E", borderRadius: 6 }, // softBrown
  handle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#B77466", // primaryCoral
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    position: "absolute",
    top: 5,
  },
  label: {
    fontSize: 18,
    fontFamily: "Arial, Helvetica, sans-serif",
    color: "#f7eadd", // darkBrown
  },
});
