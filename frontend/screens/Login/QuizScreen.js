import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const QuizScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = () => {
    // Process the form data here (e.g., validation, API calls, etc.)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Age:', age);

    // Reset form fields
    setName('');
    setEmail('');
    setAge('');

    navigation.navigate('UserApp');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
      Form</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
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
    fontSize: 24,
    color: '#fff', // White text color
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff', // White input background color
    marginBottom: 8,
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
