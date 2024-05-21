import React from "react";
import Display from "./Display";
const Addfeelings = ({ values, onDelete,onSave }) => {
  return (
    <div>
    {values.map((value, index) => (
      <Display
        key={value.id} 
        value={value} 
        onDelete={() => onDelete(index)}
        onSave={onSave}
      />
    ))}
  </div>
  );
};

export default Addfeelings;