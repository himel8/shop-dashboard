/* eslint-disable no-undef */
import { ErrorMessage, Field } from "formik";
import React from "react";
import upload from "../../assets/images/upload-ico.svg";

const CropImage = ({ image, setImage, id, name, label }) => {
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }

    // setFieldValue("image", file);
  };

  return (
    <div className="pt-8 w-full">
      <div>
        <Field
          type="file"
          id={id}
          name={name}
          className="w-full hidden"
          onChange={(e) => handleImageChange(e)}
        />
        <ErrorMessage name={name} component="div" />
        <p className="text-base ">{label}</p>
        <label htmlFor={id}>
          <div
            className="border-[3px] border-dashed border-[#979797] rounded-md p-8 h-[350px] flex justify-center items-center mt-4 uppercase"
            htmlFor="image"
          >
            <img
              src={image ? image : upload}
              alt=""
              className="w-auto h-full rounded-md"
            />
          </div>
        </label>
      </div>
    </div>
  );
};

export default CropImage;
