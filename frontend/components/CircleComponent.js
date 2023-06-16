import React from 'react';
import { View } from 'react-native';

const CircleComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.circle} />
      <View style={[styles.circle, styles.grayCircle]} />
    </View>
  );
};

const styles = {
  container: {
    top: 25,
    alignSelf: 'center',
    backgroundColor: '#eeeeee',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    height: 30,
    width: 80,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: 'black',
    margin: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  grayCircle: {
    backgroundColor: '#aaaaaa',
  },
};

export default CircleComponent;
