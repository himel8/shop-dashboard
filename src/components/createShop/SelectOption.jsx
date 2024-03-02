import { ErrorMessage, Field } from "formik";
import React from "react";

const SelectOption = ({ label, placeholder, listItem, name }) => {
  return (
    <div className="pt-8 w-full">
      <label>
        {label}
        <span className="text-red-500">*</span>
      </label>
      <Field
        as="select"
        name={name}
        className=" w-full bg-[#f6f6f6] py-2 px-3 outline-0 mt-2 rounded-md"
      >
        <option value={0} label={placeholder} />
        {listItem.map((category, index) => (
          <option key={index} value={category.id} label={category.name} />
        ))}
      </Field>
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm"
      />
    </div>
  );
};

export default SelectOption;
