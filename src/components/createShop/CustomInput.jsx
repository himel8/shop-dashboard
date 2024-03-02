import { ErrorMessage, Field } from "formik";
import React from "react";

const CustomInput = ({ label, onChange, values, placeholder, name }) => {
  return (
    <div className="pt-8 w-full">
      <label>
        {label}
        <span className="text-red-500">*</span>
      </label>
      <Field
        type="text"
        required={true}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={values.name}
        className="w-full rounded-md bg-[#f6f6f6] py-2 px-3 outline-0 mt-2 font-medium"
      />
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm"
      />
    </div>
  );
};

export default CustomInput;
