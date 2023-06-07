import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Image, ScrollView, Alert } from 'react-native';
import { Text, Card, Button } from '@rneui/themed'

export default function HomeScreen() {
    return (
        <SafeAreaView>
            <ScrollView>
        <Card>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text h4>Jihoon W</Text>
            </View>
            <Image 
            source={require('../../assets/users/user-1.jpg')} 
            style={{width: 200, height: 200, borderRadius: 200/ 2, alignSelf: 'center', marginTop: 20, marginBottom: 20}}
            />
    <Card>
        <Card.Title>Bio</Card.Title>
        <Text> Hi! I'm Jihoon. I'm 21 and recently arrived in the UK from South Korea. I'm looking for a flatshare in London. I'm a tidy person and I like to keep my room clean. I'm a non-smoker and I don't have any pets. I'm looking for a flatshare with others in the area! </Text>
    </Card>
    <Card>
        <Card.Title>Who am I looking for?</Card.Title>
        <Text>I'm looking for other Korean speakers in the area, who are also preferably in their 20s. I would like to flatshare with a neat person who doesn't mind me working long hours, but is also down to have fun and explore during the weekends!</Text>
    </Card>
    <Card>
        <Card.Title>Additional information</Card.Title>
        <Text>I have a peanut allergy, so please bear that in mind. I'm also a vegetarian, but I don't mind if you eat meat. I'm also a big fan of K-pop, so if you are too, that's a bonus! </Text>
    </Card>
    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
    <Button size="sm" type="clear" onPress={() => Alert.alert('Saved user profile')}>
        Save
    </Button>
    <Button size="sm" type="clear"onPress={() => Alert.alert('Skipped user profile')}> 
        Skip
    </Button>
    </View>
    </Card>
    </ScrollView>
        </SafeAreaView>
    );
}
