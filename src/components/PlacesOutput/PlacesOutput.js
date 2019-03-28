import React from "react";
import { StyleSheet, View } from "react-native";

import ListItem from "../ListItem/ListItem";

const PlacesOutput = props => {
  const places = props.places.map((place, i) => (
    <ListItem
      key={i}
      placeName={place}
      onItemPressed={() => props.onItemDeleted(i)}
    />
  ));

  return <View style={styles.listitemContainer}>{places}</View>;
};

const styles = StyleSheet.create({
  listitemContainer: {
    width: "100%"
  }
});
export default PlacesOutput;
