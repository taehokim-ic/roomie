import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfileEditScreen = () => {
  const navigation = useNavigation();

  const handleSave = () => {
    navigation.navigate('DefaultProfile', { instantAnimation: true });
  };
  return (
    <View>
      <StatusBar  barStyle="dark-content" translucent={false} />
      <View style={styles.row}>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} value='Jihoon W.' />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Age</Text>
        <TextInput style={styles.input} value='23' />
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
        <TextInput style={styles.input} value='10/05/2000' />
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
    </View>
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
    fontSize: 18,
    paddingTop: 38,
    fontWeight: 'bold',
    textAlign: 'left'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
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
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
});

export default ProfileEditScreen;