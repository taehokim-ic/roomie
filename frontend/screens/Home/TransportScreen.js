import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const TransportScreen = () => {
  const transportData = [
    {
      id: 1,
      title: 'Public Transportation',
      description: 'The UK has an extensive public transportation system that includes buses, trains, and underground networks. The most common mode of public transport in cities is buses, which operate on designated routes and offer convenient connectivity within and between cities.',
    },
    {
      id: 2,
      title: 'Train Services',
      description: 'The UK has a well-developed railway network that provides efficient transportation across the country. The National Rail service operates trains connecting major cities and towns, offering both long-distance and regional services. The rail network is known for its punctuality and speed.',
    },
    {
      id: 3,
      title: 'London Underground',
      description: 'The London Underground, also known as the Tube, is an iconic part of the city\'s transport system. It consists of a network of underground trains that serve Greater London and some surrounding areas. The Tube is a fast and convenient way to navigate the city, with different lines covering various parts of London.',
    },
    {
      id: 4,
      title: 'Cycling',
      description: 'Cycling is a popular mode of transportation in the UK, especially in urban areas. Many cities have dedicated cycling lanes and bike-sharing schemes, making it easy for residents and visitors to cycle around. Cycling is an environmentally friendly and healthy way to explore the cities and enjoy the scenic routes.',
    },
    {
      id: 5,
      title: 'Driving',
      description: 'If you prefer to drive, the UK has a well-maintained road network with clear signposting. Keep in mind that traffic drives on the left-hand side, and speed limits and parking regulations must be followed. It\'s important to familiarize yourself with the local traffic laws and obtain the necessary documents, such as a valid driver\'s license and insurance.',
    },
  ];

  const renderTransportCard = ({ id, title, description }) => {
    return (
      <View key={id} style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.pageTitle}>Transportation Information</Text>
      {transportData.map(renderTransportCard)}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  pageTitle: {
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
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});

export default TransportScreen;
