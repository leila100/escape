import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Place = () => {
  return (
    <View>
      <Text>Place Screen!</Text>
    </View>
  );
};

Place.navigationOptions = navData => {
  const title = navData.navigation.getParam("placeTitle");
  return {
    headerTitle: title
  };
};
const styles = StyleSheet.create({});

export default Place;
