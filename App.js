import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [pennyCount, setPennyCount] = useState(0);
  const [nickelCount, setNickelCount] = useState(0);
  const [dimeCount, setDimeCount] = useState(0);
  const [quarterCount, setQuarterCount] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text>Pennies X </Text>
        <TextInput onChangeText={number => setPennyCount(number)} style={styles.input} keyboardType={"number-pad"}></TextInput>
        <Text> = </Text>
        <Text>$ {(pennyCount * 0.01).toFixed(2)}</Text>
      </View>

      <View style={styles.row}>
        <Text>Nickels X </Text>
        <TextInput onChangeText={number => setNickelCount(number)} style={styles.input} keyboardType={"number-pad"}></TextInput>
        <Text> = </Text>
        <Text>$ {(nickelCount * 0.05).toFixed(2)}</Text>
      </View>

      <View style={styles.row}>
        <Text>Dimes X </Text>
        <TextInput onChangeText={number => setDimeCount(number)} style={styles.input} keyboardType={"number-pad"}></TextInput>
        <Text> = </Text>
        <Text>$ {(dimeCount * 0.10).toFixed(2)}</Text>
      </View>

      <View style={styles.row}>
        <Text>Quarters X </Text>
        <TextInput onChangeText={number => setQuarterCount(number)} style={styles.input} keyboardType={"number-pad"}></TextInput>
        <Text> = </Text>
        <Text>$ {(quarterCount * 0.25).toFixed(2)}</Text>
      </View>

      <View style={styles.row}>
        <Text>Coin Total = </Text>
        <Text>$ {(pennyCount * 0.01 + nickelCount * 0.05 + dimeCount * 0.10 + quarterCount * 0.25).toFixed(2)}</Text>
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
    marginLeft: 10,
  },

  row: {
    flexDirection: 'row',
    marginBottom: 20,
  }
});
