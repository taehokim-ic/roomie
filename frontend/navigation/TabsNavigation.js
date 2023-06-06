import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import HomeScreen from '../screens/Home/HomeScreen';
import MessageScreen from '../screens/Messages/MessageScreen';
import UserProfileScreen from '../screens/Profile/ProfileScreen';

import SearchStack from './SearchStack';
import ProfileStack from './ProfileStack';

const homeName = 'Home';
const messageName = 'Message';
const searchName = 'Search';
const profileName = 'Profile';

const Tab = createBottomTabNavigator();

export default function TabsNavigation() {
    return (
        <NavigationContainer>
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
                    tabBarActiveTintColor: '#03c9a9',
                    tabBarInactiveTintColor: 'gray',
                    tabBarStyle: {height: 80, paddingBottom: 25},
                    tabBarItemStyle: {marginTop: 10},
                    tabBarLabelStyle: {marginTop: 0, fontSize: 12},
                    headerShown: false,
                })}
                >
                <Tab.Screen name={homeName} component={HomeScreen} />
                <Tab.Screen name={searchName} component={SearchStack} />
                <Tab.Screen name={messageName} component={MessageScreen} />
                <Tab.Screen name={profileName} component={ProfileStack} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}