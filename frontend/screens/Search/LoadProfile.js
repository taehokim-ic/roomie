import React from 'react';
import { View, TouchableOpacity, StyleSheet, StatusBar, TextInput, ScrollView, SafeAreaView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text, Card, Button } from '@rneui/themed'


const LoadProfile = () => {
  const navigation = useNavigation();

  const user = {
    name: 'Jihoon W.',
    age: 22,
    number: '+44 7705707370',
    email: 'jihoon.w123@gmail.com',
    dob: '10.02.2001',
    bio: 'I have finished my time at the military in South Korea and want to do an English-learning course in London.',
    lookingFor: 'I am looking for a flatshare in London.',
    addInfo: 'I have a peanut allergy, so please bear that in mind. I\'m also a vegetarian, but I don\'t mind if you eat meat. I\'m also a big fan of K-pop, so if you are too, that\'s a bonus!',
    img: require('../../assets/profile-picture.png'),
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Card>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Text h4>{user.name}</Text>
          </View>
          <Image 
              source={user.img} 
              style={{width: 200, height: 200, borderRadius: 200/ 2, alignSelf: 'center', marginTop: 20, marginBottom: 20}}
          />
          <Card>
              <Card.Title>Bio</Card.Title>
              <Text>{user.bio}</Text>
          </Card>
          <Card>
              <Card.Title>Who am I looking for?</Card.Title>
              <Text>{user.lookingFor}</Text>
          </Card>
          <Card>
              <Card.Title>Additional information</Card.Title>
              <Text>{user.addInfo}</Text>
          </Card>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Button size="sm" type="clear">
                  Save
              </Button>
              <Button size="sm" type="clear"> 
                  Skip
              </Button>
          </View>
        </Card>
      </ScrollView>
    </SafeAreaView>
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

export default LoadProfile;