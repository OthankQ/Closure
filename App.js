import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text>Pennies X </Text>
        <TextInput style={styles.input}></TextInput>
        <Text> = </Text>
        <TextInput style={styles.input}></TextInput>
      </View>

      <View style={styles.row}>
        <Text>Nickels X </Text>
        <TextInput style={styles.input}></TextInput>
        <Text> = </Text>
        <TextInput style={styles.input}></TextInput>
      </View>

      <View style={styles.row}>
        <Text>Dimes X </Text>
        <TextInput style={styles.input}></TextInput>
        <Text> = </Text>
        <TextInput style={styles.input}></TextInput>
      </View>

      <View style={styles.row}>
        <Text>Quarters X </Text>
        <TextInput style={styles.input}></TextInput>
        <Text> = </Text>
        <TextInput style={styles.input}></TextInput>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    borderWidth: 2,  // size/width of the border
    borderColor: 'lightgrey',  // color of the border
    paddingLeft: 10,
    marginLeft: 10
  },

  row: {
    flexDirection: 'row'
  }
});
