import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ListItem = props => (
  <View style={styles.listitem}>
    <Text>{props.placeName}</Text>
  </View>
);

const styles = StyleSheet.create({
  listitem: {
    width: "100%",
    padding: 10,
    backgroundColor: "#eee"
  }
});

export default ListItem;
