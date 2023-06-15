import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar, Button, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import UserContext from '../../context/UserContext';

export default ProfileScreen = () => {
  const navigation = useNavigation();

  const handleEdit = () => {
    navigation.navigate('ProfileEdit', { instantAnimation: true });
  };

  const handleView = () => {
    navigation.navigate('ProfileView', { instantAnimation: true });
  };

  const {user, setUser} = useContext(UserContext);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <StatusBar  barStyle="dark-content" translucent={false} />
        <View style={styles.header}>
            <Text style={styles.title}>Profile</Text>
            <TouchableOpacity style={styles.buttonContainer} onPress={handleEdit}>
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
          <Text style={styles.bio}>Age: {user.age}</Text>
          <TouchableOpacity style={styles.buttonContainer} onPress={handleView}>
              <Text style={styles.editButton}>View</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.subtitle}>Personal Details</Text>
        <Text style={styles.field}>Contact Number    {user.contact_number}</Text>
        <Text style={styles.field}>Email Address         {user.email}</Text>
        <Text style={styles.field}>Date of Birth           {user.dob}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.subtitle}>Legal</Text>
        <Text style={styles.field}>Privacy Policy</Text>
        <Text style={styles.field}>Terms of Service</Text>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonContainer: {
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
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 10,
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
    marginLeft: 15,
    marginBottom: 10,
    marginTop: 10,
  },
  fieldContainer: {
    borderWidth: 0.75,
    borderColor: '#ccc',
  },
  detailsContainer: {
    backgroundColor: '#fff', // White background color
    padding: 16,
    marginBottom: 16,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 8,
  },
});
