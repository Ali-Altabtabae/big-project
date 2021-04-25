import React, { useState } from "react";

import {
  HomeContainer,
  SignOutButtonText,
  HomeButton,
  AuthHeader,
  HeaderTitle,
  SignOutButton,
  HomeButtonText,
  AuthTextInput,
} from "../styles";
import authStore from "../stores/authStore";

const Home = ({ navigation }) => {
  const [team, setTeam] = useState({
    teamName: "",
  });

  const handleSubmit = async () => {
    authStore.signout();
    navigation.replace("Signin");
  };

  const handleAdd = async () => {
    await authStore.createTeam(team);
    navigation.navigate("Teams");
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
        <AuthTextInput
          onChangeText={(teamName) => setTeam({ ...team, teamName })}
          placeholder="team name"
          placeholderTextColor="#A6AEC1"
        />
        <HomeButton onPress={handleAdd}>
          <HomeButtonText>Add Team</HomeButtonText>
        </HomeButton>
      </HomeContainer>
    </>
  );
};

export default Home;
