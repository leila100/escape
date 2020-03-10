import * as FileSystem from "expo-file-system";

import { insertPlace } from "../../helpers/db";

export const ADD_PLACE = "ADD_PLACE";

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
