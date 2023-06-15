import React, { useEffect } from "react";
import { View } from "react-native";
import { useChatContext } from "../../context/ChatContext";
import { Channel, MessageList, MessageInput } from "stream-chat-expo";

const ChatRoomScreen = ({navigation}) => {
  const {currentChannel, setChannelName} = useChatContext();

  useEffect(() => {
    if (currentChannel?.data?.name) {
      setChannelName(currentChannel.data.name);
      navigation.setOptions({
        title: currentChannel.data.name,
      });
    }
  }, [currentChannel]);


  return (
    <Channel channel={currentChannel}>
        <MessageList />
        <MessageInput />
    </Channel>
  )
}

export default ChatRoomScreen;