/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import InputForm from "./src/components/InputForm/InputForm";
import PlacesOutput from "./src/components/PlacesOutput/PlacesOutput";

export default class App extends Component {
  state = {
    places: []
  };

  submitHandler = place => {
    this.setState(prevState => ({
      places: prevState.places.concat({ key: Math.random(), value: place })
    }));
  };

  deleteHandler = id => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== id;
        })
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <InputForm submitHandler={this.submitHandler} />
        <PlacesOutput
          places={this.state.places}
          onItemDeleted={this.deleteHandler}
        />
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
  }
});
