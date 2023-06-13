import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';

const FlatViewScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: 'https://example.com/flat-image.jpg' }}
        style={styles.flatImage}
        resizeMode="cover"
      />
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
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  flatImage: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    borderRadius: 8,
  },
  flatDetails: {
    marginBottom: 20,
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
});

export default FlatViewScreen;
