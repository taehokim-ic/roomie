import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const QuizScreen = ({ navigation }) => {
  const [number, setNumber] = useState('');
  const [dob, setDob] = useState('');
  const [nationality, setNationality] = useState('');
  const [language, setLanguage] = useState('');
  const [minBudget, setMinBudget] = useState('');
  const [maxBudget, setMaxBudget] = useState('');
  const [institution, setInstitution] = useState('');
  const [sex, setSex] = useState('');
  const [smoker, setSmoker] = useState('');
  const [pets, setPets] = useState('');


  const handleSubmit = () => {
    // Process the form data here (e.g., validation, API calls, etc.)
    
    // Reset form fields
    setNumber('');
    setDob('');
    setNationality('');
    setLanguage('');
    setMinBudget('');
    setMaxBudget('');
    setInstitution('');
    setSex('');
    setSmoker('');
    setPets('');

    navigation.navigate('UserApp');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>About Me</Text>
        <Text style={styles.tagline}>Fill out information about yourself to help people find you!</Text>

        <View>
          <Text style={styles.question}>What is your contact number?</Text>
          <TextInput
            style={styles.input}
            placeholder="Contact Number"
            value={number}
            onChangeText={setNumber}
            keyboardType="numeric"
          />
        </View>

        <Text style={styles.question}>When is your date of birth?</Text>
        <TextInput
          style={styles.input}
          placeholder="Date of Birth (DDMMYYYY)"
          value={dob}
          onChangeText={setDob}
          keyboardType="numeric"
        />

        <Text style={styles.question}>What is your nationality?</Text>
        <TextInput
          style={styles.input}
          placeholder="Nationality"
          value={nationality}
          onChangeText={setNationality}
        />

        <Text style={styles.question}>What is your primary language?</Text>
        <TextInput  
          style={styles.input}
          placeholder="Primary Language"
          value={language}
          onChangeText={setLanguage}
        />

        <Text style={styles.question}>What is your minimum budget for a flat per month?</Text>
        <TextInput
          style={styles.input}
          placeholder="Minimum budget (£)"
          value={minBudget}
          onChangeText={setMinBudget}
          keyboardType="numeric"
        />

        <Text style={styles.question}>What is your maximum budget for a flat per month?</Text>
        <TextInput
          style={styles.input}
          placeholder="Maximum budget (£)"
          value={maxBudget}
          onChangeText={setMaxBudget}
          keyboardType="numeric"
        />

        <Text style={styles.question}>Which institution will you be studying at?</Text>
        <TextInput
          style={styles.input}
          placeholder="Institution name"
          value={institution}
          onChangeText={setInstitution}
        />

        <Text style={styles.question}>What is your sex?</Text>
        <TextInput
          style={styles.input}
          placeholder="Male/Female"
          value={sex}
          onChangeText={setSex}
        />

        <Text style={styles.question}>Are you a smoker?</Text>
        <TextInput
          style={styles.input}
          placeholder="Yes/No"
          value={smoker}
          onChangeText={setSmoker}
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#004d00', // Dark green background color
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    marginTop:48,
    fontSize: 24,
    color: '#fff', // White text color
    marginBottom: 32,
    textAlign: 'center',
  },
  tagline: {
    fontSize: 18,
    color: '#fff', // White text color
    marginBottom: 24,
    textAlign: 'center',
  },
  question: {
    fontSize: 15,
    color: '#fff', // White text color
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#fff', // White input background color
    marginBottom: 18,
    padding: 8,
    borderRadius: 4,
  },
  button: {
    backgroundColor: '#006600', // Dark green button background color
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff', // White button text color
    fontSize: 16,
  },
});

export default QuizScreen;
