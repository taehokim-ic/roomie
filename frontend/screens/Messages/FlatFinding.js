import React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import MatchingStatus from '../../components/MatchingStatus';

const FlatFinding = () => {

  const data = [
    { id: 1, image: require('../../assets/flatfinding/house.jpg'), text: 'Browse Flats' },
    { id: 2, image: require('../../assets/flatfinding/contact.jpg'), text: 'Contact agent' },
    { id: 3, image: require('../../assets/flatfinding/leaving.jpg'), text: 'Match not working?' },
    { id: 4, image: require('../../assets/flatfinding/found.jpg'), text: 'Found a flat' },
  ];

  const handleCardPress = (id) => {
    // Handle the press of each card uniquely based on its ID
    console.log(`Card ${id} pressed!`);
    // You can perform additional actions or navigate to a different screen
  };

  return (
    <View>
      <View style={oldStyles.container}>
        <MatchingStatus state={1}/>
        <View style={styles.container}>
          {data.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            onPress={() => handleCardPress(item.id)}
          >
            <Image source={item.image} style={styles.image} />
            <Text style={styles.text}>{item.text}</Text>
          </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const oldStyles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#1C5231',
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
    borderColor: '#FFFFFF',
    borderRadius: 20,
    aspectRatio: 1, // To maintain square shape
    backgroundColor: 'white',
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '85%',
    height: '85%',
    resizeMode: 'contain',
  },
  text: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0561f5'
  },
});

export default FlatFinding;
