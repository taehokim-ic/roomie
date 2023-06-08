import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const ProfileTextbox = ({label}) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (text) => {
        setInputValue(text);
    };

    return (
        <View style={styles.row}>
            <Text >Test</Text>
            <TextInput onChangeText={handleInputChange} />
      </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    input: {
        padding: 8,
        marginBottom: 16,
    },
});
