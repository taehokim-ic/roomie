import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const GearIconButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.iconContainer} onPress={onPress}>
      <FontAwesome name="gear" size={26} color="black" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    marginTop: 11,
    marginLeft: 316,
  },
});

export default GearIconButton;
