import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchScreen from "../screens/Search/SearchScreen";
import ProfileViewScreen from "../screens/Search/ProfileViewScreen";
import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const SearchStack = () => {
  const navigation = useNavigation();
  
  return (
    <Stack.Navigator screenOptions={{ animation: 'fade'}}>
      <Stack.Screen name = 'DefaultSearch' component = {SearchScreen} options={{ headerShown: false }}/>
      <Stack.Screen name = 'Profile' component={ProfileViewScreen} />
    </Stack.Navigator>
  )
}

export default SearchStack
