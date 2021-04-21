import React from "react";

// Stack Navigator
import { createStackNavigator } from "@react-navigation/stack";

//Components
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";
import Home from "../Home";
import About from "../About";
import Fields from "../Fields"


import Fields from "../Fields"


const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator initialRouteName="Signin">

<Screen
        name="Signin"
        component={Signin}
        options={{ headerShown: false }}
      />
      <Screen name="Signup" component={Signup} />
      <Screen name="Home" component={Home} />
     <Screen name="About" component={About} />
      <Screen name="Fields" component={Fields} />




    </Navigator>
  );
};

export default RootNavigator;
