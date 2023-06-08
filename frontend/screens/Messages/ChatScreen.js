import * as React from 'react';
import {useEffect, useState} from 'react';
import {View, StatusBar, Text} from 'react-native';
import { Bubble, GiftedChat, Send } from 'react-native-gifted-chat';
import {MaterialCommunityIcons} from '@expo/vector-icons';

const ChatScreen = () => {
    const [messages, setMessages] = React.useState([]);

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hi, I wanted to get in touch with you. How are you doing?',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
            {
                _id: 2,
                text: 'Do you have any locations in mind when you get to London?',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            }
        ])
    }, [])

    const onSend = React.useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }
    , [])

    const renderBubble = (props) => {
        return (
          <Bubble
            {...props}
            wrapperStyle={{
                left: {
                    backgroundColor: '#03c9a9',
                    paddingLeft: 6,
                    paddingRight: 10,
                    paddingBottom: 2,
                    paddingTop: 2,
                    borderRadius:25
                },
              right: {
                backgroundColor: '#2e64e5',
                paddingLeft: 10,
                paddingRight: 6,
                paddingBottom: 2,
                paddingTop: 2,
                borderRadius:25
              },
            }}

            timeTextStyle={{
                left: {
                  color: 'black',
                },
                right: {
                  color: 'white',
                }
            }}
            
            textStyle={{
              right: {
                color: '#fff',
              },
            }}
          />
        );
      };



    const renderSend = (props) => {
        return (
          <Send {...props}>
            <View>
              <MaterialCommunityIcons
                name="send-circle"
                style={{marginBottom: 5, marginRight: 5}}
                size={32}
                color="#2e64e5"
              />
            </View>
          </Send>
        );
      };

    return (
        <View style={{flex: 1}}>
            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                renderBubble={renderBubble}
                renderSend={renderSend}
                user={{
                    _id: 1,
                }}
            />
        </View>
    )
}

export default ChatScreen;