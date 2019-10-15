import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Game is over!</Text>
      <Text>Number of Rounds: {props.numberOfRounds}</Text>
      <Text>The number was: {props.userNumber}</Text>
      <Button title="New Game" onPress={props.onRestart}/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default GameOverScreen;
