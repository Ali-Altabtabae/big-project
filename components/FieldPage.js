import React from "react";
import authStore from "../stores/authStore";
import {
  FieldContainer,
  SignOutButtonText,
  FieldHeader,
  HeaderTitle,
  SignOutButton,
  AuthTitle,
  FieldButton,
  FieldButtonText,
} from "../styles";

const TeamPage = ({ navigation, route }) => {
  const { field } = route.params;

  const handleSubmit = async () => {
    authStore.signout();
    navigation.replace("Signin");
  };

  const handleBook = async () => {
    alert("You reservation has been confirmed");
  };

  return (
    <>
      <FieldHeader>
        <HeaderTitle onPress={() => navigation.replace("Home")}>
          Home
        </HeaderTitle>
        <SignOutButton onPress={handleSubmit}>
          <SignOutButtonText>Sign out</SignOutButtonText>
        </SignOutButton>
      </FieldHeader>
      <FieldContainer>
        <AuthTitle>{JSON.stringify(field.fieldname)}</AuthTitle>
        <FieldButton onPress={handleBook}>
          <FieldButtonText>4:00 pm - 5:00 pm</FieldButtonText>
        </FieldButton>
        <FieldButton onPress={handleBook}>
          <FieldButtonText>5:00 pm - 6:00 pm</FieldButtonText>
        </FieldButton>
        <FieldButton onPress={handleBook}>
          <FieldButtonText>6:00 pm - 7:00 pm</FieldButtonText>
        </FieldButton>
        <FieldButton onPress={handleBook}>
          <FieldButtonText>7:00 pm - 8:00 pm</FieldButtonText>
        </FieldButton>
        <FieldButton onPress={handleBook}>
          <FieldButtonText>8:00 pm - 9:00 pm</FieldButtonText>
        </FieldButton>
        <FieldButton onPress={handleBook}>
          <FieldButtonText>10:00 pm - 11:00 pm</FieldButtonText>
        </FieldButton>
        <FieldButton onPress={handleBook}>
          <FieldButtonText>11:00 pm - 12:00 am</FieldButtonText>
        </FieldButton>
        <FieldButton onPress={handleBook}>
          <FieldButtonText>12:00 am - 1:00 am</FieldButtonText>
        </FieldButton>
        <FieldButton onPress={handleBook}>
          <FieldButtonText>1:00 am - 2:00 am</FieldButtonText>
        </FieldButton>
      </FieldContainer>
    </>
  );
};
export default TeamPage;
