import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import MatchingStatus from '../../components/MatchingStatus';
import ChatIcon from '../../components/ChatIcon';
import StatusBarButton from '../../components/StatusBarButton';

const FlatFinding = () => {

  return (
    <View>
      <View style={styles.container}>
        <MatchingStatus state={1}/>
        <ChatIcon />
        <StatusBarButton />
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