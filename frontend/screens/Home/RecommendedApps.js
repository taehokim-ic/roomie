import React from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const RecommendedApps = ({ navigation }) => {

  const openTFlWebsite = ({url}) => {
    Linking.openURL(url)
      .catch((err) => console.error('An error occurred', err));
  }

  const sections = [
    {
      id: 1,
      image: require('../../assets/tfl/citymapper.jpg'),
      title: 'Citymapper',
      description: 'Get a better understanding of the cost of transport in London',
      url: 'https://citymapper.com',
    },
    {
      id: 2,
      image: require('../../assets/tfl/googlemaps.jpg'),
      title: 'Google Maps',
      description: 'Download the official TFL oyster and contactless app to enhance your experience',
      url: 'https://tfl.gov.uk/fares/how-to-pay-and-where-to-buy-tickets-and-oyster/tfl-oyster-and-contactless-app#on-this-page-1',
    },
    {
      id: 3,
      image: require('../../assets/tfl/underground.jpg'),
      title: 'Transport for London Go',
      description: 'Explore the different types of transport services provided by TFL',
      url: 'https://tfl.gov.uk/maps_/tfl-go',
    },
    {
      id: 4,
      image: require('../../assets/tfl/fares.jpg'),
      title: 'TFL Oyster and Contact',
      description: 'Explore the different types of transport services provided by TFL',
      url: 'https://tfl.gov.ukhttps://tfl.gov.uk/fares/how-to-pay-and-where-to-buy-tickets-and-oyster/tfl-oyster-and-contactless-app',
    },
  ];

  const renderSection = (section) => {
    return (
      <TouchableOpacity
        key={section.id}
        style={styles.sectionCard}
        onPress={() => openTFlWebsite({url: section.url})}
      >
        <Image source={section.image} style={styles.sectionImage} />
        <View style={styles.sectionInfo}>
          <Text style={styles.sectionTitle}>{section.title}</Text>
          <Text style={styles.sectionDescription}>{section.description}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 30, alignSelf: 'center' }}>
                Make planning your journey's effortless
            </Text>
            <View>
                {sections.map((section) => renderSection(section))}
            </View>
        </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  sectionCard: {
    flexDirection: 'row',
    marginBottom: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
  },
  sectionImage: {
    width: 80,
    height: 80,
    borderRadius: 4,
    marginRight: 16,
  },
  sectionInfo: {
    flex: 1,
  },
  sectionTitle: {
    marginTop: 4,
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionDescription: {
    marginTop: 5,
    fontSize: 14,
    color: '#666',
  },
  gradient: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
  },
});

export default RecommendedApps;
