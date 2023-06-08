import React from 'react';
import { SafeAreaView, View, Text, FlatList } from 'react-native';
import { StreamChat } from 'stream-chat';
import { Channel } from 'stream-chat-react-native';

// Initialize Stream Chat client
const chatClient = StreamChat.getInstance('cgza2gd8vxd6');
chatClient.connectUser({ id: '1' }, chatClient.devToken('1'));

const ChatScreen2 = () => {
  // Create a channel instance
  const channel = chatClient.channel('messaging', 'message');

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 10 }}>
          Channel Screen
        </Text>
        <Channel channel={channel}>
          <Channel.Header />
          <Channel.MessageList />
          <Channel.MessageInput />
        </Channel>
      </View>
    </SafeAreaView>
  );
};

export default ChannelScreen;
