import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const ApplyFiltersButton = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonText}>Apply Filters</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#1C5231',
    position: 'absolute',
    bottom: -500, // Adjust this value to set the desired distance from the bottom
    left: 45,
    width: 300,
    height: 45,
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ApplyFiltersButton;
