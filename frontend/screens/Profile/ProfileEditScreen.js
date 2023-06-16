import React, { useState, useContext, Profiler } from 'react';
import { View, Text, Button, StyleSheet, StatusBar, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import UserContext from '../../context/UserContext';
import axios from 'axios';
import { generateUUID } from '../../context/uuid';

const ProfileEditScreen = () => {
  const navigation = useNavigation();
  const {user, setUser} = useContext(UserContext);

  const [nameValue, setNameValue] = useState(user.name);
  const [ageValue, setAgeValue] = useState(user.age.toString());
  const [contactNumberValue, setContactNumberValue] = useState(user.contact_number);
  const [emailValue, setEmailValue] = useState(user.email);
  const [dobValue, setDobValue] = useState(user.dob);
  const [nationalityValue, setNationalityValue] = useState(user.nationality);
  const [primaryLanguageValue, setPrimaryLanguageValue] = useState(user.primary_language);
  const [minBudgetValue, setMinBudgetValue] = useState(user.minBudget.toString());
  const [maxBudgetValue, setMaxBudgetValue] = useState(user.maxBudget.toString());
  const [preferredLocationValue, setPreferredLocationValue] = useState(user.preferredLocation);
  const [genderValue, setGenderValue] = useState(user.gender);
  const [smokingValue, setSmokingValue] = useState(user.smoking);
  const [hasPetsValue, setHasPetsValue] = useState(user.hasPets);

  const handleNameValue = (text) => {
    setNameValue(text);
  };

  const handleAgeValue = (text) => {
    setAgeValue(text);
  };

  const handleContactNumberValue = (text) => {
    setContactNumberValue(text);
  };

  const handleEmailValue = (text) => {
    setEmailValue(text);
  };

  const handleDobValue = (text) => {
    setDobValue(text);
  };

  const handleNationalityValue = (text) => {
    setNationalityValue(text);
  };

  const handlePrimaryLanguageValue = (text) => {
    setPrimaryLanguageValue(text);
  };

  const handleMinBudgetValue = (text) => {
    setMinBudgetValue(text);
  };

  const handleMaxBudgetValue = (text) => {
    setMaxBudgetValue(text);
  };

  const handlePreferredLocationValue = (text) => {
    setPreferredLocationValue(text);
  };

  const handleGenderValue = (text) => {
    setGenderValue(text);
  };

  const handleSmokingValue = (text) => {
    setSmokingValue(text);
  };

  const handleHasPetsValue = (text) => {
    setHasPetsValue(text);
  };

  const handleSave = () => {
    const updatedUser = {
      name: nameValue,
      email: emailValue,
      age: ageValue,
      dob: dobValue,
      nationality: nationalityValue,
      gender: genderValue,
      smoking: smokingValue,
      minBudget: minBudgetValue,
      maxBudget: maxBudgetValue,
      primary_language: primaryLanguageValue,
      contact_number: contactNumberValue
    };
    console.log(updatedUser);
    setUser(updatedUser);

    const uuid = generateUUID();

    const url = 'http://roomie3.herokuapp.com/api/v1/profile/' + uuid;
    
    axios.post(url, JSON.stringify(updatedUser), {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });

    navigation.navigate('DefaultProfile', { instantAnimation: true });
  };

  return (
    <ScrollView>
      <View>
        <StatusBar barStyle="dark-content" translucent={false} />
        <View style={styles.detailsContainer}>
          <View>
            <Text style={styles.subtitle}>Personal Details</Text>
          </View>
          <View style={styles.row}>
                <Text style={styles.label}>Name</Text>
                <TextInput value={nameValue} onChangeText={handleNameValue} />
          </View>
          <View style={styles.row}>
                <Text style={styles.label}>Age</Text>
                <TextInput value={ageValue} onChangeText={handleAgeValue} />
          </View>
          <View style={styles.row}>
                <Text style={styles.label}>Contact Number</Text>
                <TextInput value={contactNumberValue} onChangeText={handleContactNumberValue} />
          </View>
          <View style={styles.row}>
                <Text style={styles.label}>Email</Text>
                <TextInput value={emailValue} onChangeText={handleEmailValue} />
          </View>
          <View style={styles.row}>
                <Text style={styles.label}>Date of Birth</Text>
                <TextInput value={dobValue} onChangeText={handleDobValue} />
          </View>
          <View style={styles.row}>
                <Text style={styles.label}>Nationality</Text>
                <TextInput value={nationalityValue} onChangeText={handleNationalityValue} />
          </View>
          <View style={styles.row}>
                <Text style={styles.label}>Primary Language</Text>
                <TextInput value={primaryLanguageValue} onChangeText={handlePrimaryLanguageValue} />
          </View>
          <View style={styles.row}>
                <Text style={styles.label}>Minimum Budget</Text>
                <TextInput value={minBudgetValue} onChangeText={handleMinBudgetValue} />
          </View>
          <View style={styles.row}>
                <Text style={styles.label}>Maximum Budget</Text>
                <TextInput value={maxBudgetValue} onChangeText={handleMaxBudgetValue} />
          </View>
        </View>
        <View style={styles.detailsContainer}>
          <View>
            <Text style={styles.subtitle}>Preferences</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Location</Text>
            <TextInput style={styles.input} value={preferredLocationValue} onChangeText={handlePreferredLocationValue}  />
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Gender</Text>
            <TextInput style={styles.input} value={genderValue} onChangeText={handleGenderValue}  />
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Smoker?</Text>
            <TextInput style={styles.input} value={smokingValue} onChangeText={handleSmokingValue} />
          </View>
        </View>
        <View style={styles.saveRow}>
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
    marginLeft: 5,
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
  saveRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  detailsContainer: {
    backgroundColor: '#fff', // White background color
    padding: 16,
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 8,
    paddingTop: 20,
  },
});

export default ProfileEditScreen;