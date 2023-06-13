import React from 'react';
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


const Messages = [
  {
    id: '1',
    userName: 'Klaus Smith',
    userImg: require('../../assets/users/user-1.jpg'),
    messageTime: '4 mins ago',
    messageText:
      'Hi, looking forward to getting to know you.',
  },
  {
    id: '2',
    userName: 'Amanda Kady',
    userImg: require('../../assets/users/user-3.jpg'),
    messageTime: '2 hours ago',
    messageText:
      'How are you doing?',
  },
  {
    id: '3',
    userName: 'Rieko Smith',
    userImg: require('../../assets/users/user-4.jpg'),
    messageTime: '1 hours ago',
    messageText:
      'Where abouts are you based?',
  },
  {
    id: '4',
    userName: 'Diana Smith',
    userImg: require('../../assets/users/user-6.jpg'),
    messageTime: '1 day ago',
    messageText:
      'What do you do for a living?',
  },
  {
    id: '5',
    userName: 'Katie Jones',
    userImg: require('../../assets/users/user-7.jpg'),
    messageTime: '2 days ago',
    messageText:
      'Good luck with your search.',
  },
];

const Matches = [
  {
    id: '1',
    userImg: require('../../assets/users/user-8.jpg'),
  },
  {
    id: '2',
    userImg: require('../../assets/users/user-9.png'),
  },
  {
    id: '3',
    userImg: require('../../assets/users/user-10.png'),
  },
  {
    id: '4',
    userImg: require('../../assets/users/user-11.png'),
  },
];

const MessagesScreen = ({navigation}) => {
  const goToMatches = () => {
    navigation.navigate('Matches');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goToMatches} style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.text}>People who you have matched with</Text>
        <FlatList
          horizontal
          data={Matches}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.circularImageContainer}>
              <Image source={item.userImg} style={styles.userImage} />
            </View>
          )}
          ListFooterComponent={() => (
            <TouchableOpacity style={styles.arrowContainer}>
              <Text style={styles.arrowText}></Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </TouchableOpacity>
      <Container>
        <FlatList 
          data={Messages}
          keyExtractor={item=>item.id}
          renderItem={({item}) => (
            <Card onPress={() => navigation.navigate('Compatibility')}>
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
    marginRight: 120,
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
