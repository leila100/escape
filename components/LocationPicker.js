import React, { useState } from "react";
import { StyleSheet, Text, View, Button, ActivityIndicator, Alert } from "react-native";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

import MapPreview from "./MapPreview";
import Colors from "../constants/Colors";

// Only needed for IOS. It's automatic in android
const verifyPermissions = async () => {
  const result = await Permissions.askAsync(Permissions.LOCATION);
  if (result.status !== "granted") {
    Alert.alert("Insufficient permissions!", "Please grant location permissions to use this app.", [{ text: "OK" }]);
    return false;
  }
  return true;
};

const LocationPicker = props => {
  const [isFetching, setIsFetching] = useState(false);
  const [pickedLocation, setPickerLocation] = useState();

  const getLocationHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) return;
    try {
      setIsFetching(true);
      const location = await Location.getCurrentPositionAsync({ timeout: 5000 });
      setPickerLocation({ lat: location.coords.latitude, lng: location.coords.longitude });
    } catch (err) {
      Alert.alert("Could not fetch location!", "Please try again later or pick a location on the map.", [
        { text: "ok" }
      ]);
    }
    setIsFetching(false);
  };

  const pickOnMapHandler = () => {
    props.navigation.navigate("Map");
  };

  return (
    <View style={styles.locationPicker}>
      <MapPreview style={styles.mapPreview} location={pickedLocation} onPress={pickOnMapHandler}>
        {isFetching ? <ActivityIndicator size='large' color={Colors.primary} /> : <Text>No location chosen yet!</Text>}
      </MapPreview>
      <View style={styles.actions}>
        <Button title='Get User Location' color={Colors.primary} onPress={getLocationHandler} />
        <Button title='Pick on Map' color={Colors.primary} onPress={pickOnMapHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  locationPicker: {
    marginBottom: 15
  },
  mapPreview: {
    marginBottom: 10,
    width: "100%",
    height: 150,
    borderColor: "#ccc",
    borderWidth: 1
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%"
  }
});

export default LocationPicker;
