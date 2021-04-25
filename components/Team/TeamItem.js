import React, { useState } from "react";

// Mobx
import { observer } from "mobx-react";
import authStore from "../../stores/authStore"

// Styling
import { TeamPageButtonText, TeamPageButton } from "../../styles";

const TeamItem = (props) => {
  const team = props.team;
  //const userId = authStore.user.id;
  //console.log("In TeamItem, ", authStore.user.id);
  //const [counter, setCounter] = useState(team)
  return (
    <>
      <TeamPageButton
        onPress={() =>
          props.navigation.navigate("TeamPage", {
            team: team,
          })
        }
      >
        <TeamPageButtonText>{team.teamName}</TeamPageButtonText>
      </TeamPageButton>
      {/* {<TeamPageButton
        onPress={() => setCounter(team)}
      >
        <TeamPageButtonText>{counter.teamName}</TeamPageButtonText>
      </TeamPageButton>} */}
    </>
  );
};

export default observer(TeamItem);
