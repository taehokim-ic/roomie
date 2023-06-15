import React, { useEffect } from "react";
import { View } from "react-native";
import { useChatContext } from "../../context/ChatContext";
import { Channel, MessageList, MessageInput } from "stream-chat-expo";

const ChatRoomScreen = ({navigation}) => {
  const {currentChannel} = useChatContext();

  useEffect(() => {
    navigation.setOptions({
      title: currentChannel.data.name,
    });
  }, [currentChannel]);


  return (
    <Channel channel={currentChannel}>
        <MessageList />
        <MessageInput />
    </Channel>
  )
}

export default ChatRoomScreen;