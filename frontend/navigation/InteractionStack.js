import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Compatibility from "../screens/Messages/Compatibility";
import FlatFinding from "../screens/Messages/FlatFinding";

const Stack = createNativeStackNavigator();

const InteractionStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen
          name="Compatible"
          component={Compatibility}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FlatFinding"
          component={FlatFinding}
        />
    </Stack.Navigator>
  );
};

export default InteractionStack;