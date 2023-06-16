import React from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Banking = ({ navigation }) => {

  const openTFlWebsite = ({url}) => {
    Linking.openURL(url)
      .catch((err) => console.error('An error occurred', err));
  }

  const sections = [
    {
      id: 1,
      image: require('../../assets/banks/barclays.jpg'),
      title: 'Barclays',
      description: 'A reputable and globally recognized British bank offering comprehensive financial solutions',
      url: 'https://www.barclays.co.uk/current-accounts/bank-account/',
    },
    {
      id: 2,
      image: require('../../assets/banks/natwest.jpg'),
      title: 'NatWest',
      description: 'Trusted British bank, offering diverse financial services nationally and internationally',
      url: 'https://www.natwest.com',
    },
    {
      id: 3,
      image: require('../../assets/banks/lloydsx.jpg'),
      title: 'Lloyds',
      description: 'A trusted British bank with a wide range of financial services for customers in the UK and abroad',
      url: 'https://www.lloydsbank.com',
    },
    {
      id: 4,
      image: require('../../assets/banks/rbsx.jpg'),
      title: 'RBS',
      description: 'A respected British banking institution providing financial services to customers',
      url: 'https://www.rbs.co.uk',
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
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 30, alignSelf: 'center', textAlign: 'center' }}>
              Don't have a UK bank account? Apply here
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

export default Banking;
