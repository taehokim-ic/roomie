import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfileViewScreen = () => {
  const navigation = useNavigation();

  const user = {
    name: 'Jihoon W.',
    age: 22,
    number: '+44 7705707370',
    email: 'jihoon.w123@gmail.com',
    dob: '10.02.2001',
  }

  return (
    <View style={styles.container}>
      <Text>VIEWING THE PROFILE</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    marginLeft: 20,
    marginBottom: 40,
    marginRight: 20,
  },
});

export default ProfileViewScreen;