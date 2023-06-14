import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import CustomButton from '../../components/CustomButton';
import MatchingStatus from '../../components/MatchingStatus';
import ChatIcon from '../../components/ChatIcon';
import StatusBar from '../../components/StatusBar';
import { useNavigation } from '@react-navigation/native';

const FlatFinding = (name) => {

  return (
    <View>
      <View style={styles.container}>
        <MatchingStatus state={1}/>
        <ChatIcon />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#1C5231',
  },

});




export default FlatFinding;