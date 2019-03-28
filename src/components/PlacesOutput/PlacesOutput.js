import React from "react";
import { StyleSheet, ScrollView } from "react-native";

import ListItem from "../ListItem/ListItem";

const PlacesOutput = props => {
  const places = props.places.map((place, i) => (
    <ListItem
      key={i}
      placeName={place}
      onItemPressed={() => props.onItemDeleted(i)}
    />
  ));

  return <ScrollView style={styles.listitemContainer}>{places}</ScrollView>;
};

const styles = StyleSheet.create({
  listitemContainer: {
    width: "100%"
  }
});
export default PlacesOutput;
