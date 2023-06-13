import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabsNavigation from "./TabsNavigation";
import RegisterScreen from "../screens/Login/RegisterScreen";
import QuizScreen from "../screens/Login/QuizScreen";
import LoginScreen from "../screens/Login/LoginScreen";
import HomeScreen from "../screens/Home/HomeScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ animation: 'fade' }} initialRouteName="Register">
          <Stack.Screen 
              name = 'UserApp' 
              component={TabsNavigation}
              options = {{headerShown: false}} />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Quiz"
            component={QuizScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}