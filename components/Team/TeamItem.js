import React from "react";

// Mobx
import { observer } from "mobx-react";

import DeleteTeam from "../button/DeleteButton";

// Styling
import { ListItem } from "native-base";
import { TeamItemStyled } from "../styles";

const TeamItem = ({ team, navigation, props }) => {
  const team = props.team;
  return (
    <ListItem onPress={() => navigation.navigate("TeamDetail", { team: team })}>
      <TeamItemStyled>{team.name}</TeamItemStyled>
      <DeleteTeam team={team.id} />
    </ListItem>
  );
};

export default observer(TeamItem);
