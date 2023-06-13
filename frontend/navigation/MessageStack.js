import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MessageScreen from "../screens/Messages/MessageScreen";
import ChatScreen from "../screens/Messages/ChatScreen";
import MatchesScreen from "../screens/Messages/MatchesScreen";
import Compatibility from "../screens/Messages/Compatibility";

const Stack = createNativeStackNavigator();

const MessagesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Messages"
        component={MessageScreen}
        options={{ headerShown: true }}
      />

      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={({ route }) => ({ title: route.params.userName })}
      />

      <Stack.Screen name="Matches" component={MatchesScreen} />
      <Stack.Screen 
        name="Compatibility" 
        component={Compatibility}
        options={{ headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MessagesStack;
