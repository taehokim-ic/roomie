import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const GearIconButton = () => {
  const [color, setColor] = useState('black');

  const handlePress = () => {
    setColor(prevColor => prevColor === 'black' ? 'red' : 'black');
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Ionicons name="ios-settings" size={32} color={color} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
  },
});

export default GearIconButton;
