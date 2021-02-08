import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function InputBar(props) {

    return (
        <TextInput onChangeText={(number) => {setCoinCount(number); props.count(number)}} style={styles.input} keyboardType={"number-pad"}></TextInput>
    )

}

const styles = StyleSheet.create({

    input: {
        borderWidth: 1,  // size/width of the border
        borderColor: 'lightgrey',  // color of the border
        paddingLeft: 10,
        marginLeft: 10,
        width: 80,
    },

})