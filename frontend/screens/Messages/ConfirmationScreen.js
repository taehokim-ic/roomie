import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';

const ConfirmationScreen = () => {
  const resources = [
    {
      title: 'Moving to the UK',
      description: 'Information and tips on what to expect when moving to the UK.',
      link: 'https://example.com/moving-to-uk',
    },
    {
      title: 'Flat-Hunting Process',
      description: 'A guide to the process of finding and securing a flat in the UK.',
      link: 'https://example.com/flat-hunting-process',
    },
    {
      title: 'Signing Tenancy Agreements',
      description: 'A comprehensive guide to understanding and signing tenancy agreements.',
      link: 'https://example.com/signing-tenancy-agreements',
    },
    {
      title: 'Paying Deposits',
      description: 'Important information on how to handle deposits when renting a flat.',
      link: 'https://example.com/paying-deposits',
    },
    {
      title: 'Flat-sharing',
      description: 'Learn about what to expect when sharing a flat with other people.',
      link: 'https://example.com/paying-deposits',
    },
  ];

  const handleCardPress = (link) => {
    // Handle card press event, e.g., open a web page in a browser
    console.log(`Opening link: ${link}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{marginTop: 30, paddingHorizontal:16}}>
      <Text style={styles.title}>You've found a flatmate!</Text>
      <Text style={styles.text}>But there's still a lot to do before you move to the UK. We've provided
      you some resources to help you get started.</Text>
      <View style={styles.cardContainer}>
        {resources.map((resource, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => handleCardPress(resource.link)}
          >
            <Text style={styles.cardTitle}>{resource.title}</Text>
            <Text style={styles.cardDescription}>{resource.description}</Text>
          </TouchableOpacity>
        ))}
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardContainer: {
    marginTop: 10,
  },
  card: {
    backgroundColor: '#F2F2F2',
    padding: 20,
    borderRadius: 8,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: '#555',
  },
});

export default ConfirmationScreen;
