import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Card = ({ title, children }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      {children}
    </View>
  );
};

const SuccessScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Congratulations!</Text>
        <Text style={styles.subtitle}>You have secured your flat in the UK!</Text>
        <Text style={styles.summary}>Here's what you need to know:</Text>

        <Card title="Address">
          <Text style={styles.infoText}>123 Main Street, London</Text>
        </Card>

        <Card title="Move-in Date">
          <Text style={styles.infoText}>July 1, 2023</Text>
        </Card>

        <Card title="Rental Summary">
          <Text style={styles.infoText}>Monthly Rent: $1200</Text>
          <Text style={styles.infoText}>Lease Term: 1 year</Text>
          <Text style={styles.infoText}>Utilities Included: Water, Gas</Text>
        </Card>

        <Card title="Contact Information">
          <Text style={styles.infoText}>Landlord: John Doe</Text>
          <Text style={styles.infoText}>Phone: 123-456-7890</Text>
          <Text style={styles.infoText}>Email: john.doe@example.com</Text>
        </Card>

        <Card title="Move-in Instructions">
          <Text style={styles.infoText}>Please collect the keys from the property management office:</Text>
          <Text style={styles.infoText}>Address: 456 Park Avenue, London</Text>
          <Text style={styles.infoText}>Office Hours: Mon-Fri, 9 AM - 5 PM</Text>
        </Card>

        <Card title="Emergency Contacts">
          <Text style={styles.infoText}>Police: 999</Text>
          <Text style={styles.infoText}>Fire Department: 888</Text>
          <Text style={styles.infoText}>Emergency Maintenance: 123-789-4560</Text>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flexGrow: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 24,
    color: '#555',
  },
  summary: {
    fontSize: 16,
    marginBottom: 16,
    color: '#555',
  },
  card: {
    backgroundColor: '#efeff0',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  infoText: {
    fontSize: 14,
    marginBottom: 4,
    color: '#555',
  },
});

export default SuccessScreen;
