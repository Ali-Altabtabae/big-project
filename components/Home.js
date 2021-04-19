import React from "react";
import { View } from "react-native";
import { BottomStyling, ButtonStyled, TopStyling } from "../styles";

const Home = ({ navigation }) => {
  return (
    <View>
      <TopStyling>
        <h1>Hello Bo Sara</h1>
      </TopStyling>
      <BottomStyling>
        <ButtonStyled onPress={() => navigation.navigate("About")}>
          About Page
        </ButtonStyled>
      </BottomStyling>
    </View>
  );
};

export default Home;
