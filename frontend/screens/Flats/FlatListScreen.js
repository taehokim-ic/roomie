import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native';

const FlatListScreen = () => {
  const [flats, setFlats] = useState([
    {
      id: 1,
      title: 'Spacious Apartment in the City',
      rooms: 3,
      flatmates: 2,
      toilets: 2,
      location: 'New York',
      price: 2000,
      picture: 'https://example.com/flat1.jpg',
      propertyType: 'Apartment',
      description: 'A spacious apartment with great city views.',
      dateListed: '2023-06-01',
    },
    {
      id: 2,
      title: 'Cozy Studio near the Beach',
      rooms: 1,
      flatmates: 1,
      toilets: 1,
      location: 'Miami',
      price: 1500,
      picture: 'https://example.com/flat2.jpg',
      propertyType: 'Studio',
      description: 'A cozy studio just a few steps away from the beach.',
      dateListed: '2023-06-05',
    },
    // Add more flat dictionaries as needed
  ]);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleItemPress(item)} style={styles.flatItem}>
      <Image source={{ uri: item.picture }} style={styles.flatImage} />
      <View style={styles.flatDetails}>
        <Text style={styles.flatTitle}>{item.title}</Text>
        <Text style={styles.flatLocation}>{item.location}</Text>
        <Text style={styles.flatPrice}>${item.price}/month</Text>
      </View>
    </TouchableOpacity>
  );

  const handleItemPress = (item) => {
    // Handle the click event for a flat item
    console.log(item.title);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={flats}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  flatList: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  flatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    padding: 8,
  },
  flatImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  flatDetails: {
    flex: 1,
  },
  flatTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  flatLocation: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  flatPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
  },
});

export default FlatListScreen;
