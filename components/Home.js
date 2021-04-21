import React from "react";
import { View } from "react-native";
import {
  BottomStyling,
  ButtonStyled,
  TopStyling,
  AuthButton,
  AuthButtonText,
} from "../styles";
import authStore from "../stores/authStore";

const Home = ({ navigation }) => {
  const handleSubmit = async () => {
    authStore.signout();
    navigation.replace("Signin");
  };

  return (
    <View>
      <TopStyling>
        <h1>Hello Bo Sara</h1>
      </TopStyling>
      <BottomStyling>
        <ButtonStyled onPress={() => navigation.navigate("About")}>
          About
        </ButtonStyled>
        <ButtonStyled onPress={() => navigation.navigate("Fields")}>
          Fields
        </ButtonStyled>
        <ButtonStyled onPress={() => navigation.navigate("Teams")}>
          Teams
        </ButtonStyled>
        <ButtonStyled onPress={() => navigation.navigate("MyTeam")}>
          My Team
        </ButtonStyled>
      </BottomStyling>
      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Sign out</AuthButtonText>
      </AuthButton>
    </View>
  );
};

export default Home;
