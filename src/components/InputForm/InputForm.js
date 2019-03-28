import React, { Component } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

class InputForm extends Component {
  state = {
    placeName: ""
  };

  placeNameChangeHandler = val => {
    this.setState({ placeName: val });
  };

  onPressHandler = () => {
    if (this.state.placeName === "") return;
    this.props.submitHandler(this.state.placeName);
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          value={this.state.placeName}
          onChangeText={this.placeNameChangeHandler}
          style={styles.placeInput}
        />
        <Button
          style={styles.placeButton}
          title="Add"
          onPress={this.onPressHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  }
});

export default InputForm;
