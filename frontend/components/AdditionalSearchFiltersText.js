import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const AdditionalSearchFiltersText = () => {
  return (
    <View style={styles.container2}>
      <View style={styles.line} />
      <Text style={styles.text}>Additional search filters</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container1: {
    flexDirection: 'row',
    alignItems: 'center',
    bottom: 420,
  },
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
    bottom: '110%',
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

export default AdditionalSearchFiltersText;
