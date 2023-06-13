import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabsNavigation from "./TabsNavigation";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ animation: 'fade'}}>
          <Stack.Screen name = 'UserApp' component={TabsNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}