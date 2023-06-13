import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import { useNavigation } from '@react-navigation/native';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { useBreakpointValue } from 'native-base';

const MatchingStatus = () => {

  const getCurrentPosition = () => {
    let route = navigation.getCurrentRoute();
    let rn = getFocusedRouteNameFromRoute(route);
    let pos = 1;

    switch(rn) {
      case 'Compatibility':
        pos = 2;
        break;
      default:
        pos = 0;
        break;
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.indictatorStyle}>
        <StepIndicator
          customStyles={stepIndicatorStyles}
          currentPosition={getCurrentPosition}
          labels={['Compatibility', 'Flat-finding', 'Contract request', 'Sign contract', 'Final information']}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  
  indictatorStyle: {
    top: '5%',
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
  currentStepLabelColor: '#000000',
};

export default MatchingStatus;


