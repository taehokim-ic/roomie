import React from "react";
import {TouchableOpacity, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from "../screens/Profile/ProfileScreen";
import ProfileEditScreen from "../screens/Profile/ProfileEditScreen";
import ProfileViewScreen from "../screens/Profile/ProfileViewScreen";

const Stack = createNativeStackNavigator();

const CustomHeaderButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={{ marginRight: 10 }}>
    <Text style={{color: '#007AFF', fontSize: 16}}>{title}</Text>
  </TouchableOpacity>
);

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name = 'DefaultProfile' component = {ProfileScreen} options={{ headerShown: false }}/>
      <Stack.Screen name = 'ProfileEdit' component = {ProfileEditScreen} options = {{ route: 'Edit Profile', 
      title: 'Edit Profile', 
      headerRight: () => (
        <CustomHeaderButton
          title="Done"
          onPress={() => {
            route.params.onDone();
          }}
        />
      ),
      headerShown: true }}/>
      <Stack.Screen name = 'ProfileView' component = {ProfileViewScreen} options={{ headerShown: false }}/> 
    </Stack.Navigator>
  )
}

export default ProfileStack
