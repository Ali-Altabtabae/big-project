import FieldItem from "./FieldItem";
import React from "react";
import fieldStore from "../../stores/fieldStore";
import { observer } from "mobx-react";
import { TopStyling, AuthContainer } from "../../styles";

const FieldList = () => {
  const fieldList = fieldStore.fields.map((element) => (
    <FieldItem field={element} key={element.id} />
  ));

  return <TopStyling>{fieldList}</TopStyling>;
};

export default observer(FieldList);
