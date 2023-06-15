import React from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Accomodation = ({ navigation }) => {

  const openTFlWebsite = ({url}) => {
    Linking.openURL(url)
      .catch((err) => console.error('An error occurred', err));
  }

  const sections = [
    {
      id: 1,
      image: require('../../assets/agents/rightmove.jpg'),
      title: 'Rightmove',
      description: 'The largest and most popular online real estate platform in the UK, offering a wide range of residential and commercial properties for sale or rent nationwide.',
      url: 'https://www.rightmove.co.uk',
    },
    {
      id: 2,
      image: require('../../assets/agents/zoopla.jpg'),
      title: 'Zoopla',
      description: 'Zoopla is a leading online real estate platform in the UK, providing a comprehensive range of property listings, tools, and information for buyers, sellers, and renters.',
      url: 'https://www.zoopla.co.uk',
    },
    {
      id: 3,
      image: require('../../assets/agents/onthemarket.jpg'),
      title: 'OnTheMarket',
      description: 'OnTheMarket is a consortium-owned property portal in the UK that offers a diverse range of residential and commercial listings.',
      url: 'https://www.onthemarket.com',
    },
    {
      id: 4,
      image: require('../../assets/agents/open_rent.jpg'),
      title: 'OpenRent',
      description: 'OpenRent is an online platform that connects landlords and tenants directly, offering a streamlined rental process without the need for traditional letting agents.',
      url: 'https://www.openrent.co.uk',
    },
    {
      id: 5,
      image: require('../../assets/agents/prime_location.jpg'),
      title: 'Prime Location',
      description: 'PrimeLocation is a premier online platform showcasing an exclusive collection of high-end and luxury properties throughout the UK.',
      url: 'https://www.primelocation.com/',
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
                Best online real estate agents
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
    marginTop: 15,
    marginBottom:10,
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

export default Accomodation;
