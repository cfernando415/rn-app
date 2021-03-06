import React from "react";
import { StyleSheet, FlatList } from "react-native";

import ListItem from "../ListItem/ListItem";

const PlacesOutput = props => {
  return (
    <FlatList
      style={styles.listitemContainer}
      data={props.places}
      keyExtractor={item => item.key.toString()}
      renderItem={info => (
        <ListItem
          placeName={info.item.name}
          placeImage={info.item.image}
          onItemPressed={() => props.onItemSelected(info.item.key)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  listitemContainer: {
    width: "100%"
  }
});
export default PlacesOutput;
