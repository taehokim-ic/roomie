import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const handleClick = () => {
    navigation.navigate('ProfileEdit', { instantAnimation: true });
  };

  const user = {
    name: 'Jihoon W.',
    age: 22,
    number: '+44 7705707370',
    email: 'jihoon.w123@gmail.com',
    dob: '10.02.2001',
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar  barStyle="dark-content" translucent={false} />
      <View style={styles.header}>
          <Text style={styles.title}>Profile</Text>
          <TouchableOpacity style={styles.editButtonContainer} onPress={handleClick}>
            <Text style={styles.editButton}>Edit</Text>
          </TouchableOpacity>
      </View>
    <View style={styles.container}>
      <Image
        source={require('../../assets/profile-picture.png')}
        style={styles.profileImage}
      />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.bio}>{user.age}</Text>
      </View>
    </View>
    <View>
      <Text style={styles.subtitle}>Personal Details</Text>
        <View style={styles.fieldContainer}>
          <Text style={styles.field}>Contact Number    {user.number}</Text>
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.field}>Email Address         {user.email}</Text>
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.field}>Date of Birth           {user.dob}</Text>
        </View>
    </View>
    <View>
      <Text style={styles.subtitle}>Legal</Text>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  editButtonContainer: {
    paddingTop: 20,
    marginRight: 20,
  },
  editButton: {
    fontSize: 16,
    color: '#007AFF',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    paddingLeft: 30,
    paddingTop: 20,
    fontWeight: 'bold',
    textAlign: 'left'
  },
  subtitle: {
    fontSize: 20,
    paddingLeft: 30,
    paddingTop: 20,
    paddingBottom: 20,
    fontWeight: 'bold',
    textAlign: 'left'
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginRight: 30,
    marginLeft: 20,
    marginBottom: 15,
    marginTop: 25
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 16,
  },
  input: {
    padding: 8,
    marginBottom: 16,
  },
  field: {
    marginRight: 12,
    fontSize: 15,
    marginLeft: 49,
    marginBottom: 10,
    marginTop: 10,
  },
  fieldContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
  }
});

export default ProfileScreen;