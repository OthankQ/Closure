import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import CoinCounter from './components/CoinCounter'

export default function App() {

  const [pennyCount, setPennyCount] = useState(0);
  const [nickelCount, setNickelCount] = useState(0);
  const [dimeCount, setDimeCount] = useState(0);
  const [quarterCount, setQuarterCount] = useState(0);

  // State that tracks coin total and bill total
  const [coinTotal, setCoinTotal] = useState(0);

  function addToTotal() {
    setCoinTotal(10);
  }

  return (
    <View style={styles.container}>

      <CoinCounter coinName="Pennies" style={styles.row} counter={0.01}></CoinCounter>

      <CoinCounter coinName="Nickels" style={styles.row} counter={0.05}></CoinCounter>

      <CoinCounter coinName="Dimes" style={styles.row} counter={0.10}></CoinCounter>

      <CoinCounter coinName="Quarters" style={styles.row} counter={0.25}></CoinCounter>

      {/* Whenever one of the coincounter rerenders, rerender cointotal component with new state */}

      <Text>{coinTotal}</Text>

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

  // input: {
  //   borderWidth: 2,  // size/width of the border
  //   borderColor: 'lightgrey',  // color of the border
  //   paddingLeft: 10,
  //   marginLeft: 10,
  // },

  row: {
    flexDirection: 'row',
    marginBottom: 20,
    textAlign: 'center'
  }
});
