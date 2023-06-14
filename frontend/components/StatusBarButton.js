import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const StatusBarButton = () => {
  const [clickCount, setClickCount] = useState(0);

  const handlePress = () => {
    setClickCount(clickCount + 1);
  };

  const resetButton = () => {
    setClickCount(0);
  };

  return (
    <View style={styles.container}>
      {clickCount % 2 === 0 ? (
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Ionicons name="ellipsis-horizontal" size={24} color="white" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={resetButton}
          activeOpacity={1}
        >
          <TouchableOpacity
            style={styles.buttonAfter}
            onPress={handlePress}
          >
            <Text style={styles.buttonText}>Agree</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonAfter}
            onPress={handlePress}
          >
            <Text style={styles.buttonText}>Disagree</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    backgroundColor: 'transparent',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  button: {
    width: 40,
    height: 40,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
  },
  buttonAfter: {
    width: 120,
    height: 30,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 0.25,
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 18,
    color: 'black',
  },
});

export default StatusBarButton;
