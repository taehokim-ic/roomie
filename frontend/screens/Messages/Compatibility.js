import React, { useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, PanResponder } from 'react-native';
import CustomButton from '../../components/CustomButton';
import MatchingStatus from '../../components/MatchingStatus';
import ChatIcon from '../../components/ChatIcon';
import StatusBar from '../../components/StatusBar';
import { useNavigation } from '@react-navigation/native';
import StatusBarButton from '../../components/StatusBarButton';
import { useRoute } from '@react-navigation/native';

const Compatibility = (name) => {
  const route = useRoute();
  const { uuid } = route.params;

  const navigation = useNavigation();
  const value = "test";

  useEffect(() => {
    console.log(uuid);
    console.log(value);
  }, []);

  const handleFlatShare = () => {
    navigation.navigate('FlatFinding');
  }

  const handleChatSwipe = () => {
    navigation.navigate('InteractionChat');
  }

  const data = [
    { id: '1', text: 'Rent', status: 'agree' },
    { id: '2', text: 'Location', status: 'disagree' },
    { id: '3', text: 'Furniture', status: 'agree' },
    { id: '4', text: 'Lifestyle', status: 'disagree' },
    { id: '5', text: 'Allergies', status: 'pending' },
    { id: '6', text: 'Pets', status: 'disagree' },
    // Add more items as needed
  ];

  const renderItem = ({ item }) => (
    <View style={scrollStyles.itemContainer}>
      <Text style={scrollStyles.itemText}>{item.text}</Text>
      <StatusBar status={item.status} />
      <StatusBarButton />
    </View>
  );

  const panResponder = React.useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (event, gestureState) => {
        // Return false to allow other gestures to handle the touch event first
        return true;
      },
      onPanResponderEnd: (event, gestureState) => {
        if (gestureState.dx < -50 && gestureState.vx < -0.5) {
          // Swipe right detected
          handleChatSwipe();
        }
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      <MatchingStatus state={0}/>
      <Text style={styles.text}>Are you compatible?</Text>
      <View style={scrollStyles.container}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <Text style={styles.update}>Update your status...</Text>
      <Text style={styles.recommend}>We strongly recommend that you agree on these criteria!</Text>

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
      <View style={styles.swipe} {...panResponder.panHandlers}>
        <Text>Swipe!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'white',
  },
  text: {
    width: '50%',
    position: 'absolute',
    top: '16%',
    alignSelf: 'center',
    color: '#1C5231',
    fontSize: 20,
    fontWeight: 'bold',
  },
  update: {
    position: 'absolute',
    width: '40%',
    top: '22%',
    right: 0,
    color: '#1C5231',
    fontSize: 10,
    fontWeight: 'bold',
  },
  recommend: {
    position: 'absolute',
    width: '100%',
    top: '74%',
    left: '6%',
    color: '#1C5231',
    fontSize: 12,
    fontWeight: 'bold',
  },
  swipe: {
    position: 'absolute',
    alignSelf: 'center',
    height: '10%',
    width: '100%',
    bottom: '10%',
    backgroundColor: 'blue',
  }
});

const styles1 = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    borderRadius: 20,
    position: 'absolute',
    bottom: '0%',
    left: '0%',
    width: '50%',
    height: '7%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
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

const styles2 = StyleSheet.create({
  button: {
    backgroundColor: '#49eb34',
    right: '0%',
    position: 'absolute',
    bottom: '0%',
    width: '50%',
    height: '7%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
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
    height: '50%',
    padding: 16,
    backgroundColor: 'white',
    position: 'absolute',
    top: 160,
    zIndex: 100,
  },
  itemContainer: {
    backgroundColor: '#eeeeee',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    height: 50,
    borderColor: '#1C5231',
    borderWidth: 0.5,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
    alignSelf: 'center'
  },
  itemText: {
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 30,
    fontSize: 16,
  },
  item2Text: {
    color: 'black',
    fontWeight: 'bold',
    position: 'absolute',
    left: 160,
    fontSize: 12,
  }
});

export default Compatibility;