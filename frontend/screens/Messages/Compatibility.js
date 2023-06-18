import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList, PanResponder, Alert } from 'react-native';
import CustomButton from '../../components/CustomButton';
import MatchingStatus from '../../components/MatchingStatus';
import ChatIcon from '../../components/ChatIcon';
import StatusBar from '../../components/StatusBar';
import { useNavigation } from '@react-navigation/native';
import StatusBarButton from '../../components/StatusBarButton';
import { useRoute } from '@react-navigation/native';
import { useChatContext } from 'stream-chat-expo';
import { Circle } from 'react-native-svg';
import CircleComponent from '../../components/CircleComponent';

const Compatibility = (name) => {
  const route = useRoute();
  const { otherUUID } = route.params;

  const navigation = useNavigation();
  const value = "test";

  const handleFlatShare = () => {
    if (getAgreeCount() === 6) {
      handleConfirmation();
    } else {
      handleInsufficientAccept();
    }
  }

  const handleChatSwipe = () => {
    navigation.navigate('ChatRoom');
  }

  const [compatibilityData, setCompatibilityData] = useState([
    { id: '1', text: 'Rent', status: 'pending' },
    { id: '2', text: 'Location', status: 'pending' },
    { id: '3', text: 'Furniture', status: 'pending' },
    { id: '4', text: 'Lifestyle', status: 'pending' },
    { id: '5', text: 'Allergies', status: 'pending' },
    { id: '6', text: 'Pets', status: 'pending' },
    // Add more items as needed
  ]);

  const handleAgree = (item) => {
    const updatedData = compatibilityData.map((dataItem) => {
      if (dataItem.id === item.id) {
        return { ...dataItem, status: 'agree' };
      }
      return dataItem;
    });
    setCompatibilityData(updatedData);
  };

  const handleDisagree = (item) => {
    const updatedData = compatibilityData.map((dataItem) => {
      if (dataItem.id === item.id) {
        return { ...dataItem, status: 'disagree' };
      }
      return dataItem;
    });
    setCompatibilityData(updatedData);
  };

  const getAgreeCount = () => {
    let agreeCount = 0;

    for (let i = 0; i < compatibilityData.length; i++) {
      if (compatibilityData[i].status === 'agree') {
        agreeCount++;
      }
    }

    return agreeCount;
  }

  const handleInsufficientAccept = () => {
    Alert.alert(
      'Insufficient compatibility',
      'We strongly recommend that you agree on all of the criteria',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ],
      { cancelable: false }
    );
  };

  const handleConfirmation = () => {
    Alert.alert(
      'Confirmation',
      'Are you sure you want to proceed?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Confirm',
          onPress: () => {
            navigation.navigate('FlatFinding', {uuid: otherUUID});
          },
        },
      ],
      { cancelable: false }
    );
  };

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

  const renderItem = ({ item }) => (
    <View style={scrollStyles.itemContainer}>
      <Text style={scrollStyles.itemText}>{item.text}</Text>
      <StatusBar status={item.status} />
      <StatusBarButton onAgreePress={() => handleAgree(item)} onDisagreePress={() => handleDisagree(item)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <MatchingStatus state={0}/>
      <Text style={styles.text}>Are you compatible?</Text>
      <View style={scrollStyles.container}>
        <FlatList
          data={compatibilityData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={{flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: '10%', width: '100%'}}>
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
    backgroundColor: 'transparent',
  }
});

const styles1 = StyleSheet.create({
  button: {
    backgroundColor: '#f64747',
    borderRadius: 20,
    width: '40%',
    paddingVertical: 20,
    borderColor: 'gray',
    borderRadius: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
})

const styles2 = StyleSheet.create({
  button: {
    backgroundColor: '#03c9a9',
    width: '40%',
    borderColor: 'gray',
    borderRadius: 0,
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
})

const scrollStyles = StyleSheet.create({
  container: {
    height: '60%',
    padding: 16,
    backgroundColor: 'white',
  },
  itemContainer: {
    backgroundColor: '#f2f2f2',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    height: 50,
    borderColor: '#f1f1f1',
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