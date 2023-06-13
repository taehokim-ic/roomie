import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, ScrollView, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import axios from 'axios';

const FlatListScreen = ({ navigation }) => {
  const [showFilterCard, setShowFilterCard] = useState(false);
  const [flats, setFlats] = useState([]);

  const handleFilterButtonPress = () => {
    setShowFilterCard(!showFilterCard);
  };

  const handleItemPress = (item) => {
    navigation.navigate('FlatView', { uuid: item.uuid });
  };

  const fetchFlats = async () => {
    const response = await axios.get('http://roomie3.herokuapp.com/api/v1/properties');
    setFlats(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    fetchFlats();
  }, []);

  const renderFilterCard = () => {
    if (!showFilterCard) return null;

    return (
      <View style={styles.filterCard}>
        <Text style={styles.filterCardTitle}>Filter Options</Text>
        <View style={styles.filterOption}>
          <Text style={styles.filterOptionLabel}>Location:</Text>
        </View>
        <View style={styles.filterOption}>
          <Text style={styles.filterOptionLabel}>No of bedrooms:</Text>
        </View>
        <View style={styles.filterOption}>
          <Text style={styles.filterOptionLabel}>Price:</Text>
        </View>
      </View>
    );
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleItemPress(item)} style={styles.flatItem}>
      <Image source={{ uri: item.image_url }} style={styles.flatImage} />
      <View style={styles.flatDetails}>
        <Text style={styles.flatTitle}>{item.location}</Text>
        <Text style={styles.flatLocation}>{item.city}</Text>
        <Text style={styles.flatBedrooms}>{item.number_of_bedrooms.toString()} bedrooms</Text>
        <Text style={styles.flatPrice}>£{item.price.toString()}/month</Text>
      </View>
    </TouchableOpacity>
  );
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Discover Flats</Text>
        <View style={styles.searchContainer}>
          <TextInput style={styles.searchInput} placeholder="Search..." placeholderTextColor="#555" />
          <TouchableOpacity style={styles.filterButton} onPress={handleFilterButtonPress}>
            <Feather name="sliders" size={20} color="#555" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.flatListContainer}>
      <FlatList
        data={flats}
        renderItem={renderItem}
        keyExtractor={item => item.uuid.toString()}
        contentContainerStyle={styles.flatList}
      />
      </View>
      {renderFilterCard()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#fff',
  },
  flatListContainer: {
    flex: 1,
    marginBottom: -33,
    backgroundColor: '#f1f1f1',
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
    backgroundColor: '#f1f1f1',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  flatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 14,
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
  filterCard: {
    backgroundColor: '#fff',
    padding: 16,
    marginTop: 16,
    borderRadius: 8,
    elevation: 4,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  filterCardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  filterSection: {
    marginBottom: 16,
  },
  filterSectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  applyFilterButton: {
    backgroundColor: '#007bff',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  applyFilterButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});


export default FlatListScreen;
