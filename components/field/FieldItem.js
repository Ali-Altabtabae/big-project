import React from "react";
import { AuthButtonText } from "../../styles";

const FieldItem = (props) => {
  const field = props.field;
  return (
    <>
      <AuthButtonText>{field.fieldname}</AuthButtonText>
      <AuthButtonText>{field.location}</AuthButtonText>
      <AuthButtonText>{field.price}</AuthButtonText>
      <AuthButtonText>{field.capacity}</AuthButtonText>
    </>
  );
};
export default FieldItem;
