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
      route: 'Housing options',
    },
    {
      id: 2,
      image: require('../../assets/flatfinding/house.jpg'),
      title: 'Best online real estate agents',
      description: 'Our handpicked selection of the best online real estate agents',
      route: 'Accomodation',
    },
    {
      id: 3,
      image: require('../../assets/resources/bed.jpg'),
      title: 'Temporary housing solutions',
      description: 'Can\'t find anything? Don\'t worry! We have a list of affordable options till you get up on your feet',
      route: 'Temporary housing solutions',
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
              Best housing options tailored for you
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
