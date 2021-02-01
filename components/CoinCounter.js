import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function CoinCounter(props) {
    return(
        <View>
            <Text>This is a {props.whatCoin} counter card</Text>
        </View>
    )
}