import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Compatibility from "../screens/Messages/Compatibility";
import FlatFinding from "../screens/Messages/FlatFinding";
import ChatScreen from "../screens/Messages/ChatScreen";

const Stack = createNativeStackNavigator();

const InteractionStack = () => {
  
  return (
    <Stack.Navigator 
      screenOptions={{}}>
        <Stack.Screen
          name="Compatible"
          component={Compatibility}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FlatFinding"
          component={FlatFinding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="InteractionChat"
          component={ChatScreen}
          options={{ headerShown: false }}
        />
    </Stack.Navigator>
  );
};

export default InteractionStack;