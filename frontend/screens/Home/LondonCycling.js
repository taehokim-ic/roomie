import React from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LondonCycling = ({ navigation }) => {

  const openTFlWebsite = ({url}) => {
    Linking.openURL(url)
      .catch((err) => console.error('An error occurred', err));
  }

  const sections = [
    {
      id: 1,
      image: require('../../assets/tfl/santander.jpg'),
      title: 'Santander Bikes',
      description: 'Santander Bikes offer over 700 docking stations with affordable options',
      url: 'https://www.santander.co.uk/personal/support/understanding-our-services/santander-cycles',
    },
    {
      id: 2,
      image: require('../../assets/tfl/lime.jpg'),
      title: 'Lime Bikes',
      description: 'Ride green with Lime bikes',
      url: 'https://www.li.me/en-gb/locations/london',
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
              Rental cycle providers
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

export default LondonCycling;
