import React from "react";
import Datepicker from "react-tailwindcss-datepicker";

const DateRanger = ({ value, setValue }) => {
  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };
  return (
    <div className="date__ranger">
      <Datepicker
        primaryColor={"amber"}
        useRange={false}
        placeholder={"Select date range"}
        value={value}
        onChange={handleValueChange}
      />
    </div>
  );
};

export default DateRanger;
