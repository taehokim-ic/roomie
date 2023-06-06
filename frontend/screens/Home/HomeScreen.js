import * as React from 'react';
import {View, Text, StatusBar} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
    return (
        <View>
            <StatusBar  barStyle="dark-content" translucent={false} />
            <SafeAreaView style={{ flex: 1 }}>
                <View>
                    <Text>Home Screen</Text>
                </View>
            </SafeAreaView>
        </View>
    );
}
