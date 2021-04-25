import React from "react";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import {
  HomeContainer,
  AuthHeader,
  HeaderTitle,
  SignOutButton,
  SignOutButtonText,
} from "../styles";
import authStore from "../stores/authStore";

const About = ({ navigation }) => {
  const handleSubmit = async () => {
    authStore.signout();
    navigation.replace("Signin");
  };

  return (
    <>
      <AuthHeader>
        <HeaderTitle onPress={() => navigation.replace("Home")}>
          Home
        </HeaderTitle>
        <SignOutButton onPress={handleSubmit}>
          <SignOutButtonText>Sign out</SignOutButtonText>
        </SignOutButton>
      </AuthHeader>
      <HomeContainer>
        <Calendar current={'2012-03-01'}/>
      </HomeContainer>
    </>
  );
};

export default About;
