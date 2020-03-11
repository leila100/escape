import * as FileSystem from "expo-file-system";

import { insertPlace, fetchPlaces } from "../../helpers/db";

export const ADD_PLACE = "ADD_PLACE";
export const SET_PLACES = "SET_PLACES";

export const addPlace = (title, imageUri) => {
  return async dispatch => {
    const fileName = imageUri.split("/").pop();
    const newPath = FileSystem.documentDirectory + fileName;
    try {
      await FileSystem.moveAsync({
        from: imageUri,
        to: newPath
      });
      const dbResult = await insertPlace(title, newPath, "Dummy Address", 15.6, 12.3);
      dispatch({ type: ADD_PLACE, placeData: { id: dbResult.insertId, title, imageUri: newPath } });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};

export const loadPlaces = () => {
  return async dispatch => {
    try {
      const dbResult = await fetchPlaces();
      dispatch({ type: SET_PLACES, places: dbResult.rows._array });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};
