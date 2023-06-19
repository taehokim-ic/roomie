import React from "react";
import { Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MessageScreen from "../screens/Messages/MessageScreen";
import ChatScreen from "../screens/Messages/ChatScreen";
import MatchesScreen from "../screens/Messages/MatchesScreen";
import InteractionStack from "./InteractionStack";
import BrowseMatchesScreen from "../screens/Messages/BrowseMatchesScreen";
import ConfirmationScreen from "../screens/Messages/ConfirmationScreen";
import ChatContextProvider from "../context/ChatContext";
import ChannelScreen from "../screens/Messages/ChannelScreen";
import ChatScreen2 from "../screens/Messages/ChatRoomScreen";
import Compatibility from "../screens/Messages/Compatibility";
import FlatFinding from "../screens/Messages/FlatFinding";
import TFL from "../screens/Home/TFL";
import Accomodation from "../screens/Home/Accomodation";
import RecommendedApps from "../screens/Home/RecommendedApps";
import LondonCycling from "../screens/Home/LondonCycling";
import Housing from "../screens/Home/Housing"
import TemporaryHousing from "../screens/Home/TemporaryHousing";
import ManagingFinances from "../screens/Home/ManagingFinances";
import Banking from "../screens/Home/Banking";
import InternationalBanking from "../screens/Home/InternationalBanking";
import SupportScreen from "../screens/Home/SupportScreen";
import TransportScreen from "../screens/Home/TransportScreen";
import VisaScreen from "../screens/Home/VisaScreen";
import FlatResources from "../screens/Messages/FlatResources";
import { useNavigation } from "@react-navigation/native";
import GroupMessagesScreen from "../screens/Messages/GroupMessagesScreen";

const Stack = createNativeStackNavigator();

const MessagesStack = () => {

  const navigation = useNavigation();

  return (
    <ChatContextProvider>
    <Stack.Navigator>
    <Stack.Screen
        name="Channel"
        component={ChannelScreen}
        options={{ headerShown: true, headerTitle: 'Matches' }}
      />
      <Stack.Screen
        name="Create Group"
        component={GroupMessagesScreen}
        options={{ headerShown: true }}
      />
    <Stack.Screen
        name="Messages"
        component={MessageScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="ChatRoom"
        component={ChatScreen2}
        options={{ headerShown: true , headerTitle: 'Chat'}}
      />
      <Stack.Screen
        name="Confirmation"
        component={ConfirmationScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={({ route }) => ({ title: route.params.userName })}
      />

        <Stack.Screen
          name="Compatible"
          component={Compatibility}
        />
        <Stack.Screen
          name="FlatFinding"
          component={FlatFinding}
          options={{
            headerTitle: "Get help moving to London",
            headerLeft: () => (
              <Button
                fontSize="24"
                title="Back"
                onPress={() => navigation.navigate('Channel')}
              />
            ),
          }}
        />
        <Stack.Screen
          name="InteractionChat"
          component={ChatScreen}
          options={{ headerShown: false }}
        />

      <Stack.Screen name="Matches" component={MatchesScreen} />
      <Stack.Screen 
        name="Interaction" 
        component={InteractionStack}
      />
      <Stack.Screen
        name="Your Connection Requests"
        component={BrowseMatchesScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="TFL"
        component={TFL}
        />
      <Stack.Screen
      name="Recommended Apps"
      component={RecommendedApps}
      />
      <Stack.Screen
      name="Cycling in London"
      component={LondonCycling}
      />
      <Stack.Screen
      name="Housing options"
      component={Housing}
      />
      <Stack.Screen
      name="Temporary housing solutions"
      component={TemporaryHousing}
      />
      <Stack.Screen
      name="Managing finances"
      component={ManagingFinances}
      />
      <Stack.Screen
      name="UK banking"
      component={Banking}
      />
      <Stack.Screen
      name="Existing account"
      component={InternationalBanking}
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
      name="Accomodation"
      component={Accomodation}
      options={{ headerShown: true }}
      />
      <Stack.Screen
      name="Visa and Immigration"
      component={VisaScreen}
      options={{ headerShown: true }}
      />
    </Stack.Navigator>
    </ChatContextProvider>
  );
};

export default MessagesStack;
