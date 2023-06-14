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
    navigation.navigate('BrowseMatches');
  }

  const fetchRequests = async () => {
    try {
      const response = await axios.get('http://roomie3.herokuapp.com/api/v1/people?current_user_uuid=05b3bbd1-4e75-4ad3-9d71-4c4c8d08717d');
      console.log(response.data);
      console.log("[Message Screen] Fetched data");
      const res = response.data.slice(0,4).map((user) => {
        return {
          uuid: user.uuid,
          userImg: {uri: user.picture_url},
        }
      });
      console.log(res);
      setRequests(res);
    }
    catch (error) {
      console.log(error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://roomie3.herokuapp.com/api/v1/people?current_user_uuid=05b3bbd1-4e75-4ad3-9d71-4c4c8d08717d');
      const res = response.data.slice(0,4).map((user) => {
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

  const goToMatches = () => {
    // send uuid as param
    navigation.navigate('Matches', {uuid: '1234'});
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
      <View style={styles.cardContent}>
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
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingTop: 6,
    paddingRight: 40,
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
    marginLeft: 10,
    marginTop: 15,
  },
  arrowText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
});
