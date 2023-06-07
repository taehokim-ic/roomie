import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';

import SearchButton from '../../components/SearchButton';
import GearIconButton from '../../components/GearIconButton';

const SearchScreen = () => {
  const navigation = useNavigation();

  const handleSearchButtonPress = () => {
    navigation.navigate('MainFilter');
  }

  const handleGearIconButtonPress = () => {
    navigation.navigate('SearchFilter')
  }

  return (
    <View>
      <SearchButton onPress={handleSearchButtonPress} title="Enter location"/>
      <GearIconButton onPress={handleGearIconButtonPress} />
    </View>
  )
};

export default SearchScreen;