import { createStackNavigator } from "react-navigation-stack";
import About from "../screen/about";

const screens = {
  About: {
    screen: About,
    navigationOptions: {
      title: "About",
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
