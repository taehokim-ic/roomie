import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import StatusBar from '../../components/StatusBar';

const FlatFinding = () => {
  const data = [
    { id: '1', text: 'Rent', status: 'agree' },
    { id: '2', text: 'Location', status: 'disagree' },
    { id: '3', text: 'Furniture', status: 'pending' },
    { id: '4', text: 'Lifestyle', status: 'disagree' },
    { id: '5', text: 'Allergies', status: 'pending' },
    // Add more items as needed
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.text}</Text>
      <StatusBar status={item.status} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '30%',
    padding: 16,
    backgroundColor: '#1C5231',
    position: 'absolute',
    top: 350,
  },
  itemContainer: {
    backgroundColor: '#1C5231',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    height: 50,
    borderColor: 'white',
    borderWidth: 0.25,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
    alignSelf: 'center'
  },
  itemText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 30,
    fontSize: 16,
  },
  item2Text: {
    color: 'white',
    fontWeight: 'bold',
    position: 'absolute',
    left: 160,
    fontSize: 12,
  }
});

export default FlatFinding;


