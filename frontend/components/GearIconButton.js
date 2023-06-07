import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const GearIconButton = ({ onPress, color }) => {
  return (
    <TouchableOpacity style={styles.iconContainer} onPress={onPress}>
      <FontAwesome name="gear" size={26} color={color} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    position: 'absolute',
    marginTop: 61,
    marginLeft: 316,
  },
});

export default GearIconButton;
