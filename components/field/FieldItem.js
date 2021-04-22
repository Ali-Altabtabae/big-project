import React from "react";
import { HomeButtonText, HomeButton } from "../../styles";

const FieldItem = (props) => {
  const field = props.field;
  return (
    <HomeButton>
      <HomeButtonText>{field.fieldname}</HomeButtonText>
      <HomeButtonText>Location: {field.location}</HomeButtonText>
      <HomeButtonText>Price: {field.price} $/hr</HomeButtonText>
      <HomeButtonText>Capacity: {field.capacity}</HomeButtonText>
    </HomeButton>
  );
};
export default FieldItem;
