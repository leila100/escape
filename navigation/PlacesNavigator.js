import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import PlacesList from "../screens/PlacesList";
import Place from "../screens/Place";
import NewPlace from "../screens/NewPlace";
import MapScreen from "../screens/MapScreen";
import Colors from "../constants/Colors";

const PlacesNavigator = createStackNavigator(
  {
    Places: PlacesList,
    Place: Place,
    NewPlace: NewPlace,
    Map: MapScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : ""
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primary
    }
  }
);

export default createAppContainer(PlacesNavigator);
