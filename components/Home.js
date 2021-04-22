import React from "react";
import { View } from "react-native";
import {
  HomeContainer,
  ButtonStyled,
  SignOutButtonText,
  HomeButton,
  AuthHeader,
  HeaderTitle,
  SignOutButton,
  HomeButtonText,
} from "../styles";
import authStore from "../stores/authStore";

const Home = ({ navigation }) => {
  const handleSubmit = async () => {
    authStore.signout();
    navigation.replace("Signin");
  };

  return (
    <>
      <AuthHeader>
        <HeaderTitle>Home</HeaderTitle>
        <SignOutButton onPress={handleSubmit}>
          <SignOutButtonText>Sign out</SignOutButtonText>
        </SignOutButton>
      </AuthHeader>
      <HomeContainer>
        <HomeButton onPress={() => navigation.navigate("About")}>
          <HomeButtonText>About</HomeButtonText>
        </HomeButton>
        <HomeButton onPress={() => navigation.navigate("Fields")}>
          <HomeButtonText>Fields</HomeButtonText>
        </HomeButton>
        <HomeButton onPress={() => navigation.navigate("Teams")}>
          <HomeButtonText>Teams</HomeButtonText>
        </HomeButton>
        <HomeButton onPress={() => navigation.navigate("MyTeam")}>
          <HomeButtonText>My Team</HomeButtonText>
        </HomeButton>
      </HomeContainer>
    </>
  );
};

export default Home;
