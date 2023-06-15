import React from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const TFL = ({ navigation }) => {
  const sections = [
    {
      id: 1,
      image: require('../../assets/resources/bede-hall-bedroom-02.jpg'),
      title: 'Transport for London Services',
      description: 'Explore the most popular service for transport in London',
      route: 'TFL',
    },
    {
      id: 2,
      image: require('../../assets/resources/Border-Force-Online-Test-UK-1.jpg'),
      title: 'Fares',
      description: 'Explore London\'s cycling scheme, with over 780 docking stations.',
      route: 'Visa and Immigration',
    },
    {
      id: 3,
      image: require('../../assets/resources/guide.jpg'),
      title: 'Download the app!',
      description: 'Download the official TFL app and begin exploring your ',
      route: 'City Guides',
    },
  ];

  const renderSection = (section) => {
    return (
      <TouchableOpacity
        key={section.id}
        style={styles.sectionCard}
        onPress={() => navigation.navigate(section.route)}
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
    paddingTop: 16,
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

export default TFL;
