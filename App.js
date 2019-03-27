/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from "react-native";

import ListItem from "./src/components/ListItem/ListItem";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component {
  state = {
    placeName: "",
    places: []
  };

  placeNameChangeHandler = val => {
    this.setState({ placeName: val });
  };

  submitHandler = () => {
    if (this.state.placeName === "") return;

    this.setState(prevState => ({
      places: prevState.places.concat(this.state.placeName)
    }));
  };

  render() {
    const places = this.state.places.map((place, i) => (
      <ListItem key={i} placeName={place} />
    ));
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            value={this.state.placeName}
            onChangeText={this.placeNameChangeHandler}
            style={styles.placeInput}
          />
          <Button
            style={styles.placeButton}
            title="Add"
            onPress={this.submitHandler}
          />
        </View>
        <View style={styles.listitemContainer}>{places}</View>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#FFF"
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    borderWidth: 1,
    borderColor: "red",
    width: "70%"
  },
  placeButton: {
    width: "30%"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  listitemContainer: {
    width: "100%"
  }
});
