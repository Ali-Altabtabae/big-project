import TeamItem from "./TeamItem";
import React from "react";
import teamStore from "../../stores/teamStore";
import { observer } from "mobx-react";
import { TeamPageContainer } from "../../styles";

const TeamList = (props) => {
  const teamList = teamStore.teams.map((element) => (
    <TeamItem team={element} key={element.id} navigation={props.navigation}/>
  ));

  return <TeamPageContainer>{teamList}</TeamPageContainer>;
};

export default observer(TeamList);
