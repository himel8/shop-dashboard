import React from "react";

const CustomInput = ({ label, onChange, values, placeholder, name }) => {
  return (
    <div className="pt-8 w-full">
      <label>{label}</label>
      <input
        type="text"
        required={true}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={values.name}
        className="w-full rounded-md bg-[#f6f6f6] py-2 px-3 outline-0 mt-2 font-medium"
      />
    </div>
  );
};

export default CustomInput;
