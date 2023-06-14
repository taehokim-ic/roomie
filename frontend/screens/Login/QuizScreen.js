import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import SexRadioButton from '../../components/SexRadioButton';
import YesOrNoRadioButton from '../../components/YesOrNoRadioButton';

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

        <Text style={styles.question}>What institution will you be studying at?</Text>
        <TextInput  
          style={styles.input}
          placeholder="Institution Name"
          value={language}
          onChangeText={setLanguage}
        />

        <Text style={styles.question}>What is your budget for a flat per month?</Text>
        <View style={styles.budgetContainer}>
          <TextInput
            style={styles.numinput}
            placeholder="Min. (£)"
            value={minBudget}
            onChangeText={setMinBudget}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.numinput}
            placeholder="Max. (£)"
            value={maxBudget}
            onChangeText={setMaxBudget}
            keyboardType="numeric"
          />
        </View>

        <SexRadioButton />

        <YesOrNoRadioButton />

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
    marginBottom: 12,
    textAlign: 'center',
  },
  tagline: {
    fontSize: 16,
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
  numinput: {
    backgroundColor: '#fff', // White input background color
    marginBottom: 18,
    padding: 8,
    borderRadius: 4,
    width: 100,
  },
  button: {
    backgroundColor: '#006600', // Dark green button background color
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 100,
  },
  buttonText: {
    color: '#fff', // White button text color
    fontSize: 16,
  },
  budgetContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 140,
  },
});

export default QuizScreen;
