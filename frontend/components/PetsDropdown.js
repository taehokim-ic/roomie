import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
  { label: "Don't mind", value: '1' },
  { label: 'No', value: '2' },
];

const PetsDropdown = ({ position }) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    return (
      <Text style={[styles.label, isFocus && { color: 'black' }]}>
        Has pets?
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
    marginTop: '123%',
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
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: 'black',
  },
});

export default PetsDropdown;
