import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import CustomButton from '../../components/CustomButton';
import MatchingStatus from '../../components/MatchingStatus';
import ChatIcon from '../../components/ChatIcon';
import StatusBar from '../../components/StatusBar';
import { useNavigation } from '@react-navigation/native';

const Compatibility = (name) => {

  const navigation = useNavigation();

  const handleFlatShare = () => {
    navigation.navigate('FlatFinding');
  }

  const data = [
    { id: '1', text: 'Rent', status: 'agree' },
    { id: '2', text: 'Location', status: 'disagree' },
    { id: '3', text: 'Furniture', status: 'pending' },
    { id: '4', text: 'Lifestyle', status: 'disagree' },
    { id: '5', text: 'Allergies', status: 'pending' },
    // Add more items as needed
  ];

  const renderItem = ({ item }) => (
    <View style={scrollStyles.itemContainer}>
      <Text style={scrollStyles.itemText}>{item.text}</Text>
      <StatusBar status={item.status} />
    </View>
  );

  return (
    <View>
      <View style={styles.container}>
        <MatchingStatus />
        <ChatIcon />
        <Text style={styles.text}>Recommended criteria that you should agree upon before choosing to live with INSERT_NAME...</Text>
        <View style={scrollStyles.container}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
        <CustomButton
          title="Not compatible"
          onPress={() => console.log('Not compatible button pressed')}
          styles={styles1}
        />
        <CustomButton
          title="Let's flatshare"
          onPress={handleFlatShare}
          styles={styles2}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#1C5231',
  },
  text: {
    width: '60%',
    position: 'absolute',
    top: '20%',
    left: '5%',
    color: '#dddddd',
    fontSize: '16',
    fontWeight: 'bold',

  }
});

const styles1 = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    borderRadius: 20,
    position: 'absolute',
    top: '88%',
    marginBottom: '3%',
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
    marginBottom: '3%',
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

const scrollStyles = StyleSheet.create({
  container: {
    height: '40%',
    padding: 16,
    backgroundColor: '#1C5231',
    position: 'absolute',
    top: 250,
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

export default Compatibility;