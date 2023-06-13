import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const TenancyAgreementScreen = ({navigation}) => {
  const handleSignAgreement = () => {
    // Implement the logic to redirect the user to the electronic signing website
    console.log('Redirecting to sign the tenancy agreement');
    navigation.navigate('Success');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Tenancy Agreement</Text>
        <Text style={styles.summary}>
          This is a summary of the important terms and conditions included in the tenancy agreement.
          Please read the full agreement before signing.
        </Text>
        <Text style={styles.term}>
          1. Duration: The tenancy agreement is valid for 12 months starting from [start date].
        </Text>
        <Text style={styles.term}>
          2. Rent: The monthly rent amount is $[rent amount]. Payment is due on the [payment due date]
          of each month.
        </Text>
        <Text style={styles.term}>
          3. Security Deposit: A security deposit of $[deposit amount] is required and will be
          returned within [number of days] after the tenancy ends, minus any deductions for damages.
        </Text>
        <Text style={styles.term}>
          4. Maintenance: The tenant is responsible for basic maintenance and repairs of the rented
          property, excluding major repairs that are the landlord's responsibility.
        </Text>
        <Text style={styles.term}>
          5. Pets: No pets are allowed in the rented property.
        </Text>
        <Text style={styles.term}>
          6. Smoking: Smoking is strictly prohibited inside the rented property.
        </Text>
        <Text style={styles.term}>
          7. Subletting: Subletting the property is not permitted without prior written consent from the landlord.
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.signButton} onPress={handleSignAgreement}>
            <Text style={styles.signButtonText}>Sign Tenancy Agreement</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
  content: {
    flex: 1,
    padding: 16,
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  summary: {
    fontSize: 16,
    marginBottom: 16,
    color: '#555',
  },
  term: {
    fontSize: 14,
    marginBottom: 8,
    color: '#555',
  },
  buttonContainer: {
    alignSelf: 'center',
    marginTop: 16,
  },
  signButton: {
    backgroundColor: '#007bff',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  signButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default TenancyAgreementScreen;
