import React, {createContext, useContext, useEffect, useState} from 'react';
import { ActivityIndicator } from 'react-native';
import {StreamChat, Channel} from 'stream-chat';
import { OverlayProvider, Chat } from 'stream-chat-expo'
import { useNavigation } from '@react-navigation/native';
import { generateUUID } from './uuid';
import axios from 'axios';

export const ChatContext = createContext({});

const ChatContextProvider = ({children}) => {
    const [chatClient, setChatClient] = useState<StreamChat>();
    const [currentChannel, setCurrentChannel] = useState<Channel>();

    const navigation = useNavigation();

    const client = StreamChat.getInstance('cgza2gd8vxd6');

    const uuid = generateUUID();

    useEffect(() => {
    }, []);

    useEffect(() => {
        const initChat = async () => {
            const response = await axios.get('http://roomie3.herokuapp.com/api/v1/person?uuid=' + uuid);

            const name = response.data.name;
            const image = response.data.picture_url;
            
            await client.connectUser(
                {
                    id: uuid,
                    name: name,
                    image: image,
                },
                client.devToken(uuid),
            );            
            setChatClient(client);
        };
        initChat();
    }, []);

    useEffect(() => {
        return () => {
        if (!chatClient) {
            chatClient.disconnectUser();
        }};
    }, []);

    const startGroupChat = async (userIds: string[]) => {
        if (!chatClient) return;
      
        const members = [chatClient.userID, ...userIds];
      
        const newChannel = chatClient.channel('messaging', { members });
      
        await newChannel.watch();
        setCurrentChannel(newChannel);
        navigation.navigate('ChatRoom');
      };

      const deleteChannel = async () => {
        await currentChannel.delete();
        setCurrentChannel(undefined);
      };

    const startDMChat = async (userId) => {
        if (!chatClient) return;

        const newChannel = chatClient.channel('messaging', {
            members: [chatClient.userID, userId],
        });

        await newChannel.watch();
        setCurrentChannel(newChannel);
        navigation.navigate('Compatible', userId );
    };

    if (!chatClient) return <ActivityIndicator />;

    const value = { chatClient, currentChannel, startDMChat, startGroupChat, setCurrentChannel};
    return (
        <OverlayProvider>
            <Chat client={chatClient}>
                <ChatContext.Provider value={value}>
                    {children}
                </ChatContext.Provider>
            </Chat>
        </OverlayProvider>
    )
};

export const useChatContext = () => useContext(ChatContext);

export default ChatContextProvider;