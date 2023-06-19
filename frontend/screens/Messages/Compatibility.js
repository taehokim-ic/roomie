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
import QuestionMarkButton from '../../components/QuestionMarkButton';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import axios from 'axios';
import { generateUUID } from '../../context/uuid';


const Compatibility = (name) => {
  const route = useRoute();
  const { otherUUID } = route.params;

  const uuid = generateUUID();
  const {currentChannel} = useChatContext();

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
        {
          text: 'Ignore',
          onPress: () => {
            handleConfirmation();
          },
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

  const rentPrompt = `
  Please make sure you have considered:

  - How much are you willing to pay per week?

  - How long do you need to pay rent for?

  - How frequently are you comfortable paying rent?

  - Does rent have to be paid in advance?
  `

  const locationPrompt = `
  Please make sure you have considered:

  - How far are you willing to travel to get to your institute?

  - Are you familiar with how expensive and long travel is?
  `

  const furniturePrompt = `
  Please make sure you have considered:

  - Do you have any specific needs for furniture?

  - Are you willing to rent in an unfurnished property?

  - If you are, have you arranged to have a bed installed?
  `
  const lifestylePrompt = `
  Please make sure you have considered:

  - What is your normal workday schedule like?

  - Are you comfortable having people over ocassionally?

  - How particular are you about having a clean house?

  - Are there any aspects of your lifestyle which may affect another person living with you?
  `

  const allergiesPrompt = `
  Please make sure you have communicated all types of allergies with your match
  `

  const petsPrompt = `
  Please make sure you have considered:

  - Are you comfortable with your match owning a pet?

  - Could your pet have a significant influence on your match's experience if they were to flatshare with you?
  `

  const getPrompt = (item) => {
    switch(item.id) {
      case '1':
        return rentPrompt;
      case '2':
        return locationPrompt;
      case '3':
        return furniturePrompt;
      case '4':
        return lifestylePrompt;
      case '5':
        return allergiesPrompt;
      case '6':
        return petsPrompt;
    }
  }

  const getPromptTitle = (item) => {
    switch(item.id) {
      case '1':
        return "Rent guidance";
      case '2':
        return "Location guidance";
      case '3':
        return "Furniture guidance";
      case '4':
        return "Lifestyle guidance";
      case '5':
        return "Allergies guidance"
      case '6':
        return "Pets guidance";
    }
  }

  const handlePrompt = (item) => {
    Alert.alert(
      getPromptTitle(item),
      getPrompt(item),
      [
        {
          text: 'I understand',
          style: 'cancel',
        },
      ],
      { cancelable: true }
    );
  }

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
      <QuestionMarkButton onPress={() => handlePrompt(item)}/>
      <StatusBar status={item.status} />
      <StatusBarButton onAgreePress={() => handleAgree(item)} onDisagreePress={() => handleDisagree(item)} />
    </View>
  );

  const notCompatible = async () => {
    const data = {
      connection_id: otherUUID,
    }
    const url = 'http://roomie3.herokuapp.com/api/v1/connect/' + uuid;
    const destroy = await currentChannel.delete();
    // console.log(destroy);
    deleteChannel();
    axios.post(url, data)
      .then((response) => {
        console.log(response);
      }
    ).catch((error) => {
      console.log(error);
    });
    navigation.goBack();
  }

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
      <TouchableOpacity
        style={styles.chatContainer}
        onPress={handleChatSwipe}
        >
          <Text style={styles.chatText}>Chat</Text>
        </TouchableOpacity>
      <View style={{flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width:'100%', marginTop:10}}>
        <TouchableOpacity style={styles1.button} onPress={notCompatible}>
        <Icon name="x" size={20} color="white" />
          <Text style={styles1.buttonText}>Not Compatible</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles2.button} onPress={handleFlatShare}>
          <Icon name="check" size={20} color="white" />
            <Text style={styles2.buttonText}>Let's Flatshare</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chatContainer: {
    width: '80%',
    height: 50,
    backgroundColor: '#038aff',
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  chatText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

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
    paddingVertical: 20,
    borderRadius: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '2%',
    flexDirection: 'row',
  },
  buttonText: {
    marginLeft: 3,
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
})

const styles2 = StyleSheet.create({
  button: {
    backgroundColor: '#03c9a9',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    marginLeft: 3,
    color: 'white',
    fontSize: 14,
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