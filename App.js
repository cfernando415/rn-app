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
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";

export default class App extends Component {
  state = {
    places: [],
    selectedPlace: null
  };

  submitHandler = place => {
    this.setState(prevState => ({
      places: prevState.places.concat({
        key: Math.random(),
        name: place,
        image: {
          uri: "https://c1.staticflickr.com/5/4096/4744241983_34023bf303_b.jpg"
        }
      })
    }));
  };

  deleteHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null
      };
    });
  };

  modalClosedHandler = () => {
    this.setState({
      selectedPlace: null
    });
  };

  selectedPlaceHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => place.key === key)
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.state.selectedPlace}
          onItemDeleted={this.deleteHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <InputForm submitHandler={this.submitHandler} />
        <PlacesOutput
          places={this.state.places}
          onItemSelected={this.selectedPlaceHandler}
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
