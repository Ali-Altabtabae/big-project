import React from "react";
import FieldList from "./field/FieldList";
import authStore from "../stores/authStore";
import {
  SignOutButtonText,
  FieldHeader,
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
      <FieldHeader>
        <HeaderTitle onPress={() => navigation.replace("Home")}>Home</HeaderTitle>
        <SignOutButton onPress={handleSubmit}>
          <SignOutButtonText>Sign out</SignOutButtonText>
        </SignOutButton>
      </FieldHeader>
        <FieldList navigation={navigation}/>
    </>
  );
};
export default Fields;
