import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Channel, Chat, MessageInput, MessageList } from 'stream-chat-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ChatLandlordScreen = () => {
  const { bottom } = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.container}>
      <Chat client={chatClient}>
        <Channel channel={channel} keyboardVerticalOffset={0}>
          <View style={[styles.flex, { paddingBottom: bottom }]}>
            <MessageList />
            <MessageInput />
          </View>
        </Channel>
      </Chat>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flex: {
    flex: 1,
  },
});

export default ChatLandlordScreen;