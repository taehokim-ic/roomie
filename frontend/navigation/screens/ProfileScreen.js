import * as React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen({navigation}) {
    const user = {
        url: 'https://avatars.githubusercontent.com/u/1024025?v=4',
        name: 'John Doe',
        username: 'johndoe',
        bio: 'Frontend Developer passionate about React',
        location: 'New York, USA',
        website: 'https://example.com',
    };

    return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.container}>
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.username}>@{user.username}</Text>
      <Text style={styles.bio}>{user.bio}</Text>
      <Text style={styles.location}>Location: {user.location}</Text>
      <Text
        style={styles.website}
        onPress={() => Linking.openURL(user.website)}
      >
        Visit Website
      </Text>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  username: {
    fontSize: 18,
    marginBottom: 8,
  },
  bio: {
    fontSize: 16,
    marginBottom: 8,
  },
  location: {
    fontSize: 16,
    marginBottom: 8,
  },
  website: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
