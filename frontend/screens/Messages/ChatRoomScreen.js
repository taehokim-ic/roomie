import React from "react";
import { View } from "react-native";
import { useChatContext } from "../../context/ChatContext";
import { Channel, MessageList, MessageInput } from "stream-chat-expo";

const ChatRoomScreen = () => {
  const {currentChannel} = useChatContext();
  return (
    <Channel channel={currentChannel}>
        <MessageList />
        <MessageInput />
    </Channel>
  )
}

export default ChatRoomScreen;