import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';

const FlatViewScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <ScrollView contentContainerStyle={styles.imageContainer} horizontal>
          <Image
            source={{ uri: 'https://media.rightmove.co.uk/49k/48934/131846453/48934_SLH190093_IMG_00_0000.jpeg' }}
            style={styles.flatImage}
            resizeMode="cover"
          />
          <Image
            source={{ uri: 'https://media.rightmove.co.uk/49k/48934/131846453/48934_SLH190093_IMG_01_0000.jpeg' }}
            style={styles.flatImage}
            resizeMode="cover"
          />
          <Image
            source={{ uri: 'https://media.rightmove.co.uk/49k/48934/131846453/48934_SLH190093_IMG_02_0000.jpeg' }}
            style={styles.flatImage}
            resizeMode="cover"
          />
          {/* Add more images to the gallery */}
        </ScrollView>
        <View style={styles.flatDetails}>
          <Text style={styles.flatTitle}>Modern Flat in City Center</Text>
          <Text style={styles.flatPrice}>$1200/month</Text>
          <Text style={styles.flatDescription}>
            Spacious and well-furnished flat located in the heart of the city. Close to all amenities and public transportation. Ideal for young professionals or students.
          </Text>
          <Text style={styles.flatLocation}>City Center, New York</Text>
          <Text style={styles.flatFeatures}>3 Bedrooms | 2 Bathrooms</Text>
          <Text style={styles.flatFeatures}>Fully Furnished | Balcony</Text>
          {/* Add more flat details as needed */}
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.bookViewingButton}>
        <Text style={styles.bookViewingButtonText}>Book Viewing</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
  },
  imageContainer: {
    height: 300,
    paddingHorizontal: 16,
  },
  flatImage: {
    height: 300,
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
    color: '#555',
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
    backgroundColor: '#1C5231',
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
