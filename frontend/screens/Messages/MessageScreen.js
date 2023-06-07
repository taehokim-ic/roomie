import React from 'react';
import { View, Text, Button, StyleSheet, FlatList, ScrollView } from 'react-native';
import { Container,
    Card,
    UserInfo,
    UserImgWrapper,
    UserImg,
    UserInfoText,
    UserName,
    PostTime,
    MessageText,
    TextSection, } from '../../styles/MessageStyles';

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

const MessagesScreen = ({navigation}) => {
    return (
      <Container>
        <FlatList 
          data={Messages}
          keyExtractor={item=>item.id}
          renderItem={({item}) => (
            <Card onPress={() => navigation.navigate('Chat', {userName: item.userName})}>
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
    );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});