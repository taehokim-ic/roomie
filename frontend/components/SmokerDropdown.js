import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { FontAwesome } from '@expo/vector-icons';

const data = [
  { label: "Don't mind", value: '1' },
  { label: 'No', value: '2' },
];

const SmokerDropdown = ({ position }) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: 'black' }]}>
          Smoker?
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={[styles.container, position && position]}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'black', borderWidth: 1 }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select item' : '...'}
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
    width: '100%',
    marginTop: 160,
    height: 70,
    backgroundColor: '#03c9a9',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 16,
  },
  dropdown: {
    position: 'absolute',
    height: 50,
    width: 300,
    marginLeft: 45,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    justifyContent: 'center',
    top: 0,
    left: 70,
    marginBottom: 50,
    backgroundColor: '#03c9a9',
    zIndex: 999,
    paddingHorizontal: 0,
    fontSize: 14,
    fontStyle: 'bold',
    color: 'white',
  },
  placeholderStyle: {
    fontSize: 16,
    fontStyle: 'bold',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'white',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: 'white',
  },
});

export default SmokerDropdown;
