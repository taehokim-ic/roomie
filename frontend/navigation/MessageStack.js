import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MessageScreen from "../screens/Messages/MessageScreen";
import ChatScreen from "../screens/Messages/ChatScreen";
import MatchesScreen from "../screens/Messages/MatchesScreen";
import Compatibility from "../screens/Messages/Compatibility";
import FlatFinding from "../screens/Messages/FlatFinding";
import InteractionStack from "./InteractionStack";
import BrowseMatchesScreen from "../screens/Messages/BrowseMatchesScreen";

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
        name="Interaction" 
        component={InteractionStack}
      />
      <Stack.Screen
        name="BrowseMatches"
        component={BrowseMatchesScreen}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
};

export default MessagesStack;
