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

  const truncateText = (text) => {
    if (!text) return;
    const maxLength = 24;
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...'; // Append ellipsis if text exceeds maxLength
    }
    return text;
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
          source={{uri: user.picture_url}}
          style={styles.profileImage}
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.bio} numberOfLines={1} ellipsizeMode="tail">{truncateText(user.institution)}</Text>
          <TouchableOpacity style={styles.buttonContainer2} onPress={handleView}>
              <Text style={styles.editButton2}>View Public Profile</Text>
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
    paddingTop: 10,
    marginRight: 20,
  },
  buttonContainer2: {
    backgroundColor: '#027148',
    borderRadius: 10,
    width: 140,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    marginTop: 10,
  },
  editButton: {
    fontSize: 16,
    color: '#007AFF',
  },
  editButton2: {
    fontSize: 14,
    color: '#fff',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 16,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 8,
  },
  title: {
    fontSize: 32,
    paddingLeft: 30,
    paddingTop: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 16,
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
    width: 120,
    height: 120,
    borderRadius: 75,
    marginRight: 20,
    marginLeft: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 14,
    color: '#888888',
    flexWrap: 'wrap',
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
