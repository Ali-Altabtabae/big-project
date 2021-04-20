import axios from "axios";
import { makeAutoObservable } from "mobx";

class FieldAPIStore {

  constructor() {
    makeAutoObservable(this);
  }
  fields = [];

  fetchField = async () => {
    const response = await axios.get("http://localhost:8000/fields");
    this.fields = response.data;
  };
}

const fieldAPIStore = new FieldAPIStore();
fieldAPIStore.fetchField();

export default fieldAPIStore;