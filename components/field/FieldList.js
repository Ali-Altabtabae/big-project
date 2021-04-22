import FieldItem from "./FieldItem";
import React from "react";
import fieldStore from "../../stores/fieldStore";
import { observer } from "mobx-react";
import { HomeContainer } from "../../styles";

const FieldList = () => {
  console.log("Field info: ", fieldStore.field)
  const fieldList = fieldStore.fields.map((element) => (
    <FieldItem field={element} key={element.id} />
  ));

  return <HomeContainer>{fieldList}</HomeContainer>;
};

export default observer(FieldList);
