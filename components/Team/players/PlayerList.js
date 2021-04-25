import PlayerItem from "./PlayerItem";
import React from "react";
import { HomeContainer } from "../../../styles";
import teamStore from "../../../stores/teamStore";
import { observer } from "mobx-react";

const PlayerList = () => {
  const playerList = teamStore.teams.map((element) => (
    <PlayerItem team={element} key={element.id} />
  ));

  return <HomeContainer>{playerList}</HomeContainer>;
};

export default observer(PlayerList);
