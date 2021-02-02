import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function TotalTextView() {

    const [total, setTotal] = useState(0);

    function handleTextChange(number) {
        setTotal(number)
    }

    return (
        <View>
        
            <Text onPress={() => handleTextChange(100)}>$ {total}</Text>
        
        </View>
    )

}