import React from "react";
import { Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MessageScreen from "../screens/Messages/MessageScreen";
import ChatScreen from "../screens/Messages/ChatScreen";
import MatchesScreen from "../screens/Messages/MatchesScreen";
import InteractionStack from "./InteractionStack";
import BrowseMatchesScreen from "../screens/Messages/BrowseMatchesScreen";
import ConfirmationScreen from "../screens/Messages/ConfirmationScreen";
import ChatContextProvider from "../context/ChatContext";
import ChannelScreen from "../screens/Messages/ChannelScreen";
import ChatScreen2 from "../screens/Messages/ChatRoomScreen";
import Compatibility from "../screens/Messages/Compatibility";
import FlatFinding from "../screens/Messages/FlatFinding";
import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const MessagesStack = () => {

  const navigation = useNavigation();

  return (
    <ChatContextProvider>
    <Stack.Navigator>
    <Stack.Screen
        name="Channel"
        component={ChannelScreen}
        options={{ headerShown: true }}
      />
    <Stack.Screen
        name="Messages"
        component={MessageScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="ChatRoom"
        component={ChatScreen2}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Confirmation"
        component={ConfirmationScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={({ route }) => ({ title: route.params.userName })}
      />

        <Stack.Screen
          name="Compatible"
          component={Compatibility}
        />
        <Stack.Screen
          name="FlatFinding"
          component={FlatFinding}
          options={{
            headerLeft: () => (
              <Button
                title="Matches"
                onPress={() => navigation.navigate('Channel')}
              />
            ),
          }}
        />
        <Stack.Screen
          name="InteractionChat"
          component={ChatScreen}
          options={{ headerShown: false }}
        />

      <Stack.Screen name="Matches" component={MatchesScreen} />
      <Stack.Screen 
        name="Interaction" 
        component={InteractionStack}
      />
      <Stack.Screen
        name="Your Connection Requests"
        component={BrowseMatchesScreen}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
    </ChatContextProvider>
  );
};

export default MessagesStack;
