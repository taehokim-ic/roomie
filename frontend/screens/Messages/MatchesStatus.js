import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Compatibility from './Compatibility';

const MatchesStatus = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return <Compatibility />;
      case 2:
        return <Page2 />;
      case 3:
        return <Page3 />;
      case 4:
        return <Page4 />;
      case 5:
        return <Page5 />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.indictatorStyle}>
        {renderPage()}
        <StepIndicator
          customStyles={stepIndicatorStyles}
          currentPosition={currentPage - 1}
          labels={['Compatibility', 'Flat-finding', 'Contract request', 'Sign contract', 'Final information']}
          onPress={onPageChange}
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

export default MatchesStatus;

