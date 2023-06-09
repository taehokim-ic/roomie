import React, { useState, useContext, Profiler } from 'react';
import { View, Text, Button, StyleSheet, StatusBar, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import UserContext from '../../context/UserContext';
import axios from 'axios';

const ProfileEditScreen = () => {
  const navigation = useNavigation();

  const {user, setUser} = useContext(UserContext);

  const handleSave = () => {
    setUser({
      id: "d274e899-53a6-4b25-8558-e28749032a4f",
      name: "Jack",
      picture_url: "https://hrgyksjnqypffnavbeqn.supabase.co/storage/v1/object/public/user_profile_pictures/josh_tran_profile.png",
      bio: "I am a cool person",
      requirements: [
        "I am looking for a cool person"
      ],
      additional_info: "I am a cool person",
      email: "gramdschmidt@gmail.com",
      age: 31,
      dob: "1992-02-02",
      nationality: "American",
      preferredLocation: "London",
      gender: "Male",
      smoking: "No",
      hasPets: "No",
      minBudget: 1000,
      maxBudget: 2000,
      primary_language: "English",
      contact_number: "4142124122"
    });
    // axios.post('..../api/v1/profile/......', {
    //   name: "John Smith",
    //   profile_url: "https://hrgyksjnqypffnavbeqn.supabase.co/storage/v1/object/public/user_profile_pictures/josh_tran_profile.png",
    //   bio: "I am a cool person",
    //   requirements: ,
    //   additional_info: ,
    //   email: ,
    //   age: ,
    //   dob: ,
    //   nationality: ,
    //   preferredLocation: ,
    //   gender: ,
    //   smoking: ,
    //   hasPets: ,
    //   minBudget: ,
    //   maxBudget: ,
    //   primary_language: ,
    //   contact_number: 
    // })
    // .then((response) => {
    //   console.log(response);
    // }, (error) => {
    //   console.log(error);
    // });
    navigation.navigate('DefaultProfile', { instantAnimation: true });
  };


  const ProfileTextbox = ({label, input}) => {
    const [inputValue, setInputValue] = useState(input);

    const handleInputChange = (text) => {
        setInputValue(text);
    };

    return (
        <View style={styles.row}>
            <Text style={styles.label} >{label}</Text>
            <TextInput onChangeText={handleInputChange} value={inputValue} />
      </View>
    );
};

  return (
    <ScrollView>
      <View>
        <StatusBar barStyle="dark-content" translucent={false} />
        <View>
          <Text style={styles.subtitle}>Personal Details</Text>
        </View>
        <ProfileTextbox label="Name" input={user.name} />
        <ProfileTextbox label="Age" input={user.age.toString()} />
        <ProfileTextbox label="Contact Number" input={user.contact_number} />
        <ProfileTextbox label="Email Address" input={user.email} />
        <ProfileTextbox label="Date of Birth" input={user.dob} />
        <ProfileTextbox label="Nationality" input={user.nationality} />
        <ProfileTextbox label="Primary Language" input={user.primary_language} />
        <ProfileTextbox label="Minimum Budget" input={user.minBudget.toString()} />
        <ProfileTextbox label="Maximum Budget" input={user.maxBudget.toString()} />
        <View>
          <Text style={styles.subtitle}>Preferences</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Location</Text>
          <TextInput style={styles.input} value={user.preferredLocation} />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Gender</Text>
          <TextInput style={styles.input} value={user.gender} />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Smoker?</Text>
          <TextInput style={styles.input} value={user.smoking} />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Has Pets?</Text>
          <TextInput style={styles.input} value={user.hasPets} />
        </View>
        <View style={styles.row}>
          <Button title="Save" onPress={handleSave} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    color: '#049372',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
  },
  title: {
    fontSize: 22,
    paddingTop: 38,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'left',
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  cancelButtonContainer: {
    paddingTop: 40,
    marginLeft: 20,
  },
  editButtonContainer: {
    paddingTop: 40,
    marginRight: 20,
  },
  editButton: {
    fontSize: 16,
    color: '#007AFF',
  },
  cancelButton: {
    fontSize: 16,
    color: '#007AFF',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
});

export default ProfileEditScreen;