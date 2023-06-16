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
          stepCount={2}
          customStyles={stepIndicatorStyles}
          currentPosition={state} // Add state of interaction here
          labels={['Compatibility', 'Flat-finding']}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '15%',
    backgroundColor: 'white',
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
  stepStrokeCurrentColor: '#1C5231',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#1C5231',
  stepStrokeUnFinishedColor: '#777777',
  separatorFinishedColor: '#1C5231',
  separatorUnFinishedColor: '#777777',
  stepIndicatorFinishedColor: '#1C5231',
  stepIndicatorUnFinishedColor: '#eeeeee',
  stepIndicatorCurrentColor: '#eeeeee',
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 16,
  stepIndicatorLabelCurrentColor: '#eeeeee',
  stepIndicatorLabelFinishedColor: '#1C5231',
  stepIndicatorLabelUnFinishedColor: '#eeeeee',
  labelColor: '#777777',
  labelSize: 11,
  currentStepLabelColor: '#1C5231',
};

export default MatchingStatus;


