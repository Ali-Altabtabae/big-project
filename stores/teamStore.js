import { makeAutoObservable } from "mobx";
import axios from "axios";
import instance from "./instance";

class TeamStore {
  constructor() {
    makeAutoObservable(this);
  }
  team = [];

  fetchteam = async () => {
    const response = await instance.get("/teams");
    this.team = response.data;
  };
}

const teamStore = new TeamStore();
TeamStore.fetchRoom();

export default teamStore;
