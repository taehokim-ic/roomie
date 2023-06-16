import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

const ChatIcon = ({onPress}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.icon}>
        <AntDesign name="message1" size={30} color="black" />
        <Text style={{ marginTop: 5, color: 'black', fontWeight: 'bold' }}>Tap to Chat!</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    alignItems: 'center',
    top: -15,
    right: '3%',
  }
})

export default ChatIcon;
