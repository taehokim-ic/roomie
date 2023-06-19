import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const QuestionMarkButton = ({ onPress }) => {

  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Icon name="question-circle" style={styles.icon} size={19} />
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
    color: '#363535',
  },
});

export default QuestionMarkButton;
