import React, {useState, useEffect} from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';

const ProfilePage = ({navigation}) => {
  const route = useRoute();
  const { uuid } = route.params;

  const [flatmateProfile, setFlatmateProfile] = useState({});
  // const [interests, setInterests] = useState([]);
  const interests = [
    { id: '1', name: 'Sports' },
    { id: '2', name: 'Music' },
    { id: '3', name: 'Travel' },
    { id: '4', name: 'Food' },
    { id: '5', name: 'Art' },
    { id: '6', name: 'Technology' },
    { id: '7', name: 'Books' },
    { id: '8', name: 'Fashion' },
  ];
  const [prompt1, setPrompt1] = useState('');
  const [prompt2, setPrompt2] = useState('');
  const [prompt3, setPrompt3] = useState('');

  const fetchProfile = async () => {
    try {
      const response = await axios.get('http://roomie3.herokuapp.com/api/v1/person?uuid=' + uuid);
      setFlatmateProfile(response.data);
      navigation.setOptions({ title: response.data.name });
      console.log(response.data);
      setPrompt1(response.data.prompts[0]);
      setPrompt2(response.data.prompts[1]);
      setPrompt3(response.data.prompts[2]);
      // setInterests(response.data.interests);
    }
    catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.bubble}>
      <Text style={styles.text}>{item.name}</Text>
    </View>
  );

  const handleMessagePress = () => {
    // Handle message button press
    
  };

  return (
    <ScrollView style={styles.contentContainer}>
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

      {/* <View style={styles.card}>
        <Text style={styles.cardTitle}>Interests</Text>
        <FlatList
          data={interests}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.contentContainer2}
          numColumns={3}
        />
      </View> */}

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
        <View style={styles.infoRow}>
          <Text style={styles.subtitle}>Budget:</Text>
          <Text style={styles.info}>£{flatmateProfile.min_budget} - £{flatmateProfile.max_budget}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.subtitle}>Smoker?</Text>
          <Text style={styles.info}>{flatmateProfile.smoker}</Text>
        </View>
      </View>

      <View style={styles.card}>
          <View style={styles.promptContainer}>
            <Text style={styles.cardTitle}>Q. Are you a morning person or a night owl?</Text>
            <Text style={styles.answer}>{prompt1}</Text>
          </View>
      </View>

      <View style={styles.card}>
          <View style={styles.promptContainer}>
            <Text style={styles.cardTitle}>Q. How do you feel about occasional gatherings at the apartment?</Text>
            <Text style={styles.answer}>{prompt2}</Text>
          </View>
      </View>

      <View style={styles.card}>
          <View style={styles.promptContainer}>
            <Text style={styles.cardTitle}>Q. What is your typical work or study schedule?</Text>
            <Text style={styles.answer}>{prompt3}</Text>
          </View>
      </View>

      {/* Message Button */}
      <TouchableOpacity style={styles.messageButton} onPress={handleMessagePress}>
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

export default ProfilePage;
