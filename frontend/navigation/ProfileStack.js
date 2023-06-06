import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from "../screens/Profile/ProfileScreen";
import ProfileEditScreen from "../screens/Profile/ProfileEditScreen";

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name = 'DefaultProfile' component = {ProfileScreen} options={{ headerShown: false }}/>
      <Stack.Screen name = 'ProfileEdit' component = {ProfileEditScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
  )
}

export default ProfileStack
