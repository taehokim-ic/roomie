import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {useChatContext} from '../../context/ChatContext';
import { ChannelList } from 'stream-chat-expo';

const ChannelScreen = ({navigation}) => {
    const {setCurrentChannel} = useChatContext();

    const onSelect = (channel) => {
        setCurrentChannel(channel);
        navigation.navigate('ChatRoom');
    }

    return (
        <ChannelList onSelect={onSelect}/>
    )
}

export default ChannelScreen; 