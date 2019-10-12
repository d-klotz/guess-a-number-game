import React, { useState } from 'react';
import { 
  View, 
  Text, 
  Button, 
  StyleSheet, 
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';
import Colors from '../constants/colors';

const StartGameScreen = () => {

  const [enteredValue, SetEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = inputText => {
    SetEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  const resetInputHandler = () => {
    SetEnteredValue('');
    setConfirmed(false);
  }

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid number!', 
        'The number has to be between 1 and 99.', 
        [{text: 'Okay', style:'destructive', onPress: resetInputHandler}])
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    SetEnteredValue('');
  }

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = <Text>Chosen number: {selectedNumber}</Text>
  }

  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a new game!</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a number</Text>
          <Input 
            style={styles.input} 
            keyboardType="number-pad" 
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}/>
          <View style={styles.buttonContainer}>
            <View style={styles.button}><Button title="Reset" color={Colors.secondary} onPress={resetInputHandler}/></View>
            <View style={styles.button}><Button title="Confirm" color={Colors.primary} onPress={confirmInputHandler}/></View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  button: {
    width: 90
  },
  input: {
    width: 50,
    textAlign: 'center'
  }
});

export default StartGameScreen;