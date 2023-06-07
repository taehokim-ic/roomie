import React, { useState } from "react";
import { TouchableOpacity, Text, Keyboard, TextInput } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import ProfileEditScreen from "../screens/Profile/ProfileEditScreen";
import ProfileViewScreen from "../screens/Profile/ProfileViewScreen";
import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const CustomHeaderButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={{ marginRight: 10 }}>
    <Text style={{ color: "#007AFF", fontSize: 16 }}>{title}</Text>
  </TouchableOpacity>
);

const ProfileStack = () => {
  const navigation = useNavigation();

  const handleSave = () => {
    Keyboard.dismiss();
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DefaultProfile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProfileEdit"
        component={ProfileEditScreen}
        options={({ navigation, route }) => ({
          title: "Edit Profile",
          headerRight: () => (
            <CustomHeaderButton
              title="Save"
              onPress={() => {
                const onSave = route.params?.onSave;
                if (onSave) {
                  onSave();
                }
                handleSave();
              }}
            />
          ),
          headerShown: true,
        })}
      />
      <Stack.Screen
        name="ProfileView"
        component={ProfileViewScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
