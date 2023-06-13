import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { useNavigation } from '@react-navigation/native';

const data = [
  { label: "LSE", value: '1' },
  { label: 'UCL', value: '2' },
  { label: "Imperial", value: '3' },

];

const LocationDropdown = ({ position }) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  
  const navigation = useNavigation();

  const handleValueChange = (value) => {
    if (value > 0) {
      navigation.navigate('SearchFilter');
    }
  }

  return (
    <View style={[styles.container, position && position]}>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'black', borderWidth: 2 }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Choose from a list' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value);
          setIsFocus(false);
          handleValueChange(item.value);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    marginTop: 430,
    height: 80,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    padding: 16,
  },
  dropdown: {
    position: 'absolute',
    height: 80,
    width: '87%',
    marginLeft: 150,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 20,
    backgroundColor: '#027148',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    paddingHorizontal: 8,
    alignSelf: 'center',
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  selectedTextStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },
  iconStyle: {
    width: 20,
    height: 20,
    tintColor: '#000000',
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: 'black',
  },
});

export default LocationDropdown;
