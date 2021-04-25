import { createDrawerNavigator}  from 'react-navigation-drawer'
import { createAppContainer}  from 'react-navigation'
import About from "../About";
import Home from "../Home";

const RootDrawer = createDrawerNavigator({
  Home: {
    screen: "Home",
    component: Home
  },
  Ali: {
    screen: "About",
    component: About
  }
})

export default createAppContainer(RootDrawer)