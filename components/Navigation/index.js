import React from "react";

// Stack Navigator
import { createStackNavigator } from "@react-navigation/stack";

//Components
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";
import Home from "../Home";
import About from "../About";
import Fields from "../Fields";
import Teams from "../Teams";
import TeamPage from "../TeamPage";
import FieldPage from "../FieldPage";
import MyTeam from "../MyTeam";

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
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen name="About" component={About} options={{ headerShown: false }} />
      <Screen
        name="Fields"
        component={Fields}
        options={{ headerShown: false }}
      />
      <Screen name="Teams" component={Teams} options={{ headerShown: false }} />
      <Screen
        name="MyTeam"
        component={MyTeam}
        options={{ headerShown: false }}
      />
      <Screen
        name="TeamPage"
        component={TeamPage}
        options={{ headerShown: false }}
      />
      <Screen
        name="FieldPage"
        component={FieldPage}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

export default RootNavigator;
