import React from "react";
import FieldList from "./field/FieldList";
import authStore from "../stores/authStore";
import {
  HomeContainer,
  SignOutButtonText,
  AuthHeader,
  HeaderTitle,
  SignOutButton,
} from "../styles";

const Fields = ({ navigation }) => {
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
        <FieldList />
    </>
  );
};
export default Fields;
