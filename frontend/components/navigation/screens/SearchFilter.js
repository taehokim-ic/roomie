import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchScreen from './SearchScreen';

const SearchFilter = () => {
  const navigation = useNavigation();

  const handleGearIconClick = () => {
    navigation.navigate('SearchScreen');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleGearIconClick}>
        <Icon name="gear" size={30} color="#f00" style={styles.gearIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gearIcon: {
    paddingHorizontal: 10,
  },
});

export default SearchFilter;
