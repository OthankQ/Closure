import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';

import Counter from './components/Counter'
// import TotalTextView from './components/TotalTextView'

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
  const [recordedAmount, setRecordedAmount] = useState(0);


  // State that tracks coin total and bill total
  // const [coinTotal, setCoinTotal] = useState(0);
  // const [billTotal, setBillTotal] = useState(0);


 // All the calculations of the totals are done here
  let coinTotal = (parseFloat(pennyCount*0.01) + parseFloat(nickelCount*0.05) + parseFloat(dimeCount*0.10) + parseFloat(quarterCount*0.25)).toFixed(2)

  let billTotal = (parseFloat(dollarBillCount*1.00) + parseFloat(fiveDollarBillCount*5.00) + parseFloat(tenDollarBillCount*10.00) + parseFloat(twentyDollarBillCount*20.00) + parseFloat(fiftyDollarBillCount*50.00) + parseFloat(hundredDollarBillCount*100.00)).toFixed(2)

  let subTotal = (parseFloat(coinTotal) + parseFloat(billTotal)).toFixed(2)

  let grandTotal = (parseFloat(subTotal) - parseFloat(openingAmount)).toFixed(2)

  return (

    
    <ScrollView contentContainerStyle={styles.wrapper}>

    {/* Coin Calculations are done here */}
      <Counter coinName="Pennies" style={styles.row} counter={0.01} count={setPennyCount}></Counter>

      <Counter coinName="Nickels" style={styles.row} counter={0.05} count={setNickelCount}></Counter>

      <Counter coinName="Dimes" style={styles.row} counter={0.10} count={setDimeCount}></Counter>

      <Counter coinName="Quarters" style={styles.row} counter={0.25} count={setQuarterCount}></Counter>

      {/* Whenever one of the counter rerenders, rerender cointotal component with new state */}

      <View style={styles.row}>
        <Text>Coin Total: ${coinTotal}</Text>
      </View>

      {/* Bill Calculations are done here */}
    
      <Counter coinName="1 Dollar Bill" style={styles.row} counter={1.00} count={setDollarBillCount}></Counter>

      <Counter coinName="5 Dollar Bill" style={styles.row} counter={5.00} count={set5DollarBillCount}></Counter>

      <Counter coinName="10 Dollar Bill" style={styles.row} counter={10.00} count={set10DollarBillCount}></Counter>

      <Counter coinName="20 Dollar Bill" style={styles.row} counter={20.00} count={set20DollarBillCount}></Counter>

      <Counter coinName="50 Dollar Bill" style={styles.row} counter={50.00} count={set50DollarBillCount}></Counter>

      <Counter coinName="100 Dollar Bill" style={styles.row} counter={100.00} count={set100DollarBillCount}></Counter>

      <View style={styles.row}>
        <Text>Bill Total: ${billTotal}</Text>
      </View>

      {/* Coin Total + Bill Total */}
      <View style={styles.row}>
        <Text>Sub Total(Coin Total + Bill Total): ${subTotal}</Text>
      </View>

      {/* Opening amount of the day */}
      <View style={styles.row}>
        <Text>Opening Amount: $</Text>
        <TextInput onChangeText={(number) => setOpeningAmount(number)} style={styles.input} keyboardType={"number-pad"}></TextInput>
      </View>

      {/* Total counted minus the opening amount */}
      <View style={styles.row}>
        <Text>Grand Total(Sub Total - Opening Amount): $ {grandTotal}</Text>
      </View>

      {/* Total amount recorded on the register. */}
      <View style={styles.row}>
        <Text>Recorded Total: $</Text>
        <TextInput onChangeText={(number) => setRecordedAmount(number)} style={styles.input} keyboardType={"number-pad"}></TextInput>
      </View>

      {/* Shows how much you are short or over or even by. */}
      <View style={styles.row}>
        <Text>Result(Grand Total - Recorded Total): $ {(grandTotal - recordedAmount).toFixed(2)}</Text>
      </View>


      <StatusBar style="auto" />
    </ScrollView>
  );
}

// Styles
const styles = StyleSheet.create({

  wrapper: {
    flexGrow:1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 80,
    borderColor: 'red',
    borderWidth: 1
  },

  input: {
    borderWidth: 1,  // size/width of the border
    borderColor: 'lightgrey',  // color of the border
    paddingLeft: 10,
    marginLeft: 10,
    width: 80,
    marginTop: 5,
    marginBottom: 5
  },

  row: {
    flexGrow: 1,
    flexDirection: 'row',
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width: 400,
    borderColor: 'red',
    borderWidth: 1
  }
});
