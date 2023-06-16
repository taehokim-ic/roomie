import React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Image, PanResponder } from 'react-native';
import MatchingStatus from '../../components/MatchingStatus';
import { useNavigation } from '@react-navigation/native';
import FlatResources from './FlatResources';

const FlatFinding = () => {

  const navigation = useNavigation();

  const data = [
    { id: 1, image: require('../../assets/flatfinding/house.jpg'), text: 'Explore housing' },
    { id: 2, image: require('../../assets/flatfinding/contact.jpg'), text: 'Need help' },
    { id: 3, image: require('../../assets/flatfinding/leaving.jpg'), text: 'Match not working?' },
    { id: 4, image: require('../../assets/flatfinding/found.jpg'), text: 'Found a flat' },
  ];

  const handleCardPress = (id) => {
    // Handle the press of each card uniquely based on its ID
    console.log(`Card ${id} pressed!`);
    // You can perform additional actions or navigate to a different screen
  };

  const panResponder = React.useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (event, gestureState) => {
        // Return false to allow other gestures to handle the touch event first
        return true;
      },
      onPanResponderEnd: (event, gestureState) => {
        if (gestureState.dx < -50 && gestureState.vx < -0.5) {
          // Swipe right detected
          handleChatSwipe();
        }
      },
    })
  ).current;

  const handleChatSwipe = () => {
    navigation.navigate('ChatRoom');
  }

  return (
    <View>
      <View style={oldStyles.container} {...panResponder.panHandlers} >
        <MatchingStatus state={1}/>
        <FlatResources navigation={navigation}/>
      </View>
    </View>
  );
};

const oldStyles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'white',
  },
});

const styles = StyleSheet.create({
  container: {
    top: '20%',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 16,
  },
  card: {
    width: '48%',
    height: '48%',
    borderColor: '#1C5231',
    borderWidth: 2,
    borderRadius: 20,
    aspectRatio: 1, // To maintain square shape
    backgroundColor: '#ffffff',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#333333',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  image: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
  text: {
    marginBottom: 6,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1C5231'
  },
});

export default FlatFinding;
