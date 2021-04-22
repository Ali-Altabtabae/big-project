import React from "react";
import TeamList from "./team/TeamList";
import authStore from "../stores/authStore";
import {
  HomeContainer,
  SignOutButtonText,
  AuthHeader,
  HeaderTitle,
  SignOutButton,
} from "../styles";

const Teams = ({ navigation }) => {
  const handleSubmit = async () => {
    authStore.signout();
    navigation.replace("Signin");
  };

  return (
    <>
      <AuthHeader>
        <HeaderTitle onPress={() => navigation.replace("Home")}>Home</HeaderTitle>
        <SignOutButton onPress={handleSubmit}>
          <SignOutButtonText>Sign out</SignOutButtonText>
        </SignOutButton>
      </AuthHeader>
        <TeamList />
    </>
  );
};
export default Teams;
