import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchScreen from "../screens/Search/SearchScreen";
import MainFilter from "../screens/Search/MainFilter";
import SearchFilter from "../screens/Search/SearchFilter";
import LoadProfile from "../screens/Search/LoadProfile";

const Stack = createNativeStackNavigator();

const SearchStack = () => {
  return (
    <Stack.Navigator screenOptions={{ animation: 'fade'}}>
      <Stack.Screen name = 'DefaultSearch' component = {SearchScreen} options={{ headerShown: false }}/>
      <Stack.Screen name = 'MainFilter' component = {MainFilter} options={{ headerShown: false }}/>
      <Stack.Screen name = 'SearchFilter' component = {SearchFilter} options={{ headerShown: false }}/>
      <Stack.Screen name = 'LoadProfile' component={LoadProfile} />
    </Stack.Navigator>
  )
}

export default SearchStack
