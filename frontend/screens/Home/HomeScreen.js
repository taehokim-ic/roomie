import * as React from 'react';
import {View, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen({navigation}) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View>
            <Text>Home Screen</Text>
        </View>
        </SafeAreaView>
    );
}
