import React from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const InternationalBanking = ({ navigation }) => {

  const openTFlWebsite = ({url}) => {
    Linking.openURL(url)
      .catch((err) => console.error('An error occurred', err));
  }

  const sections = [
    {
      id: 1,
      image: require('../../assets/banks/hsbc.jpg'),
      title: 'HSBC',
      description: 'A globally recognized British bank providing extensive financial services to customers around the world',
      url: 'https://www.hsbc.co.uk/international/moving-abroad/',
    },
    {
      id: 2,
      image: require('../../assets/banks/santan.jpg'),
      title: 'Santander UK',
      description: 'A reputable British bank offering a wide array of financial services to customers in the UK and internationally',
      url: 'https://www.santander.co.uk/personal/support/current-accounts/switching',
    },
    {
      id: 3,
      image: require('../../assets/banks/monzo.jpg'),
      title: 'Monzo',
      description: 'A popular digital bank, providing modern banking solutions to customers in the UK',
      url: 'https://monzo.com',
    },
    {
      id: 4,
      image: require('../../assets/banks/revolut.jpg'),
      title: 'Revolut',
      description: 'A leading digital banking platform, offering financial services and features to customers globally',
      url: 'https://www.revolut.com/cards/',
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
              Already registered with one of these banks? Swap to a UK account
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

export default InternationalBanking;
