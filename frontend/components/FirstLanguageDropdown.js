import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { FontAwesome } from '@expo/vector-icons';

const data = [
  { label: 'No preference', value: '0' },
  { label: 'Korean', value: '1' },
  { label: 'Mandarin', value: '2' },
  { label: 'Hindi', value: '3' },
  { label: 'English', value: '4' },
  { label: 'French', value: '5' },
  { label: 'German', value: '6' },
  { label: 'Cantonese', value: '7' },
  { label: 'Arabic', value: '8' },
];

const FirstLanguageDropdown = ({ position }) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    return (
      <Text style={[styles.label, isFocus && { color: 'black' }]}>
        First Language?
      </Text>
    );
  };

  return (
    <View style={[styles.container, position && position]}>
      {renderLabel()}
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
        placeholder={!isFocus ? 'Please select' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '200%',
    marginTop: '22%',
    height: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 16,
  },
  dropdown: {
    position: 'absolute',
    height: 30,
    width: 150,
    marginLeft: 220,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    backgroundColor: '#eeeeee',
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    justifyContent: 'center',
    top: 10,
    left: 45,
    backgroundColor: 'transparent',
    paddingHorizontal: 0,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'black',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: 'black',
  },
});

export default FirstLanguageDropdown;
