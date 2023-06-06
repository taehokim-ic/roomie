import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const CircularImage = ({url}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.circularImage}
        source={{uri: url}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 150,
    borderRadius: 75,
    overflow: 'hidden',
  },
  circularImage: {
    width: '100%',
    height: '100%',
  },
});

export default CircularImage;
