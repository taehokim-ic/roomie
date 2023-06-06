import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <Text style={styles.title}>Profile</Text>
    <View style={styles.container}>
      <Image
        source={require('../../assets/profile-picture.png')}
        style={styles.profileImage}
      />
      <Text style={styles.name}>John Doe</Text>
      <Text style={styles.bio}>24</Text>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    paddingLeft: 20,
    paddingTop: 20,
    fontWeight: 'bold',
    textAlign: 'left'
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 16,
  },
});
