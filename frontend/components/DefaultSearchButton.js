import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

const DefaultSearchButton = ({ title, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <View style={styles.leftIconContainer}>
        <AntDesign name="search1" size={24} color="black" />
      </View>
      <Text style={styles.buttonText}>{title}</Text>
      <View style={styles.rightIconContainer}>
        <FontAwesome name="gear" size={24} color="black" />
      </View>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 50,
  },
  buttonContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
    height: 50,
    width: 320,
    borderColor: '#000000',
    borderWidth: 0.5,
  },
  leftIconContainer: {},
  rightIconContainer: {},
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default DefaultSearchButton;
