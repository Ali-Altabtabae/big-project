import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import {
  SignOutButtonText,
  AuthHeader,
  HeaderTitle,
  SignOutButton,
} from "../styles";
import authStore from "../stores/authStore";

const Header = ({ navigation }) => {
  const openMenu = () => {
    navigation.openDrawer();
  };
  const handleSubmit = async () => {
    authStore.signout();
    navigation.replace("Signin");
  };

  return (
    <AuthHeader>
      <MaterialIcons name="menu" size={28} onPress={openMenu} />
      <HeaderTitle>Home</HeaderTitle>
      <SignOutButton onPress={handleSubmit}>
        <SignOutButtonText>Sign out</SignOutButtonText>
      </SignOutButton>
    </AuthHeader>
  );
};

export default Header;
