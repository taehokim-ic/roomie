import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FlatListScreen from "../screens/Flats/FlatListScreen";
import FlatViewScreen from "../screens/Flats/FlatViewScreen";
import TenancyAgreementScreen from "../screens/Flats/TenancyAgreementsScreen";

const Stack = createNativeStackNavigator();

const FlatStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen
        name="Rentals"
        component={TenancyAgreementScreen}
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
    </Stack.Navigator>
  );
};

export default FlatStack;
