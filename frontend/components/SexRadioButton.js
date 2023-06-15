import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const RadioButtonExample = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <View>
      <Text style={styles.label}>What is your sex?</Text>
      <View style={styles.radioButtonContainer}>
        <TouchableOpacity
          style={[styles.radioButton, selectedOption === 'male' && styles.selectedButton]}
          onPress={() => handleOptionSelect('male')}
        >
          <Text style={[styles.radioButtonLabel, selectedOption === 'male' && styles.selectedLabel]}>
            Male
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.radioButton, selectedOption === 'female' && styles.selectedButton]}
          onPress={() => handleOptionSelect('female')}
        >
          <Text style={[styles.radioButtonLabel, selectedOption === 'female' && styles.selectedLabel]}>
            Female
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: 'white',
    marginBottom: 10,
  },
  radioButtonContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    marginRight: 10,
  },
  selectedButton: {
    backgroundColor: 'green',
  },
  radioButtonLabel: {
    color: 'black',
  },
  selectedLabel: {
    color: 'white',
  },
  selectedOption: {
    color: 'white',
  },
});

export default RadioButtonExample;