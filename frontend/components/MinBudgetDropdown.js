import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { FontAwesome } from '@expo/vector-icons';

const data = [
  { label: 'None', value: '0' },
  { label: '£100 per month', value: '1' },
  { label: '£200 per month', value: '2' },
  { label: '£300 per month', value: '3' },
  { label: '£400 per month', value: '4' },
  { label: '£500 per month', value: '5' },
  { label: '£600 per month', value: '6' },
  { label: '£700 per month', value: '7' },
  { label: '£800 per month', value: '8' },
  { label: '£900 per month', value: '9' },
  { label: '£1000 per month', value: '10' },
];

const MinBudgetDropdown = ({ position }) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    return (
      <Text style={[styles.label, isFocus && { color: 'black' }]}>
        Min Budget?
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
    width: '100%',
    marginTop: '35%',
    height: 40,
    backgroundColor: '#89e0c2',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 16,
  },
  dropdown: {
    position: 'absolute',
    height: 30,
    width: 200,
    marginLeft: 160,
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

export default MinBudgetDropdown;
