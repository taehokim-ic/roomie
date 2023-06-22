import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const InteractionStack = () => {

  return (
    <Stack.Navigator 
      screenOptions={{}}>

    </Stack.Navigator>
  );
};

export default InteractionStack;