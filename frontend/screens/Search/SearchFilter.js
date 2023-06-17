import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';

import SearchButton from '../../components/SearchButton';
import GearIconButton from '../../components/GearIconButton';
import PropertyTypeDropdown from '../../components/PropertyTypeDropdown'
import MinBudgetDropdown from '../../components/MinBudgetDropdown';
import MaxBudgetDropdown from '../../components/MaxBudgetDropdown';
import DisabledAccessDropdown from '../../components/DisabledAccessDropdown';
import PreferredSexDropdown from '../../components/PreferredSexDropdown';
import NationalityDropdown from '../../components/NationalityDropdown';
import FirstLanguageDropdown from '../../components/FirstLanguageDropdown';
import SmokerDropdown from '../../components/SmokerDropdown';
import PetsDropdown from '../../components/PetsDropdown';
import ApplyFiltersButton from '../../components/ApplyFiltersButton';
import SearchFiltersText from '../../components/SearchFiltersText';
import AdditionalSearchFiltersText from '../../components/AdditionalSearchFiltersText';

const SearchFilter = ({navigation}) => {

  const handleSearchButtonPress = () => {
    navigation.navigate('MainFilter');
  }

  const handleGearIconButtonPress = () => {
    navigation.navigate('DefaultSearch')
  }

  const handleApplyFiltersButtonPress = () => {
    navigation.navigate('DefaultSearch')
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Additional Filters</Text>
        </View>
        <View style={styles.section}>
          <PreferredSexDropdown />
          <FirstLanguageDropdown />
          <NationalityDropdown />
          <SmokerDropdown />
          <PetsDropdown />
        </View>
        <ApplyFiltersButton onPress={handleApplyFiltersButtonPress} />
        <SearchFiltersText />
        <AdditionalSearchFiltersText />
      </View>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    paddingTop: 64,
    paddingBottom: 16,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    justifyContent: 'center',
  },
  subheaderText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
  },
  section: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 20,
  },
})


export default SearchFilter;