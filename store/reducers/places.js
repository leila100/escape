import { ADD_PLACE, SET_PLACES } from "../actions/places";
import Place from "../../models/Place";

const initialState = {
  places: []
};

export default PlacesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLACES:
      return {
        ...state,
        places: action.places.map(pl => new Place(pl.id.toString(), pl.title, pl.imageUri, pl.address, pl.lat, pl.lng))
      };

    case ADD_PLACE:
      const { id, title, imageUri, address, coords } = action.placeData;
      const newPlace = new Place(id.toString(), title, imageUri, address, coords.lat, coords.lng);
      return {
        ...state,
        places: [newPlace, ...state.places]
      };
    default:
      return state;
  }
};
