import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FlatListScreen from "../screens/Flats/FlatListScreen";
import FlatViewScreen from "../screens/Flats/FlatViewScreen";
import TenancyAgreementScreen from "../screens/Flats/TenancyAgreementsScreen";
import SuccessScreen from "../screens/Flats/SuccessScreen";
import HomeScreen from "../screens/Home/Resources";
// import ChatLandlordScreen from "../screens/Flats/ChatLandlordScreen";

const Stack = createNativeStackNavigator();

const FlatStack = () => {
  return (
    <Stack.Navigator>
        {/* <Stack.Screen
        name="ChatLandlord"
        component={ChatLandlordScreen}
        options={{ headerShown: false }}
        /> */}
        <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name="FlatList"
        component={FlatListScreen}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name="FlatView"
        component={FlatViewScreen}
        options={{ headerShown: true }}
        />
        <Stack.Screen
        name="Rentals"
        component={TenancyAgreementScreen}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name="Success"
        component={SuccessScreen}
        options={{ headerShown: false }}
        />
    </Stack.Navigator>
  );
};

export default FlatStack;
