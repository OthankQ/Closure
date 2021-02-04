import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import CoinCounter from './components/CoinCounter'
import TotalTextView from './components/TotalTextView'

export default function App() {

  const [pennyCount, setPennyCount] = useState(0);
  const [nickelCount, setNickelCount] = useState(0);
  const [dimeCount, setDimeCount] = useState(0);
  const [quarterCount, setQuarterCount] = useState(0);

  const [dollarBillCount, setDollarBillCount] = useState(0);
  const [fiveDollarBillCount, set5DollarBillCount] = useState(0);
  const [tenDollarBillCount, set10DollarBillCount] = useState(0);
  const [twentyDollarBillCount, set20DollarBillCount] = useState(0);
  const [fiftyDollarBillCount, set50DollarBillCount] = useState(0);
  const [hundredDollarBillCount, set100DollarBillCount] = useState(0);

  const [openingAmount, setOpeningAmount] = useState(0);


  // State that tracks coin total and bill total
  // const [coinTotal, setCoinTotal] = useState(0);
  // const [billTotal, setBillTotal] = useState(0);


  // I am working on a function to catch the change in TEXT from CoinCounter.js and update coinTotal State
  function addToTotal() {
    console.log('addtototal triggerd')
  }


  let coinTotal = (parseFloat(pennyCount*0.01) + parseFloat(nickelCount*0.05) + parseFloat(dimeCount*0.10) + parseFloat(quarterCount*0.25)).toFixed(2)

  let billTotal = (parseFloat(dollarBillCount*1.00) + parseFloat(fiveDollarBillCount*5.00) + parseFloat(tenDollarBillCount*10.00) + parseFloat(twentyDollarBillCount*20.00) + parseFloat(fiftyDollarBillCount*50.00) + parseFloat(hundredDollarBillCount*100.00)).toFixed(2)

  let subTotal = (parseFloat(coinTotal) + parseFloat(billTotal)).toFixed(2)

  let grandTotal = (parseFloat(subTotal) - parseFloat(openingAmount)).toFixed(2)

  return (
    <View style={styles.container}>

      <CoinCounter coinName="Pennies" style={styles.row} counter={0.01} count={setPennyCount}></CoinCounter>

      <CoinCounter coinName="Nickels" style={styles.row} counter={0.05} count={setNickelCount}></CoinCounter>

      <CoinCounter coinName="Dimes" style={styles.row} counter={0.10} count={setDimeCount}></CoinCounter>

      <CoinCounter coinName="Quarters" style={styles.row} counter={0.25} count={setQuarterCount}></CoinCounter>

      {/* Whenever one of the coincounter rerenders, rerender cointotal component with new state */}
      <View style={styles.row}>
        <Text>Coin Total: ${coinTotal}</Text>
      </View>


      <CoinCounter coinName="1 Dollar Bill" style={styles.row} counter={1.00} count={setDollarBillCount}></CoinCounter>

      <CoinCounter coinName="5 Dollar Bill" style={styles.row} counter={5.00} count={set5DollarBillCount}></CoinCounter>

      <CoinCounter coinName="10 Dollar Bill" style={styles.row} counter={10.00} count={set10DollarBillCount}></CoinCounter>

      <CoinCounter coinName="20 Dollar Bill" style={styles.row} counter={20.00} count={set20DollarBillCount}></CoinCounter>

      <CoinCounter coinName="50 Dollar Bill" style={styles.row} counter={50.00} count={set50DollarBillCount}></CoinCounter>

      <CoinCounter coinName="100 Dollar Bill" style={styles.row} counter={100.00} count={set100DollarBillCount}></CoinCounter>

      <View style={styles.row}>
        <Text>Bill Total: ${billTotal}</Text>
      </View>

      <View style={styles.row}>
        <Text>Sub Total: ${subTotal}</Text>
      </View>

      <View style={styles.row}>
        <Text>Opening Amount: $</Text>
        <TextInput onChangeText={(number) => setOpeningAmount(number)} style={styles.input} keyboardType={"number-pad"}></TextInput>
      </View>

      

      <View style={styles.row}>
        <Text>Grand Total: ${grandTotal}</Text>
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

  // input: {
  //   borderWidth: 2,  // size/width of the border
  //   borderColor: 'lightgrey',  // color of the border
  //   paddingLeft: 10,
  //   marginLeft: 10,
  // },

  input: {
    borderWidth: 2,  // size/width of the border
    borderColor: 'lightgrey',  // color of the border
    paddingLeft: 10,
    marginLeft: 10,
    width: 80
  },

  row: {
    flexDirection: 'row',
    marginBottom: 20,
    textAlign: 'center'
  }
});
