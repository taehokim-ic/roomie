import React from 'react';
import { useNavigation } from '@react-navigation/native';

import DefaultSearchButton from '../../components/DefaultSearchButton';

const SearchScreen = () => {
  const navigation = useNavigation();

  const handleButtonPress = () => {
    navigation.navigate('SearchFilter');
  }
  return (
    <DefaultSearchButton onPress={handleButtonPress}/>
  )
};
export default SearchScreen;