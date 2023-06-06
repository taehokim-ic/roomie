import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchScreen from "../screens/Search/SearchScreen";
import SearchFilter from "../screens/Search/SearchFilter"

const Stack = createNativeStackNavigator();

const SearchStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name = 'DefaultSearch' component = {SearchScreen} options={{ headerShown: false }}/>
      <Stack.Screen name = 'SearchFilter' component = {SearchFilter} options={{ headerShown: false }}/>
    </Stack.Navigator>
  )
}

export default SearchStack
