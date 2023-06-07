import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet } from 'react-native';

import SearchButton from '../../components/SearchButton';
import GearIconButton from '../../components/GearIconButton';
import SmokerDropdown from '../../components/SmokerDropdown';


const SearchFilter = () => {
  const navigation = useNavigation();

  const handleSearchButtonPress = () => {
    navigation.navigate('MainFilter');
  }

  const handleGearIconButtonPress = () => {
    navigation.navigate('DefaultSearch')
  }

  return (
    <View style={styles.container}>
      <SearchButton onPress={handleSearchButtonPress} title="Enter location"/>
      <GearIconButton onPress={handleGearIconButtonPress} color='#03c9a9'/>
      <SmokerDropdown />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03c9a9',
  }
})


export default SearchFilter;