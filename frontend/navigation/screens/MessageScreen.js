import * as React from 'react';
import {View, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function MessageScreen({navigation}) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
        <View>
            <Text>Message Screen</Text>
        </View>
        </SafeAreaView>
    );
}
