import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomButton from '../../components/CustomButton';
import MatchingStatus from '../../components/MatchingStatus';

const Compatibility = () => {
  return (
    <View>
      <View style={styles.container}>
        <MatchingStatus />
        <CustomButton
          title="Not compatible"
          onPress={() => console.log('Not compatible button pressed')}
          styles={styles1}
        />
        <CustomButton
          title="Let's flatshare"
          onPress={() => console.log("Let's flatshare button pressed")}
          styles={styles2}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '100%',
    backgroundColor: '#1C5231',
  }
});

const styles1 = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    borderRadius: 20,
    position: 'absolute',
    top: '88%',
    marginBottom: '5%',
    left: '7%',
    width: '40%',
    height: '7%',
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 20,
    paddingVertical: '5%',
    paddingHorizontal: 15,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
})

const styles2 = StyleSheet.create({
  button: {
    backgroundColor: '#49eb34',
    borderRadius: 20,
    right: '7%',
    position: 'absolute',
    top: '88%',
    marginBottom: '5%',
    width: '40%',
    height: '7%',
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 20,
    paddingVertical: '5%',
    paddingHorizontal: 15,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
})

export default Compatibility;