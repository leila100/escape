import React, { useState } from "react";
import { StyleSheet, TextInput, View, Text, ScrollView, Button } from "react-native";
import Colors from "../constants/Colors";

const NewPlace = () => {
  const [placeName, setPlaceName] = useState("");

  const titleChangeHandler = text => {
    setPlaceName(text);
  };

  const savePlaceHandler = () => {};

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput style={styles.input} value={placeName} onChangeText={titleChangeHandler} />
        <Button title='Save Place' color={Colors.primary} onPress={savePlaceHandler} />
      </View>
    </ScrollView>
  );
};

NewPlace.navigationOptions = {
  headerTitle: "Add Place"
};

const styles = StyleSheet.create({
  form: {
    margin: 30
  },
  label: {
    fontSize: 18,
    marginBottom: 15
  },
  input: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2
  }
});

export default NewPlace;
