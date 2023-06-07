import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MessageScreen from '../screens/Messages/MessageScreen';
import ChatScreen from "../screens/Messages/ChatScreen";

const Stack = createNativeStackNavigator();

const MessagesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name = 'Messages' component = {MessageScreen} options={{ headerShown: true }}/>
      <Stack.Screen name = 'Chat' 
      component = {ChatScreen} 
      options = {({ route }) => ({ title: route.params.userName })}/>
    </Stack.Navigator>
  )
}

export default MessagesStack
