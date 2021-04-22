import TeamItem from "./TeamItem";
import React from "react";
import teamStore from "../../stores/teamStore";
import { observer } from "mobx-react";
import { HomeContainer } from "../../styles";

const TeamList = () => {
  console.log("Team info: ", teamStore.team)
  const teamList = teamStore.teams.map((element) => (
    <TeamItem team={element} key={element.id} />
  ));

  
  return <HomeContainer>{teamList}</HomeContainer>;
};

export default observer(TeamList);
