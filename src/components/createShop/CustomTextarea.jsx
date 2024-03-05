import { ErrorMessage, Field } from "formik";
import React from "react";

const CustomTextarea = ({
  label,
  onChange,
  values,
  placeholder,
  name,
  rows = 6,
}) => {
  return (
    <div className="pt-4">
      <label>
        {label}
        <span className="text-red-500">*</span>
      </label>
      <Field
        as="textarea"
        rows={rows}
        required={true}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={values.name}
        className="rounded-md w-full bg-[#f6f6f6] py-2 px-3 outline-0 mt-2 font-medium"
      />
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm"
      />
    </div>
  );
};

export default CustomTextarea;
