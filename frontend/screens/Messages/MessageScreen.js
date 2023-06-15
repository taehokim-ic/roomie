import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import { Container, 
  Card, 
  UserInfo, 
  UserImgWrapper, 
  UserImg, 
  UserInfoText, 
  UserName, 
  PostTime, 
  MessageText, 
  TextSection } from '../../styles/MessageStyles';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import BrowseMatchesScreen from './BrowseMatchesScreen';

const MessagesScreen = ({navigation}) => {
  const [users, setUsers] = useState([]);
  const [requests, setRequests] = useState([]);
  const [Messages, setMessages] = useState([]);

  const handleCardPress = ({navigation, state} ) => {
    let screenName = "Compatibility";
 
    switch(state) {
      case 0:
        screenName = "Compatibility";
        break;
      case 1:
        screenName = "FlatFinding"
        break;
    }
 
    navigation.navigate('Interaction', {screen: screenName})
  }

  const browseMatches = () => {
    navigation.navigate('Your Connection Requests');
  }

  const fetchRequests = async () => {
    try {
      const response = await axios.get('http://roomie3.herokuapp.com/api/v1/connection_reqs?uuid=05b3bbd1-4e75-4ad3-9d71-4c4c8d08717d');
      // console.log(response.data);
      const userData = [];
      for (let i = 0; i < response.data.connection_reqs.length; i++) {
        const userRequest = await axios.get('http://roomie3.herokuapp.com/api/v1/person?uuid=' + response.data.connection_reqs[i])
        console.log(userRequest.data);
        userData.push(userRequest.data);
      }
      let i = 4;
      if (userData.length < 4) {
        i = userData.length;
      }
      const res = userData.slice(0,i).map((user) => {
        return {
          uuid: user.uuid,
          userImg: {uri: user.picture_url},
        }
      });
      // console.log(res);
      setRequests(res);
    }
    catch (error) {
      console.log(error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://roomie3.herokuapp.com/api/v1/matches?uuid=05b3bbd1-4e75-4ad3-9d71-4c4c8d08717d');
      const userData = [];
      // console.log("USER RESPONSE Fetched data");
      for (let i = 0; i < response.data.matches.length; i++) {
        const userRequest = await axios.get('http://roomie3.herokuapp.com/api/v1/person?uuid=' + response.data.matches[i])
        userData.push(userRequest.data);
      }
      // console.log(userData);
      const res = userData.slice(0,4).map((user) => {
        return {
          uuid: user.uuid,
          userName: user.name,
          userImg: {uri: user.picture_url},
          messageTime: '4 mins ago',
          messageText: 'Hi, looking forward to getting to know you.',
        }
      });
      setMessages(res);
    }
    catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchRequests();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
      { requests.length > 0 ? 
      (
        <View style={styles.cardContent}>
          <View>
            <Text style={styles.text}>People who sent you connection requests</Text>
            <FlatList
              horizontal
              data={requests}
              keyExtractor={item => item.uuid}
              renderItem={({ item }) => (
                <View style={styles.circularImageContainer}>
                  <TouchableOpacity onPress={() => navigation.navigate('Matches', {uuid : item.uuid})}>
                    <Image source={item.userImg} style={styles.userImage} />
                  </TouchableOpacity>
                </View>
              )}
              ListFooterComponent={() => (
                <TouchableOpacity
                  style={styles.arrowContainer}>
                  <Icon name="chevron-right" size={20} color="black" onPress={browseMatches} />
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      ) : 
      (
          <View>
            <Text style={styles.text}>You have not received any connection requests yet</Text>
          </View>
      )}
    </View>
      <Container>
        <FlatList 
          data={Messages}
          keyExtractor={item=>item.uuid}
          renderItem={({item}) => (
            // <Card onPress={() => navigation.navigate('Interaction')}>
            <Card onPress={() => handleCardPress({navigation, state: 0})}>
              <UserInfo>
                <UserImgWrapper>
                  <UserImg source={item.userImg} />
                </UserImgWrapper>
                <TextSection>
                  <UserInfoText>
                    <UserName>{item.userName}</UserName>
                    <PostTime>{item.messageTime}</PostTime>
                  </UserInfoText>
                  <MessageText>{item.messageText}</MessageText>
                </TextSection>
              </UserInfo>
            </Card>
          )}
        />
      </Container>
    </View>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  card: {
    width: 700,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingTop: 6,
    marginBottom: 6,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circularImageContainer: {
    width: 60,
    height: 60,
    borderRadius: 40,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 7.5,
  },
  userImage: {
    width: 55,
    height: 55,
    borderRadius: 40,
    borderWidth: 0.01,
  },
  text: {
    marginBottom:5,
    padding: 3,
    fontSize: 15,
  },
  arrowContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowText: {
    fontSize: 14,
    color: 'black',
    // fontWeight: 'bold',
  },
});
