import React from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

const InputForm = props => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={props.placeName}
        onChangeText={props.placeNameChangeHandler}
        style={styles.placeInput}
      />
      <Button
        style={styles.placeButton}
        title="Add"
        onPress={props.submitHandler}
      />
    </View>
  );
};

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
