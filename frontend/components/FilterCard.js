import React from 'react';
import { View, Text, TouchableOpacity, Slider, StyleSheet } from 'react-native';

const FilterCard = ({ selectedPreferences, setSelectedPreferences, handleDonePress }) => {
  const handleToiletsChange = (value) => {
    setSelectedPreferences({ ...selectedPreferences, toilets: value });
  };

  const handleBedroomsChange = (value) => {
    setSelectedPreferences({ ...selectedPreferences, bedrooms: value });
  };

  const handlePriceChange = (value) => {
    setSelectedPreferences({ ...selectedPreferences, price: value });
  };

  return (
    <View style={styles.filterCard}>
      <Text style={styles.filterTitle}>Filter Preferences</Text>
      <View style={styles.filterSection}>
        <Text style={styles.filterSectionTitle}>Number of Toilets</Text>
        <Slider
          value={selectedPreferences.toilets}
          minimumValue={0}
          maximumValue={5}
          step={1}
          onValueChange={handleToiletsChange}
        />
        <Text style={styles.filterSectionValue}>{selectedPreferences.toilets}</Text>
      </View>
      <View style={styles.filterSection}>
        <Text style={styles.filterSectionTitle}>Number of Bedrooms</Text>
        <Slider
          value={selectedPreferences.bedrooms}
          minimumValue={0}
          maximumValue={5}
          step={1}
          onValueChange={handleBedroomsChange}
        />
        <Text style={styles.filterSectionValue}>{selectedPreferences.bedrooms}</Text>
      </View>
      <View style={styles.filterSection}>
        <Text style={styles.filterSectionTitle}>Price Range</Text>
        <Slider
          value={selectedPreferences.price}
          minimumValue={0}
          maximumValue={5000}
          step={100}
          onValueChange={handlePriceChange}
        />
        <Text style={styles.filterSectionValue}>${selectedPreferences.price}</Text>
      </View>
      <TouchableOpacity style={styles.filterDoneButton} onPress={handleDonePress}>
        <Text style={styles.filterDoneButtonText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  filterCard: {
    backgroundColor: '#f1f1f1',
    padding: 16,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  filterTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  filterSection: {
    marginBottom: 16,
  },
  filterSectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  filterSectionValue: {
    fontSize: 14,
    color: '#555',
  },
  filterDoneButton: {
    backgroundColor: '#03c9a9',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  filterDoneButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default FilterCard;