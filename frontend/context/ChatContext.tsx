import React, {createContext, useContext, useEffect, useState} from 'react';
import { ActivityIndicator } from 'react-native';
import {StreamChat, Channel} from 'stream-chat';
import { OverlayProvider, Chat } from 'stream-chat-expo'
import { useNavigation } from '@react-navigation/native';
import { generateUUID } from './uuid';

export const ChatContext = createContext({});

const ChatContextProvider = ({children}) => {
    const [chatClient, setChatClient] = useState<StreamChat>();
    const [currentChannel, setCurrentChannel] = useState<Channel>();

    const navigation = useNavigation();

    const client = StreamChat.getInstance('cgza2gd8vxd6');

    const uuid = generateUUID();

    const user = {
        id: uuid,
        name: 'Michael',
        image: 'https://getstream.io/random_png/?id=test&name=test',
    };

    useEffect(() => {
        const initChat = async () => {
            if (!user.id) return;
            
            await client.connectUser(
                {
                    id: user.id,
                    name: user.name,
                    image: user.image,
                },
                client.devToken(user.id),
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
      

    const startDMChat = async (userId) => {
        if (!chatClient) return;

        const newChannel = chatClient.channel('messaging', {
            members: [chatClient.userID, userId],
        });

        await newChannel.watch();
        setCurrentChannel(newChannel);
        navigation.navigate('ChatRoom');
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