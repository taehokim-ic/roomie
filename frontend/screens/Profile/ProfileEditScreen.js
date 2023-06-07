import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfileEditScreen = () => {
  const navigation = useNavigation();

  const handleSave = () => {
    // Save to database
    console.log('Saved value:', inputValue);
    navigation.navigate('DefaultProfile', { instantAnimation: true });
  };

  const [inputValue, setInputValue] = useState('Jihoon W.');

  const handleInputChange = (text) => {
    setInputValue(text);
  };

  return (
    <ScrollView>
      <View>
        <StatusBar barStyle="dark-content" translucent={false} />
        <View>
          <Text style={styles.subtitle}>Personal Details</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Name</Text>
          <TextInput style={styles.input} value={inputValue} onChangeText={handleInputChange} />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Age</Text>
          <TextInput style={styles.input} value='22' />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Contact Number</Text>
          <TextInput style={styles.input} value='+44 774078517' />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Email Address</Text>
          <TextInput style={styles.input} value='example@example.com' />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Date of Birth</Text>
          <TextInput style={styles.input} value='10/05/2001' />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Location</Text>
          <TextInput style={styles.input} value='London' />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Primary Language</Text>
          <TextInput style={styles.input} value='Korean' />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Budget</Text>
          <TextInput style={styles.input} value='£1400-1800pcm' />
        </View>

        <View>
          <Text style={styles.subtitle}>Preferences</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Location</Text>
          <TextInput style={styles.input} value='London' />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Gender</Text>
          <TextInput style={styles.input} value='Male' />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Smoker?</Text>
          <TextInput style={styles.input} value='No' />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Has Pets?</Text>
          <TextInput style={styles.input} value='No preference' />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    color: '#049372',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
  },
  title: {
    fontSize: 22,
    paddingTop: 38,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'left',
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  cancelButtonContainer: {
    paddingTop: 40,
    marginLeft: 20,
  },
  editButtonContainer: {
    paddingTop: 40,
    marginRight: 20,
  },
  editButton: {
    fontSize: 16,
    color: '#007AFF',
  },
  cancelButton: {
    fontSize: 16,
    color: '#007AFF',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
});

export default ProfileEditScreen;