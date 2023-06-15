import React, {createContext, useContext, useEffect, useState} from 'react';
import { ActivityIndicator } from 'react-native';
import {StreamChat, Channel} from 'stream-chat';
import { OverlayProvider, Chat } from 'stream-chat-expo'
import { useNavigation } from '@react-navigation/native';

export const ChatContext = createContext({});

const ChatContextProvider = ({children}) => {
    const [chatClient, setChatClient] = useState<StreamChat>();
    const [currentChannel, setCurrentChannel] = useState<Channel>();

    const navigation = useNavigation();

    const client = StreamChat.getInstance('cgza2gd8vxd6');

    const user = {
        id: 'd98f5ff0-b882-4c70-92e3-4cb69a3279e2',
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

    const value = { chatClient, currentChannel, startDMChat, setCurrentChannel};
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