import React from 'react';
import { View, TouchableOpacity, StatusBar, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchFilter = () => {
  const navigation = useNavigation();

  const handleGearIconClick = () => {
    navigation.navigate('DefaultSearch');
  };

  return (
    <View style={styles.container}>
      <StatusBar  barStyle="dark-content" translucent={false} />
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
