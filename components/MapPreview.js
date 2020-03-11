import React from "react";
import { StyleSheet, Image, View } from "react-native";

import ENV from "../env";

const MapPreview = props => {
  let imagePreview;
  if (props.location) {
    imagePreview = `https://maps.googleapis.com/maps/api/staticmap?center=${props.location.lat},${props.location.lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:A%7C${props.location.lat},${props.location.lng}&key=${ENV.googleApiKey}`;
    console.log(imagePreview);
  }
  return (
    <View style={{ ...styles.mapPreview, ...props.style }}>
      {props.location ? <Image style={styles.mapImage} source={{ uri: imagePreview }} /> : props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  mapPreview: {
    alignItems: "center",
    justifyContent: "center"
  },
  mapImage: {
    width: "100%",
    height: "100%"
  }
});

export default MapPreview;
