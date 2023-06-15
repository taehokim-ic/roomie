import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking, TouchableOpacity } from 'react-native';

const AccomodationScreen = () => {
  const listings = [
    {
      id: 1,
      site: 'Rightmove',
      link: 'https://www.rightmove.co.uk/',
      description: 'Rightmove is primarily known as a property sales website, but it also offers rental listings, including apartments, houses, and other types of accommodation. It provides detailed descriptions, photos, and contact information for each listing.',
    },
    {
      id: 2,
      site: 'Zoopla',
      link: 'https://www.zoopla.co.uk/',
      description: ' Zoopla is another prominent property website in the UK that offers both sales and rental listings. It provides comprehensive descriptions, high-quality images, and additional information such as floor plans and local area insights.',
    },
    {
      id: 3,
      site: 'OpenRent',
      link: 'https://www.openrent.co.uk/',
      description: 'OpenRent is an online letting agent that connects tenants directly with landlords. It offers a wide range of rental properties, including houses, flats, and rooms, with detailed descriptions, photographs, and the ability to contact landlords easily.',
    },
    {
      id: 4,
      site: 'OnTheMarket',
      link: 'https://www.onthemarket.com/',
      description: 'OnTheMarket is a property portal that features a wide range of rental properties, including flats and apartments, throughout the UK. It provides detailed descriptions, high-quality photos, and the option to contact agents or landlords directly.',
    },
    {
      id: 5,
      site: 'Prime Location',
      link: 'https://www.primelocation.com/',
      description: 'PrimeLocation is a popular property website that showcases a variety of rental properties, including flats, houses, and new developments. It offers comprehensive property descriptions, professional photographs, and contact information for agents or landlords.',
    },
  ];

  const renderlistingCard = ({ id, site, link, description }) => {
    return (
      <View key={id} style={styles.card}>
        <TouchableOpacity onPress={() => Linking.openURL(link)}>
            <Text style={styles.city}>{site}</Text>
            <Text style={styles.description}>{description}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ScrollView>
        <View style={styles.infoContainer}>
        </View>
        <View style={styles.container}>
            {listings.map(renderlistingCard)}   
        </View>
    </ScrollView>
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
    color: 'blue',
    textDecorationLine: 'underline',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  info: {
    fontSize: 14,
    color: '#666',
    marginRight: -20,
  },
  infoContainer: {
    fontSize: 14,
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingHorizontal: 10,
  },
});

export default AccomodationScreen;
