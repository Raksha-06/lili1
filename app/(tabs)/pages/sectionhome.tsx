// // import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// import { useRouter } from 'expo-router'; // ✅ useRouter for navigation
// import React from 'react';
// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// const SectionOne = () => {
//   const router = useRouter();

//   const onPress = (feature) => {
//     switch (feature) {
//       case 'AI Chatbot':
//         router.push('/pages/chatbot'); // navigate to Chatbot screen
//         break;
//       case 'Diary':
//         router.push('/diary'); // navigate to Diary screen (if exists)
//         break;
//       case 'Talk to Therapist':
//         router.push('/therapist'); // navigate to Therapist screen
//         break;
//       default:
//         alert(`Clicked ${feature}`);
//     }
//   };

//   return (
//     <View >
//     <View style={styles.containerFeatures}>
//       <Text style={styles.title}>Features</Text>
//       <View style={styles.iconRow}>
//         <TouchableOpacity style={styles.iconButton} onPress={() => onPress('AI Chatbot')}>
//           <Icon name="robot" size={40} color="#fff" />
//           <Text style={styles.iconText}>AI Chatbot</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.iconButton} onPress={() => onPress('Diary')}>
//           <Icon name="book-open" size={40} color="#fff" />
//           <Text style={styles.iconText}>Diary</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.iconButton} onPress={() => onPress('Talk to Therapist')}>
//           <Icon name="account-heart" size={40} color="#fff" />
//           <Text style={styles.iconText}>Therapist</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//     <View></View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//  containerFeatures: {
//     padding: 20,
//     backgroundColor: '#6C63FF',
//     borderRadius: 12,
//     marginHorizontal: 10,
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#fff',
//     marginBottom: 15,
//   },
//   iconRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//   },
//   iconButton: {
//     alignItems: 'center',
//     padding: 10,
//     backgroundColor: '#8A82FF',
//     borderRadius: 12,
//     width: 80,
//     height: 100,
//     justifyContent: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.2,
//     shadowRadius: 2,
//   },
//   iconText: {
//     color: '#fff',
//     marginTop: 5,
//     fontSize: 12,
//     textAlign: 'center',
//     fontWeight: '600',
//   },
// });

// export default SectionOne;
import { useRouter } from 'expo-router'; // ✅ useRouter for navigation
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SectionOne = () => {
  const router = useRouter();

  const onPressFeature = (feature) => {
    switch (feature) {
      case 'AI Chatbot':
        router.push('/pages/chatbot');
        break;
      case 'Diary':
        router.push('/pages/dairy1');
        break;
      case 'Talk to Therapist':
        router.push('/therapist');
        break;
      default:
        alert(`Clicked ${feature}`);
    }
  };

  const onPressExplore = (option) => {
    switch (option) {
      case 'Activities':
        router.push('/(tabs)/pages/activities'); // your activities page  //
        break;
      case 'Self Check':
        router.push('/self-check'); // your self evaluation page
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
          <TouchableOpacity style={styles.iconButton} onPress={() => onPressFeature('AI Chatbot')}>
            <Icon name="robot" size={40} color="#fff" />
            <Text style={styles.iconText}>AI Chatbot</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton} onPress={() => onPressFeature('Diary')}>
            <Icon name="book-open" size={40} color="#fff" />
            <Text style={styles.iconText}>Diary</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton} onPress={() => onPressFeature('Talk to Therapist')}>
            <Icon name="account-heart" size={40} color="#fff" />
            <Text style={styles.iconText}>Therapist</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* --- Explore More Section --- */}
      <View style={styles.containerExplore}>
        <Text style={styles.title}>Explore More</Text>
        <View style={styles.iconRow}>
          <TouchableOpacity style={styles.iconButton} onPress={() => onPressExplore('Activities')}>
            <Icon name="clipboard-list" size={40} color="#fff" />
            <Text style={styles.iconText}>Activities</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton} onPress={() => onPressExplore('Self Check')}>
            <Icon name="account-check" size={40} color="#fff" />
            <Text style={styles.iconText}>Self Check</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerFeatures: {
    padding: 20,
    backgroundColor: '#6C63FF',
    borderRadius: 12,
    marginHorizontal: 10,
    marginBottom: 20,
  },
  containerExplore: {
    padding: 20,
    backgroundColor: '#6C63FF',
    borderRadius: 12,
    marginHorizontal: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  iconButton: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#8A82FF',
    borderRadius: 12,
    width: 100,
    height: 100,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  iconText: {
    color: '#fff',
    marginTop: 5,
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '600',
  },
});

export default SectionOne;
