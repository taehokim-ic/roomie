import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CityGuideScreen = () => {
  const cityGuides = [
    {
      id: 1,
      city: 'London',
      description: 'Explore the vibrant capital city of the UK, known for its iconic landmarks, museums, and multicultural atmosphere.',
    },
    {
      id: 2,
      city: 'Manchester',
      description: 'Discover the lively city of Manchester, famous for its music scene, football clubs, and cultural attractions.',
    },
    {
      id: 3,
      city: 'Birmingham',
      description: 'Immerse yourself in Birmingham, a city known for its rich industrial heritage, shopping centers, and diverse culinary scene.',
    },
    {
      id: 4,
      city: 'Edinburgh',
      description: 'Experience the historic charm of Edinburgh, the capital of Scotland, with its stunning architecture, festivals, and picturesque landscapes.',
    },
    {
      id: 5,
      city: 'Glasgow',
      description: 'Visit Glasgow, a vibrant Scottish city offering a blend of culture, art, music, and a friendly atmosphere.',
    },
  ];

  const renderCityGuideCard = ({ id, city, description }) => {
    return (
      <View key={id} style={styles.card}>
        <Text style={styles.city}>{city}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>City Guides</Text>
      {cityGuides.map(renderCityGuideCard)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  city: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});

export default CityGuideScreen;
