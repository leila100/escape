import React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import Thunk from "redux-thunk";
import { init } from "./helpers/db";

import PlacesNavigator from "./navigation/PlacesNavigator";
import PlacesReducer from "./store/reducers/places";

// initialize the database
init()
  .then(() => {
    console.log("Initialized the database");
  })
  .catch(err => {
    console.log("Initializing the database failed.");
    console.log(err);
  });

const rootReducer = combineReducers({
  places: PlacesReducer
});

const store = createStore(rootReducer, applyMiddleware(Thunk));

export default function App() {
  return (
    <Provider store={store}>
      <PlacesNavigator />
    </Provider>
  );
}
