import React, {useState, useEffect} from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';

const FlatViewScreen = ({navigation}) => {

  const [flat, setFlat] = useState({});

  const route = useRoute();
  const { uuid } = route.params;

  const navigateTenancy = () => {
    navigation.navigate('Rentals');
  };

  const fetchData = async () => {
    const response = await axios.get('http://roomie3.herokuapp.com/api/v1/property?uuid=' + uuid);
    setFlat(response.data);
    navigation.setOptions({ title: response.data.location });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.flatContainer}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.imageContainer}>
              <FlatList
          data={flat.image_urls}
          keyExtractor={(item, index) => index.toString()}
          styles={styles.flatImage}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item }}
              style={styles.flatImage}
              resizeMode="cover"
            />
          )}
          horizontal
        />
        </View>
        <View style={styles.flatDetails}>
          <Text style={styles.flatTitle}>{flat.location}</Text>
          <Text style={styles.flatPrice}>£{flat.price}/month</Text>
          <Text style={styles.flatLocation}>{flat.city}</Text>
          <Text style={styles.flatDescription}>
            {flat.description}
          </Text>
          <Text style={styles.flatFeatures}>{flat.number_of_bedrooms} Bedrooms | {flat.number_of_toilets} Bathrooms</Text>
          <Text style={styles.flatFeatures}>Fully Furnished</Text>
          {/* Add more flat details as needed */}
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.bookViewingButton} onPress={navigateTenancy}>
        <Text style={styles.bookViewingButtonText}>Book Viewing</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  flatContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
  },
  imageContainer: {
    width: '100%',
    height: 300,
    paddingHorizontal: 16,
  },
  flatImage: {
    height: 280,
    width: 350,
    marginTop: 20,
    marginBottom: 20,
    marginRight: 10,
    borderRadius: 8,
  },
  flatDetails: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 16,
  },
  flatTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  flatPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#03c9a9',
    marginBottom: 12,
  },
  flatDescription: {
    fontSize: 16,
    color: 'black',
    marginBottom: 16,
  },
  flatLocation: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
  },
  flatFeatures: {
    fontSize: 14,
    color: '#888',
    marginBottom: 4,
  },
  bookViewingButton: {
    // flat ui dark blue
    backgroundColor: '#446cb3',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
  },
  bookViewingButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FlatViewScreen;
