import React from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Housing = ({ navigation }) => {
  const sections = [
    {
      id: 1,
      image: require('../../assets/agents/guide.jpg'),
      title: 'Recommended guide',
      description: 'Not sure where to start? Don\'t worry we have a guide for you!',
      route: 'Managing finances',
    },
    {
      id: 2,
      image: require('../../assets/banks/swap.jpg'),
      title: 'Switching to a UK bank account',
      description: 'Need to get set up with a British bank account? Check out our recommended options',
      route: 'UK banking',
    },
    {
      id: 3,
      image: require('../../assets/banks/globe.jpg'),
      title: 'Already have an existing bank account',
      description: 'Check to see if your bank provides options for swapping over to the UK',
      route: 'Existing account',
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
          <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 26, alignSelf: 'center' }}>
              Financing options
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

export default Housing;
