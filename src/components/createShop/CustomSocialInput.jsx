import React from "react";

const CustomSocialInput = ({
  label,
  id,
  name,
  onChange,
  value,
  paddingLeft,
  constantUrl,
  placeholder,
}) => {
  return (
    <div className="pt-8 ">
      <label htmlFor={id}>{label}</label>
      <div className="relative">
        <input
          id={id}
          type="text"
          required={true}
          name={name}
          placeholder={placeholder ? placeholder : ""}
          onChange={onChange}
          value={value}
          className={`w-full rounded-md bg-[#f6f6f6] pr-2 ${paddingLeft} py-2 outline-0 mt-2 font-regular`}
        />
        <p className="font-regular absolute top-[57%] left-[13px] translate-y-[-50%]">
          {constantUrl}
        </p>
      </div>
    </div>
  );
};

export default CustomSocialInput;
