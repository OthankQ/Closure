import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';

import CounterRow from './components/CounterRow'
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


 // All the calculations of the totals are done here
  let coinTotal = (parseFloat(pennyCount*0.01) + parseFloat(nickelCount*0.05) + parseFloat(dimeCount*0.10) + parseFloat(quarterCount*0.25)).toFixed(2)

  let billTotal = (parseFloat(dollarBillCount*1.00) + parseFloat(fiveDollarBillCount*5.00) + parseFloat(tenDollarBillCount*10.00) + parseFloat(twentyDollarBillCount*20.00) + parseFloat(fiftyDollarBillCount*50.00) + parseFloat(hundredDollarBillCount*100.00)).toFixed(2)

  let subTotal = (parseFloat(coinTotal) + parseFloat(billTotal)).toFixed(2)

  let grandTotal = (parseFloat(subTotal) - parseFloat(openingAmount)).toFixed(2)

  function isEven() {
    if (grandTotal == 0.00) {
      return true
    } else {
      return false
    }
  }

  return (

    
    <ScrollView contentContainerStyle={styles.wrapper}>

    {/* Coin Calculations are done here */}
      <CounterRow coinName="Pennies" style={styles.row} counter={0.01} count={setPennyCount}></CounterRow>

      <CounterRow coinName="Nickels" style={styles.row} counter={0.05} count={setNickelCount}></CounterRow>

      <CounterRow coinName="Dimes" style={styles.row} counter={0.10} count={setDimeCount}></CounterRow>

      <CounterRow coinName="Quarters" style={styles.row} counter={0.25} count={setQuarterCount}></CounterRow>

      {/* Whenever one of the counter rerenders, rerender cointotal component with new state */}

      <View style={styles.row}>
        <Text style={styles.baseText}>Coin Total   :   ${coinTotal}</Text>
      </View>

      {/* Bill Calculations are done here */}
    
      <CounterRow coinName="1 Dollar Bill" style={styles.row} counter={1.00} count={setDollarBillCount}></CounterRow>

      <CounterRow coinName="5 Dollar Bill" style={styles.row} counter={5.00} count={set5DollarBillCount}></CounterRow>

      <CounterRow coinName="10 Dollar Bill" style={styles.row} counter={10.00} count={set10DollarBillCount}></CounterRow>

      <CounterRow coinName="20 Dollar Bill" style={styles.row} counter={20.00} count={set20DollarBillCount}></CounterRow>

      <CounterRow coinName="50 Dollar Bill" style={styles.row} counter={50.00} count={set50DollarBillCount}></CounterRow>

      <CounterRow coinName="100 Dollar Bill" style={styles.row} counter={100.00} count={set100DollarBillCount}></CounterRow>

      <View style={styles.row}>
        <Text style={styles.baseText}>Bill Total   :   $ {billTotal}</Text>
      </View>

      {/* Coin Total + Bill Total */}
      <View style={styles.row}>
        <Text style={styles.baseText}>Coin Total + Bill Total   :   $ {subTotal}</Text>
      </View>

      {/* Opening amount of the day */}
      <View style={styles.row}>
        <Text style={styles.baseText}>Opening Amount   :   $ </Text>
        <TextInput placeholder="Amount" onChangeText={(number) => setOpeningAmount(number)} style={styles.input} keyboardType={"number-pad"}></TextInput>
      </View>

      {/* Total counted minus the opening amount */}
      <View style={styles.row}>
        <Text style={styles.baseText}>Sub Total - Opening Amount   :   $ {grandTotal}</Text>
      </View>

      {/* Total amount recorded on the register. */}
      <View style={styles.row}>
        <Text style={styles.baseText}>Recorded Total   :   $</Text>
        <TextInput placeholder="Amount" onChangeText={(number) => setRecordedAmount(number)} style={styles.input} keyboardType={"number-pad"}></TextInput>
      </View>

      {/* Shows how much you are short or over or even by. */}
      <View style={styles.row, {bottomBorderWidth: 0, margin: 20, width: 420, alignItems: 'center'}}>
        <Text style={styles.baseText}>Result(Counted Total - Recorded Total)   :   </Text>
      </View>

      <View style={styles.row, {width: 420}, isEven() ? styles.even : styles.notEven}>
        <Text style={styles.baseText}>$ {(grandTotal - recordedAmount).toFixed(2)}</Text>
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
    // borderColor: 'red',
    borderWidth: 1,
    alignSelf: 'stretch',

  },

  input: {
    borderWidth: 0.5,  // size/width of the border
    borderColor: 'lightgrey',  // color of the border
    paddingLeft: 10,
    marginLeft: 10,
    width: 80,
  },

  row: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 420,
    // alignSelf: 'stretch',

    fontSize: 400,
    borderBottomColor: 'grey',
    borderBottomWidth: 0.3,
    paddingTop: 20,
    paddingBottom: 20,
    height: 100
  },

  baseText: {
    fontSize: 18,
  },

  even: {
    backgroundColor: 'lightgreen',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
  },

  notEven: {
    backgroundColor: 'pink',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
  }
});
