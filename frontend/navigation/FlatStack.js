import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FlatListScreen from "../screens/Flats/FlatListScreen";
import FlatViewScreen from "../screens/Flats/FlatViewScreen";
import TenancyAgreementScreen from "../screens/Flats/TenancyAgreementsScreen";
import SuccessScreen from "../screens/Flats/SuccessScreen";
import HomeScreen from "../screens/Home/Resources";
import SupportScreen from "../screens/Home/SupportScreen";
import TransportScreen from "../screens/Home/TransportScreen";
import VisaScreen from "../screens/Home/VisaScreen";
import CityGuideScreen from "../screens/Home/CityGuides";
import TFL from "../screens/Home/TFL";
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
        name="Support Networks"
        component={SupportScreen}
        options={{ headerShown: true }}
        />
        <Stack.Screen
        name="Transport Links"
        component={TransportScreen}
        options={{ headerShown: true }}
        />
        <Stack.Screen
        name="Visa and Immigration"
        component={VisaScreen}
        options={{ headerShown: true }}
        />
        <Stack.Screen
        name="City Guides"
        component={CityGuideScreen}
        options={{ headerShown: true }}
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
        <Stack.Screen
        name="TFL"
        component={TFL}
        />
    </Stack.Navigator>
  );
};

export default FlatStack;
