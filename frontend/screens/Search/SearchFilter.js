import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet } from 'react-native';

import SearchButton from '../../components/SearchButton';
import GearIconButton from '../../components/GearIconButton';
import MinBudgetDropdown from '../../components/MinBudgetDropdown';
import MaxBudgetDropdown from '../../components/MaxBudgetDropdown';
import SmokerDropdown from '../../components/SmokerDropdown';
import PetsDropdown from '../../components/PetsDropdown';
import ApplyFiltersButton from '../../components/ApplyFiltersButton';
import SearchFiltersText from '../../components/SearchFiltersText';
import AdditionalSearchFiltersText from '../../components/AdditionalSearchFiltersText';



const SearchFilter = () => {
  const navigation = useNavigation();

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
    <View style={styles.container}>
      <SearchButton onPress={handleSearchButtonPress} title="Enter location"/>
      <GearIconButton onPress={handleGearIconButtonPress} color='#ea1552'/>
      <MinBudgetDropdown />
      <MaxBudgetDropdown />
      <SmokerDropdown />
      <PetsDropdown />
      <ApplyFiltersButton onPress={handleApplyFiltersButtonPress}/>
      <SearchFiltersText />
      <AdditionalSearchFiltersText />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#89e0c2',
  }
})


export default SearchFilter;