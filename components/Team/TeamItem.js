import React from "react";

// Mobx
import { observer } from "mobx-react";

// Styling
import { HomeButtonText, HomeButton } from "../../styles";

const TeamItem = (props) => {
  const team = props.team;
  return (
    <HomeButton>
      <HomeButtonText>{team.teamName}</HomeButtonText>
    </HomeButton>
  );
};

export default observer(TeamItem);
