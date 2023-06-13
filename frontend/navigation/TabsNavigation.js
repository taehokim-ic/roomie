import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

import HomeScreen from '../screens/Home/HomeScreen';

import SearchStack from './SearchStack';
import ProfileStack from './ProfileStack';
import MessagesStack from './MessageStack';
import FlatListScreen from '../screens/Flats/FlatListScreen';
import FlatStack from './FlatStack';

const homeName = 'Home';
const messageName = 'Message';
const searchName = 'Search';
const profileName = 'Profile';

const Tab = createBottomTabNavigator();

const getTabBarVisibility = (route) => {
    let rn = getFocusedRouteNameFromRoute(route);
    if (rn == 'MainFilter' || rn == 'SearchFilter' || rn == 'LoadProfile' || rn == 'Compatibility') return 'none';
    return 'flex'
}

const TabsNavigation = () => {
    return (
        <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === homeName) {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (rn === messageName) {
                        iconName = focused ? 'chatbox' : 'chatbox-outline';
                    } else if (rn === searchName) {
                        iconName = focused ? 'search' : 'search-outline';
                    } else if (rn === profileName) {
                        iconName = focused ? 'person' : 'person-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#027148',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {height: 80, paddingBottom: 25},
                tabBarItemStyle: {marginTop: 10},
                tabBarLabelStyle: {marginTop: 0, fontSize: 12},
                headerShown: false,
                tabBarStyle: {display: getTabBarVisibility(route)},
            })}
            >
            <Tab.Screen name={homeName} component={FlatStack} />
            <Tab.Screen name={searchName} component={SearchStack} />
            <Tab.Screen name={messageName} component={MessagesStack} />
            <Tab.Screen name={profileName} component={ProfileStack} />
        </Tab.Navigator>
    );
}

export default TabsNavigation;