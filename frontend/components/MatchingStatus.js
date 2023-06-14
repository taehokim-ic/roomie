import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import {useRoute } from '@react-navigation/native';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { color } from '@rneui/base';

const MatchingStatus = ({state}) => {

  return (
    <View style={styles.container}>
      <View style={styles.indictatorStyle}>
        <StepIndicator
          customStyles={stepIndicatorStyles}
          currentPosition={state} // Add state of interaction here
          labels={['Compatibility', 'Flat-finding', 'Request contract', 'Sign contract', 'Final information']}

        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '15%',
    backgroundColor: '#1C5231',
  },
  indictatorStyle: {
    top: '30%',
    height: '20%',
    alignContent: 'center'}
})

const stepIndicatorStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 5,
  stepStrokeCurrentColor: '#e100ff',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#e100ff',
  stepStrokeUnFinishedColor: '#AAAAAA',
  separatorFinishedColor: '#e100ff',
  separatorUnFinishedColor: '#AAAAAA',
  stepIndicatorFinishedColor: '#e100ff',
  stepIndicatorUnFinishedColor: '#FFFFFF',
  stepIndicatorCurrentColor: '#FFFFFF',
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 16,
  stepIndicatorLabelCurrentColor: '#000000',
  stepIndicatorLabelFinishedColor: '#FFFFFF',
  stepIndicatorLabelUnFinishedColor: '#AAAAAA',
  labelColor: '#999999',
  labelSize: 11,
  currentStepLabelColor: '#ffffff',
};

export default MatchingStatus;


