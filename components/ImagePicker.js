import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Image, Alert } from "react-native";
import * as ImgPicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

import Colors from "../constants/Colors";

const ImagePicker = props => {
  const [pickedImage, setPickedImage] = useState();

  // Only needed for IOS. It's automatic in android
  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL);
    if (result.status !== "granted") {
      Alert.alert("Insufficient permissions!", "Please grant camera permissions to use this app.", [{ text: "OK" }]);
      return false;
    }
    return true;
  };

  const takeImageHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) return;
    const image = await ImgPicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5
    });
    setPickedImage(image.uri);
  };

  return (
    <View style={styles.imagePicker}>
      <View style={styles.imagePreview}>
        {!pickedImage ? (
          <Text>No image picked yet.</Text>
        ) : (
          <Image style={styles.image} source={{ uri: pickedImage }} />
        )}
      </View>
      <Button title='Take Image' color={Colors.primary} onPress={takeImageHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  imagePicker: {
    alignItems: "center"
  },
  imagePreview: {
    width: "100%",
    height: 200,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1
  },
  image: {
    width: "100%",
    height: "100%"
  }
});

export default ImagePicker;
