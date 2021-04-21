import React, { useState } from "react";

// Styling
import {
  AuthContainer,
  AuthTitle,
  AuthTextInput,
  AuthButtonText,
  AuthButton,
  AuthOther,
} from "../styles";

// Team Store

import authStore from "../../stores/authStore";

const CreateTeam = ({ navigation }) => {
  const [team, setTeam] = useState({
    teamName: "", // backend name?
  });
  const handleSubmit = async () => {
    await authStore.createTeam(team);
  };
  return (
    <AuthContainer>
      <AuthTitle>Create Team</AuthTitle>
      <AuthTextInput
        onChangeText={(teamName) => setTeam({ ...team, teamName })}
        placeholder="Team Name"
        placeholderTextColor="#A6AEC1"
      />

      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Create</AuthButtonText>
      </AuthButton>
      <AuthOther onPress={() => navigation.navigate("UserHome")}>
        Back
      </AuthOther>
    </AuthContainer>
  );
};

export default CreateTeam;
