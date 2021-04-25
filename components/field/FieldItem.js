import React from "react";
import { FieldButtonText, FieldButton } from "../../styles";

const FieldItem = (props) => {
  const field = props.field;
  return (
    <FieldButton
      onPress={() =>
        props.navigation.navigate("FieldPage", {
          field: field,
        })
      }
    >
      <FieldButtonText>{field.fieldname}</FieldButtonText>
      <FieldButtonText>Location: {field.location}</FieldButtonText>
      <FieldButtonText>Price: {field.price} $/hr</FieldButtonText>
      <FieldButtonText>Capacity: {field.capacity}</FieldButtonText>
    </FieldButton>
  );
};
export default FieldItem;
