import React from "react";

// Stack Navigator
import { createStackNavigator } from "@react-navigation/stack";

//Components
import Home from "../Home";
import About from "../About";

const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={Home} />
      <Screen name="About" component={About} />
    </Navigator>
  );
};

export default RootNavigator;
