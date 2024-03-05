/* eslint-disable no-undef */
import { ErrorMessage, Field } from "formik";
import React from "react";
import upload from "../../assets/images/upload-ico.svg";
import upload2 from "../../assets/images/upload2.png";

const CropImage = ({ image, setImage, id, name, label, profile }) => {
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
            className={`border-[3px] border-dashed border-[#979797] rounded-md p-8 ${
              profile ? "min-h-[350px]" : "h-[350px]"
            } flex justify-center items-center mt-4 uppercase`}
            htmlFor="image"
          >
            {profile ? (
              <div className="flex flex-col gap-2 items-center justify-center">
                <img
                  src={upload}
                  alt=""
                  className={`w-auto h-full rounded-md ${
                    image ? "hidden" : "block"
                  }`}
                />
                <img
                  src={image ? image : upload2}
                  alt=""
                  className={`w-auto h-[350px] rounded-md`}
                />
              </div>
            ) : (
              <img
                src={image ? image : upload}
                alt=""
                className="w-auto h-full rounded-md"
              />
            )}
          </div>
        </label>
      </div>
    </div>
  );
};

export default CropImage;
