import React from "react";
import TeamList from "./team/TeamList";
import authStore from "../stores/authStore";
import {
  SignOutButtonText,
  TeamPageHeader,
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
      <TeamPageHeader>
        <HeaderTitle onPress={() => navigation.replace("Home")}>
          Home
        </HeaderTitle>
        <SignOutButton onPress={handleSubmit}>
          <SignOutButtonText>Sign out</SignOutButtonText>
        </SignOutButton>
      </TeamPageHeader>
        <TeamList navigation={navigation}/>
    </>
  );
};
export default Teams;
