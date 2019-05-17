/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import { Counter } from 'NativeModules'
import { NativeEventEmitter } from 'react-native'


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = { count: Counter.initialCount }
    this.CounterEvents = new NativeEventEmitter(Counter)
    this.CounterEvents.addListener(
      "onIncrement",
      res => this.setState({count: res.count})
    )
    this.CounterEvents.addListener(
      "onDecrement",
      res => this.setState({count: res.count})
    )
  }

  increment = () => {
    Counter.increment()
    console.warn("increment was called!")
  }

  decrement = () => {
    Counter.decrement()
    console.warn("decrement was called!")
  }

  componentWillUnmount() {
    console.warn("unmount called")
    CounterEvents.removeListener();
  }

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.welcome}> iOS Native Module Demo </Text>
        <Button
          onPress={this.increment}
          title="+"
          color="#841584"
          accessibilityLabel="Add 1"
        />
        <Text> {this.state.count} </Text>
        <Button
          onPress={this.decrement}
          title="-"
          color="#841584"
          accessibilityLabel="Subtract 1"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
