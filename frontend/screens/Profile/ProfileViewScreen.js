import React from 'react';
import { View, TouchableOpacity, StyleSheet, StatusBar, TextInput, ScrollView, SafeAreaView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text, Card, Button } from '@rneui/themed'


const ProfileViewScreen = () => {
  const navigation = useNavigation();

  const user = {
    name: 'Jason Wright',
    age: 20,
    number: '+44 7705707370',
    email: 'jihoon.w123@gmail.com',
    dob: '10.02.2001',
    bio: 'I have finished my time at the military in South Korea and want to do an English-learning course in London.',
    lookingFor: 'I am looking for a flatshare in London.',
    addInfo: 'I have a peanut allergy, so please bear that in mind. I\'m also a vegetarian, but I don\'t mind if you eat meat. I\'m also a big fan of K-pop, so if you are too, that\'s a bonus!',
    img: require('../../assets/profile-picture.png'),
    pronouns: 'he/him',
    institution: 'UCL',
    nationality: 'Korean',
    prompt1: 'I\m definitely a morning person. I love an early morning run.',
    prompt2: 'Fine with me!',
    prompt3: 'I have a regular work schedule during weekdays and enjoy my evenings for personal hobbies and leisure.',
  }

  return (
    <ScrollView style={styles.contentContainer}>
    <View style={styles.container}>
      {/* Profile Picture */}
      <Image source={user.img} style={styles.profilePicture} />

      {/* Main Summary */}
      <View style={styles.card}>
        <Text style={styles.name}>
          {user.name}, <Text style={styles.age}>{user.age}</Text>
        </Text>
        <Text style={styles.bio}>{user.bio}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Additional Information</Text>
        <View style={styles.infoRow}>
          <Text style={styles.subtitle}>Pronouns:</Text>
          <Text style={styles.info}>{user.pronouns}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.subtitle}>Institution:</Text>
          <Text style={styles.info}>{user.institution}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.subtitle}>Nationality:</Text>
          <Text style={styles.info}>{user.nationality}</Text>
        </View>
      </View>

      <View style={styles.card}>
          <View style={styles.promptContainer}>
            <Text style={styles.cardTitle}>Q. Are you a morning person or a night owl?</Text>
            <Text style={styles.answer}>{user.prompt1}</Text>
          </View>
      </View>

      <View style={styles.card}>
          <View style={styles.promptContainer}>
            <Text style={styles.cardTitle}>Q. How do you feel about occasional gatherings at the apartment?</Text>
            <Text style={styles.answer}>{user.prompt2}</Text>
          </View>
      </View>

      <View style={styles.card}>
          <View style={styles.promptContainer}>
            <Text style={styles.cardTitle}>Q. What is your typical work or study schedule?</Text>
            <Text style={styles.answer}>{user.prompt3}</Text>
          </View>
      </View>

      {/* Message Button */}
      <TouchableOpacity style={styles.messageButton}>
        <Text style={styles.messageButtonText}>Connect</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bubble: {
    backgroundColor: '#03c9a9',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    margin: 4,
  },
  text: {
    fontSize: 14,
    color: '#333333',
  },
  contentContainer: {
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F2F2F2',
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  age: {
    fontWeight: 'normal',
    fontSize: 20,
  },
  bio: {
    fontSize: 14,
    textAlign: 'center',
    color: '#888888',
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 8,
  },
  info: {
    fontSize: 14,
    color: '#888888',
  },
  messageButton: {
    backgroundColor: '#038aff',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  messageButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default ProfileViewScreen;