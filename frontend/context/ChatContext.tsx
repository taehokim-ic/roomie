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

    const user = {
        id: '05b3bbd1-4e75-4ad3-9d71-4c4c8d08717d',
        name: 'Matthew',
        image: 'https://getstream.io/random_png/?id=test&name=test',
    };

    useEffect(() => {

        const initChat = async () => {
            if (!user.id) return;

            const client = StreamChat.getInstance('cgza2gd8vxd6');

            await client.connectUser(
                {
                    id: user.id,
                    name: user.name,
                    image: user.image,
                },
                client.devToken(user.id),
            );
            setChatClient(client);

            const channel = client.channel('messaging', 'general', {
                name: 'General Chat',
                members: [user.id],
            });
            
            await channel.watch();

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
        // console.log('startDMChat');
        console.log('userId', userId);
        console.log('chatClientID', chatClient.userID);
        if (!chatClient) return;

        const newChannel = chatClient.channel('messaging', {
            members: [chatClient.userID, userId],
        });

        await newChannel.watch();
        setCurrentChannel(newChannel);
        navigation.navigate('ChatRoom');
        // navigation.goBack();
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