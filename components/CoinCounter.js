import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function CoinCounter(props) {

    const [coinCount, setCoinCount] = useState(0);

    return(
        <View style={props.style}>
            <Text>{props.coinName} X </Text>
            <TextInput onChangeText={(number) => {setCoinCount(number); props.count(number)}} style={styles.input} keyboardType={"number-pad"}></TextInput>
            <Text> = </Text>
            <Text>$ {(coinCount * props.counter).toFixed(2)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    input: {
        borderWidth: 2,  // size/width of the border
        borderColor: 'lightgrey',  // color of the border
        paddingLeft: 10,
        marginLeft: 10,
        width: 80
    }
})