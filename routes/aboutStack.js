import { createStackNavigator } from "react-navigation-stack";
import About from "../screen/about";
import Header from "../shared/Header";
import React from "react";

const screens = {
  About: {
    screen: About,
    navigationOptions: {
      headerTitle: () => <Header />,
    },
  },
};

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOption: {
    headerTintColor: "#444",
    headerStyle: { backgroundColor: "#eee", height: 60 },
  },
});
export default AboutStack;
