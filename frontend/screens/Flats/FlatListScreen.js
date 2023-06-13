import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

const FlatListScreen = () => {
    const navigate = useNavigation();
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
      ]);


  const [showFilter, setShowFilter] = useState(false);
  const [selectedPreferences, setSelectedPreferences] = useState([]);

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
    console.log(item.title);
  };

  const handleFilterPress = () => {
    setShowFilter(!showFilter);
  };

  const handleDonePress = () => {
    setShowFilter(false);
  };

  const navigateToFlatView = () => {
    navigate.navigate('FlatViewScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Discover Flats</Text>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            placeholderTextColor="#888"
            // Implement your search logic
          />
          <TouchableOpacity style={styles.filterButton} onPress={handleFilterPress}>
            <Feather name="sliders" size={20} color="#555" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.submitButton} onPress={handleDonePress}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={flats}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatList}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
  header: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
    textAlign: 'left',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  searchInput: {
    flex: 1,
    height: 36,
    backgroundColor: '#f1f1f1',
    paddingHorizontal: 12,
    marginRight: 8,
    color: '#333',
    borderRadius: 4,
    paddingTop: 4,
    paddingBottom: 4,
  },
  filterButton: {
    padding: 10,
    backgroundColor: '#f1f1f1',
    borderRadius: 4,
  },
  submitButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: '#03c9a9',
    borderRadius: 4,
    marginLeft: 8,
  },
  submitButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  flatList: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  flatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#fff',
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
