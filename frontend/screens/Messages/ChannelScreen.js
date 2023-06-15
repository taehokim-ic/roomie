import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {useChatContext} from '../../context/ChatContext';

const ChannelScreen = () => {
    const {username} = useChatContext();
    return (
        <SafeAreaView>
        <View>
            <Text>{username}</Text>
        </View>
        </SafeAreaView>
    )
}

export default ChannelScreen; 