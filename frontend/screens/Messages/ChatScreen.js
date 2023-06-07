import * as React from 'react';
import {View, StatusBar, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const ChatScreen = ({navigation}) => {
    return (
        <View>
            <StatusBar  barStyle="dark-content" translucent={false} />
            <SafeAreaView style={{ flex: 1 }}>
                <View>
                    <Text>Message Screen</Text>
                </View>
            </SafeAreaView>
        </View>
    );
}

export default ChatScreen
