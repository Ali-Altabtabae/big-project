import FieldItem from "./FieldItem";
import React from "react";
import fieldStore from "../../stores/fieldStore";
import { observer } from "mobx-react";
import { FieldContainer } from "../../styles";

const FieldList = (props) => {
  console.log("Field info: ", fieldStore.field)
  const fieldList = fieldStore.fields.map((element) => (
    <FieldItem field={element} key={element.id} navigation={props.navigation}/>
  ));
 
  return <FieldContainer>{fieldList}</FieldContainer>;
};

export default observer(FieldList);
