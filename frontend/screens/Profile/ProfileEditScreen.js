import React, { useState, useContext, Profiler } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import UserContext from '../../context/UserContext';

const ProfileEditScreen = () => {
  const navigation = useNavigation();

  const handleSave = () => {
    // Save to database

    console.log('Saved value:', inputValue);
    navigation.navigate('DefaultProfile', { instantAnimation: true });
  };

  // const handleInputChange = (text) => {
  //   console.log('Input value:', text);
  // //   setInputValue(text);
  // };

  const user = useContext(UserContext);

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
        <ProfileTextbox label="Contact Number" input={user.contactNumber} />
        <ProfileTextbox label="Email Address" input={user.email} />
        <ProfileTextbox label="Date of Birth" input={user.dob} />
        <ProfileTextbox label="Nationality" input={user.nationality} />
        <ProfileTextbox label="Primary Language" input={user.primaryLanguage} />
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
          <TextInput style={styles.input} value={user.smoker} />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Has Pets?</Text>
          <TextInput style={styles.input} value={user.hasPets} />
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