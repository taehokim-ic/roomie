import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Image, ScrollView, Alert, PanResponder, Animated } from 'react-native';
import { Text, Card, Button } from '@rneui/themed'
import { useState } from 'react';

const UserProfileCard = ({ user, onNext }) => {
    const { name, age, bio } = user;
  
    return (
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
                <Button size="sm" type="clear" onPress={onNext}>
                    Save
                </Button>
                <Button size="sm" type="clear"onPress={onNext}> 
                    Skip
                </Button>
            </View>
        </Card>
    );
};

const HomeScreen = () => {
    
    const pan = useState(new Animated.ValueXY())[0];

    const panResponder = useState(
        PanResponder.create({
          onMoveShouldSetPanResponder: () => true,
          onPanResponderMove: Animated.event([
            null,
            { dx: pan.x, dy: pan.y }
          ], { useNativeDriver: false }),
          onPanResponderRelease: (_, gesture) => {
            if (gesture.dx > 120) {
              handleSkip();
            }
            Animated.spring(pan, { toValue: { x: 0, y: 0 } }).start();
          },
        })
      )[0];

    const cardStyle = {
        transform: [{ translateX: pan.x }, { translateY: pan.y }, { rotate: pan.x.interpolate({ inputRange: [-200, 0, 200], outputRange: ["-10deg", "0deg", "10deg"] }) }],
    };
    
    const [userProfiles, setUserProfiles] = useState([
        {
          name: 'John Doe',
          age: 25,
          bio: 'I am a software engineer passionate about React Native.',
          lookingFor: 'I am looking for a flatshare in London.',
          addInfo: 'I have a peanut allergy, so please bear that in mind. I\'m also a vegetarian, but I don\'t mind if you eat meat. I\'m also a big fan of K-pop, so if you are too, that\'s a bonus!',
          img: require('../../assets/users/user-1.jpg'),
        },
        {
          name: 'Jane Smith',
          age: 30,
          bio: 'I love traveling and exploring new places.',
          lookingFor: 'Looking to share a flat with someone in their 20s.',
          addInfo: 'I have a peanut allergy, so please bear that in mind. I\'m also a vegetarian, but I don\'t mind if you eat meat. I\'m also a big fan of K-pop, so if you are too, that\'s a bonus!',
          img: require('../../assets/users/user-2.jpg'),
        },
        {
            name: 'Rieko Smith',
            age: 25,
            bio: 'I am a software engineer passionate about React Native.',
            lookingFor: 'I am looking for a flatshare in London.',
            addInfo: 'I have a peanut allergy, so please bear that in mind. I\'m also a vegetarian, but I don\'t mind if you eat meat. I\'m also a big fan of K-pop, so if you are too, that\'s a bonus!',
            img: require('../../assets/users/user-3.jpg'),
        },
        {
            name: 'Diana Smith',
            age: 25,
            bio: 'I am a software engineer passionate about React Native.',
            lookingFor: 'I am looking for a flatshare in London.',
            addInfo: 'I have a peanut allergy, so please bear that in mind. I\'m also a vegetarian, but I don\'t mind if you eat meat. I\'m also a big fan of K-pop, so if you are too, that\'s a bonus!',
            img: require('../../assets/users/user-4.jpg'),
        },
    ]);
      
    const [currentIndex, setCurrentIndex] = useState(0);
      
    const handleSkip = () => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
    };
    
    const currentUser = userProfiles[currentIndex];

    return (
        <SafeAreaView>
            <Animated.ScrollView style={cardStyle} {...panResponder.panHandlers}>
                <UserProfileCard user={currentUser} onNext={handleSkip} />
            </Animated.ScrollView>
        </SafeAreaView>
    );
}

export default HomeScreen;