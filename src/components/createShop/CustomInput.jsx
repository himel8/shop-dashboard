import { ErrorMessage, Field } from "formik";
import React from "react";

const CustomInput = ({
  label,
  onChange,
  values,
  placeholder,
  name,
  type = "text",
  readonly = false,
  defaultValue,
}) => {
  return (
    <div className="pt-4 w-full">
      <label className="font-medium text-[#4a4a4a]">
        {label}
        <span className="text-red-500">*</span>
      </label>
      <Field
        type={type}
        required={true}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={defaultValue ? defaultValue : values.name}
        readOnly={readonly}
        className={`w-full rounded-md bg-[#f6f6f6] py-2 px-3 outline-0 mt-2 ${
          readonly ? "cursor-not-allowed" : ""
        } `}
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
