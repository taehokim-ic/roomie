import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Compatibility from "../screens/Messages/Compatibility";
import FlatFinding from "../screens/Messages/FlatFinding";
import ChatScreen from "../screens/Messages/ChatScreen";
import { useRoute } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const InteractionStack = () => {

  return (
    <Stack.Navigator 
      screenOptions={{}}>

    </Stack.Navigator>
  );
};

export default InteractionStack;