import React from "react";

// Stack Navigator
import { createStackNavigator } from "@react-navigation/stack";

//Components
import Signin from "../authentication/Signin";
import Home from "../Home";
import About from "../About";
import MyTeam from "../MyTeam";

const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator initialRouteName="Signin">

      <Screen name="MyTeam" component={MyTeam} />
      <Screen name="Home" component={Home} />

    
      <Screen name="About" component={About} />
    </Navigator>
  );
};

export default RootNavigator;
