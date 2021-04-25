import React from "react";
import { HomeButtonText, HomeButton } from "../../../styles";

const PlayerItem = (props) => {
  const team = props.team;
  return (
    <HomeButton>
      <HomeButtonText>{team.Users.username}</HomeButtonText>
    </HomeButton>
  );
};
export default PlayerItem;
