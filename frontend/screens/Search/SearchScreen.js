import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchScreen = () => {
  const navigation = useNavigation();

  const handleGearIconClick = () => {
    navigation.navigate('SearchFilter');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleGearIconClick}>
        <Icon name="gear" size={30} color="#000" style={styles.gearIcon} />
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

export default SearchScreen;
