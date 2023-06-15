import React from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = ({ navigation }) => {
  const sections = [
    {
      id: 1,
      image: require('../../assets/resources/bede-hall-bedroom-02.jpg'),
      title: 'Find Accommodation',
      description: 'Find the perfect place to live during your stay in London.',
      route: 'Accomodation',
    },
    {
      id: 2,
      image: require('../../assets/resources/Border-Force-Online-Test-UK-1.jpg'),
      title: 'Visa and Immigration',
      description: 'Get information about visas and immigration processes.',
      route: 'Visa and Immigration',
    },
    {
      id: 3,
      image: require('../../assets/resources/language.jpg'),
      title: 'Still struggling with English?',
      description: 'Here are some tools which can make it easier',
      route: 'Transport Links',
    },
    {
      id: 4,
      image: require('../../assets/resources/wallet.jpg'),
      title: 'Managing Finances',
      description: 'Learn about transportation options in the UK.',
      route: 'Transport Links',
    },
    {
      id: 5,
      image: require('../../assets/resources/transport-london.jpg'),
      title: 'Transportation Information',
      description: 'Learn about transportation options in the UK.',
      route: 'Transport Links',
    },
    {
      id: 6,
      image: require('../../assets/resources/support.jpg'),
      title: 'Local Support Network',
      description: 'Connect with local support networks and student associations.',
      route: 'Support Networks',
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
        <ScrollView style={{marginTop: 10}}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16, alignSelf: 'center' }}>
                Get help moving to London
            </Text>
            <View style={{ marginTop: 16 }}>
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

export default HomeScreen;
