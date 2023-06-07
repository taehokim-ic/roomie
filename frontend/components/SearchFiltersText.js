import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const SearchFiltersText = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>Search filters</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    bottom: 700,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 12,
    paddingHorizontal: 10,
  },
});

export default SearchFiltersText;
