import * as React from 'react';
import {View, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function SearchScreen({navigation}) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
        <View>
            <Text>Search Screen</Text>
        </View>
        </SafeAreaView>
    );
}
