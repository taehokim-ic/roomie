import React, {useState, useEffect} from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';

const ProfilePage = () => {
  const route = useRoute();
  const { uuid } = route.params;

  const [flatmateProfile, setFlatmateProfile] = useState({});

  // const flatmateProfile = {
  //   profilePicture: require('../../assets/profile-picture.png'),
  //   name: 'John Doe',
  //   age: '25',
  //   bio: 'I am a friendly and tidy person looking for a flat to share. I enjoy cooking, playing guitar, and exploring new places.',
  //   pronouns: 'He/Him',
  //   institution: 'UCL',
  //   nationality: 'Estonian',
  //   contactInfo: 'john.doe@example.com',
  // };

  const fetchProfile = async () => {
    try {
      const response = await axios.get('http://roomie3.herokuapp.com/api/v1/person?uuid=' + uuid);
      setFlatmateProfile(response.data);
      console.log(response.data);
    }
    catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleMessagePress = () => {
    // Handle message button press
  };

  return (
    <View style={styles.container}>
      {/* Profile Picture */}
      <Image source={{uri: flatmateProfile.picture_url}} style={styles.profilePicture} />

      {/* Main Summary */}
      <View style={styles.card}>
        <Text style={styles.name}>
          {flatmateProfile.name}, <Text style={styles.age}>{flatmateProfile.age}</Text>
        </Text>
        <Text style={styles.bio}>{flatmateProfile.bio}</Text>
      </View>

      {/* Extra Content */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Additional Information</Text>
        <View style={styles.infoRow}>
          <Text style={styles.subtitle}>Pronouns:</Text>
          <Text style={styles.info}>{flatmateProfile.pronouns}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.subtitle}>Institution:</Text>
          <Text style={styles.info}>{flatmateProfile.institution}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.subtitle}>Nationality:</Text>
          <Text style={styles.info}>{flatmateProfile.nationality}</Text>
        </View>
      </View>

      {/* <View style={styles.extraContent}>
        {prompts.map((prompt, index) => (
          <View key={prompt.id} style={styles.promptContainer}>
            <Text style={styles.prompt}>{prompt.question}</Text>
            <Text style={styles.answer}>{answers[index]}</Text>
          </View>
        ))}
      </View> */}

      {/* Message Button */}
      <TouchableOpacity style={styles.messageButton} onPress={handleMessagePress}>
        <Text style={styles.messageButtonText}>Message</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    padding: 16,
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
    backgroundColor: '#333333',
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

export default ProfilePage;
