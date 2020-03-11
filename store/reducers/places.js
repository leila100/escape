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
        places: action.places.map(pl => new Place(pl.id.toString(), pl.title, pl.imageUri))
      };

    case ADD_PLACE:
      const newPlace = new Place(action.placeData.id.toString(), action.placeData.title, action.placeData.imageUri);
      return {
        ...state,
        places: [newPlace, ...state.places]
      };
    default:
      return state;
  }
};
