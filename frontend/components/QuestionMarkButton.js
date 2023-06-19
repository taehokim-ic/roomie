import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const QuestionMarkButton = ({ onPress }) => {

  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Icon name="question-circle" style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    borderColor: 'black',
    borderRadius: 20,
    position: 'absolute',
    right: 200,
  },
  icon: {
    fontSize: 22,
    color: '#1C5231',
  },
});

export default QuestionMarkButton;
