import React from 'react';
import { View, TouchableOpacity, StatusBar, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomButton from '../../components/CustomButton';
import LocationDropdown from '../../components/LocationDropdown';

const MainFilter = () => {
  const navigation = useNavigation();

  const handleButtonPress = () => {
    navigation.navigate('DefaultSearch');
  };

  return (
    <View style={styles.container}>
      <Text style = {styles.text}>Which institution will you be studying at?</Text>
      <LocationDropdown />
      <CustomButton onPress={handleButtonPress} styles={styles} title={"Can\'t find insitution"}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#89e0c2',
  },
  button: {
    backgroundColor: '#43CE9E',
    borderRadius: 20,
    width: '80%',
    height: 80,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 20,
    paddingVertical: '5%',
    paddingHorizontal: 15,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    top: 490,
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  text: {
    alignSelf: 'center',
    top: 340,
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  }
});

export default MainFilter;