import React from "react";
import authStore from "../stores/authStore";
import {
  TeamPageContainer,
  SignOutButtonText,
  TeamPageHeader,
  HeaderTitle,
  SignOutButton,
  AuthTitle,
  TeamPageButton,
  TeamPageButtonText
} from "../styles";

const TeamPage = ({ navigation, route }) => {
  
  const { team } = route.params;

  const handleSubmit = async () => {
    authStore.signout();
    navigation.replace("Signin");
  };

  const handleDelete = async () => {
    await authStore.deleteTeam(team.id);
    navigation.navigate("Teams");
  };


  const handleUpdate = async () => {
    authStore.user.TeamId = team.id
    await authStore.updateUser(authStore.user);
    navigation.navigate("Teams");
  };

  return (
    <>
      <TeamPageHeader>
        <HeaderTitle onPress={() => navigation.replace("Home")}>
          Home
        </HeaderTitle>
        <SignOutButton onPress={handleSubmit}>
          <SignOutButtonText>Sign out</SignOutButtonText>
        </SignOutButton>
      </TeamPageHeader>
      <TeamPageContainer>
        <AuthTitle>{JSON.stringify(team.teamName)}</AuthTitle>
        <AuthTitle>{JSON.stringify(team.Users)}</AuthTitle>
        <TeamPageButton onPress={handleDelete}>
          <TeamPageButtonText>Delete Team</TeamPageButtonText>
        </TeamPageButton>
        <TeamPageButton onPress={handleUpdate}>
          <TeamPageButtonText>Join Team</TeamPageButtonText>
        </TeamPageButton>
      </TeamPageContainer>
    </>
  ); 
};
export default TeamPage;
