import { createStackNavigator } from "react-navigation-stack";
import Home from "../screen/home";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Home",
    },
  },
  Signin: {
    screen: Signin,
    navigationOptions: {
      title: "Signin",
    },
  },
  Stadium: {
    screen: Stadium,
    navigationOptions: {
      title: "Stadium",
    },
  },
  Team: {
    screen: Team,
    navigationOptions: {
      title: "Team",
    },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOption: {
    headerTintColor: "#444",
    headerStyle: { backgroundColor: "#eee", height: 60 },
  },
});
export default HomeStack;
