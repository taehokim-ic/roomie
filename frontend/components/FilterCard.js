import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, TextInput } from 'react-native';

const FilterCard = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [city, setCity] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleApplyFilters = () => {
    toggleModal();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleModal} style={styles.button}>
        <Text style={styles.buttonText}>Open Filter</Text>
      </TouchableOpacity>

      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Filter</Text>
            <TextInput
              style={styles.input}
              placeholder="City"
              value={city}
              onChangeText={setCity}
            />
            <TextInput
              style={styles.input}
              placeholder="Number of Bedrooms"
              value={bedrooms}
              onChangeText={setBedrooms}
            />
            <TextInput
              style={styles.input}
              placeholder="Minimum Price"
              value={minPrice}
              onChangeText={setMinPrice}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Maximum Price"
              value={maxPrice}
              onChangeText={setMaxPrice}
              keyboardType="numeric"
            />
            <TouchableOpacity onPress={handleApplyFilters} style={styles.applyButton}>
              <Text style={styles.applyButtonText}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 12,
    backgroundColor: '#2196F3',
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  applyButton: {
    marginTop: 16,
    padding: 12,
    backgroundColor: '#2196F3',
    borderRadius: 8,
