import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import HomeScreen from '../components/HomeScreen';
import MessageScreen from '../components/MessageScreen';
import UserProfileScreen from '../components/ProfileScreen';
import SearchScreen from '../components/screens/SearchScreen';

const homeName = 'Home';
const messageName = 'Message';
const searchName = 'Search';
const profileName = 'Profile';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
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
                <Tab.Screen name={searchName} component={SearchScreen} />
                <Tab.Screen name={messageName} component={MessageScreen} />
                <Tab.Screen name={profileName} component={UserProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}