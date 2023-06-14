import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

const ChatIcon = () => {
  const navigation = useNavigation();

  const handleChatPress = () => {
    navigation.navigate('Compatibility');
  };

  return (
    <TouchableOpacity onPress={handleChatPress}>
      <View style={styles.icon}>
        <AntDesign name="message1" size={36} color="white" />
        <Text style={{ marginTop: 5, color: 'white', fontWeight: 'bold' }}>Tap to Chat!</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    alignItems: 'center',
    marginTop: '10%',
    right: '3%',
  }
})

export default ChatIcon;
