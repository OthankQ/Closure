import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function CounterRow(props) {

    const [coinCount, setCoinCount] = useState(0);

    return(
        <View style={props.style}>
            <Text style={styles.baseText}>{props.coinName}    X </Text>
            <TextInput placeholder="Count" onChangeText={(number) => {setCoinCount(number); props.count(number)}} style={styles.input} keyboardType={"number-pad"}></TextInput>
            <Text style={styles.baseText}>    =    </Text>
            <Text style={styles.baseText}>$ {(coinCount * props.counter).toFixed(2)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    input: {
        borderWidth: 0.5,  // size/width of the border
        borderColor: 'lightgrey',  // color of the border
        paddingLeft: 10,
        marginLeft: 10,
        width: 80,
        marginTop: 5,
        marginBottom: 5
    },

    baseText: {
        fontSize: 18,
      }
})