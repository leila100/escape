import { ADD_PLACE } from "../actions/places";
import Place from "../../models/Place";

const initialState = {
  places: []
};

export default PlacesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      const newPlace = new Place(new Date().toString(), action.placeData.title);
      return {
        ...state,
        places: [newPlace, ...state.places]
      };
    default:
      return state;
  }
};
