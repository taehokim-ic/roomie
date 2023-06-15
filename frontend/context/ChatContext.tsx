import React, {createContext, useContext, useEffect, useState} from 'react';
import {StreamChat} from 'stream-chat';

export const ChatContext = createContext({});

const ChatContextProvider = ({children}) => {
    const [chatClient, setChatClient] = useState<StreamChat>();
    const value = { username: 'Matthew'}

    const user = {
        id: '05b3bbd1-4e75-4ad3-9d71-4c4c8d08717d',
        name: 'Matthew',
        image: 'https://getstream.io/random_png/?id=test&name=test',
    };

    useEffect(() => {
        const client = StreamChat.getInstance('cgza2gd8vxd6');

        const initChat = async () => {
            if (!user.id) return;

            await client.connectUser(
                {
                    id: user.id,
                    name: user.name,
                    image: user.image,
                },
                client.devToken('05b3bbd1-4e75-4ad3-9d71-4c4c8d08717d'),
            );
            setChatClient(client);
        };
        initChat();
    }, []);

    useEffect(() => {
        return () => {
        if (chatClient) {
            chatClient.disconnect();
        }};
    }, [chatClient]);

    return (
        <ChatContext.Provider value={value}>
            {children}
        </ChatContext.Provider>
    )
};

export const useChatContext = () => useContext(ChatContext);

export default ChatContextProvider;