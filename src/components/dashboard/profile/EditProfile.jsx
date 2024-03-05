import { ErrorMessage, Field, Form, Formik, useField } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import Breadcrumb from "../../../utils/Breadcrumb";
import PageTitle from "../../../utils/PageTitle";
import CropImage from "../../createShop/CropImage";
import CustomInput from "../../createShop/CustomInput";
import FromTitle from "../../createShop/FromTitle";
import SelectOption from "../../createShop/SelectOption";

const validationSchema = Yup.object().shape({
  profileImage: Yup.mixed()
    .required("Image is required")
    .test("fileSize", "Image size is too large", (value) => {
      if (!value) return true;
      return value && value.size <= 1024 * 1024 * 5;
    })
    .test("fileType", "Unsupported file type", (value) => {
      if (!value) return true;
      return (
        value && ["image/jpeg", "image/png", "image/gif"].includes(value.type)
      );
    }),
  firstName: Yup.string().required("This field is required"),
  lastName: Yup.string().required("This field is required"),
  birthDate: Yup.date().required("This field is required"),
  nationality: Yup.number().required("This field is required"),
  hideLocation: Yup.boolean().required("This field is required"),
});

const initialValues = {
  profileImage: null,
  firstName: "",
  lastName: "",
  email: "",
  birthDate: "",
  nationality: 0,
  hideLocation: false,
};

const countryList = [
  { id: 1, name: "Saudi Arabia" },
  { id: 2, name: "Egypt" },
  { id: 3, name: "Iraq" },
  { id: 4, name: "Jordan" },
  { id: 5, name: "United Arab Emirates" },
  { id: 6, name: "Lebanon" },
  { id: 7, name: "Morocco" },
  { id: 8, name: "Tunisia" },
  { id: 9, name: "Algeria" },
  { id: 10, name: "Qatar" },
];

const EditProfile = () => {
  const [profileImage, setProfileImage] = useState(null);

  const onSubmit = (values, { setSubmitting }) => {
    console.log("Form submitted with values:", values);
    setSubmitting(false);
  };

  return (
    <div>
      <Breadcrumb main="dashboard" page="my profile" />

      <PageTitle>My profile</PageTitle>
      <p className="text-[12px] text-[#909090] leading-[18px]">
        Start generating money from your home. Start your business now. The more
        information you add, the more valuable your shop will be!
      </p>

      <FromTitle>Add Profile Image</FromTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values, handleChange, isSubmitting, isValidating }) => (
          <Form>
            <CropImage
              image={profileImage}
              label=""
              setImage={setProfileImage}
              id={"profileImage"}
              name={"profileImage"}
              profile={true}
            />

            <FromTitle>General Account Information</FromTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <CustomInput
                label="First Name"
                placeholder="First Name"
                name="firstName"
                values={values}
                onChange={handleChange}
              />
              <CustomInput
                label="Last Name"
                placeholder="Last Name"
                name="lastName"
                values={values}
                onChange={handleChange}
              />
              <CustomInput
                label="Email"
                placeholder="Email"
                name="email"
                values={values}
                defaultValue="aa@a.aa"
                type="email"
                onChange={handleChange}
                readonly={true}
              />
              <CustomInput
                label="Date Of Birth"
                placeholder="Date Of Birth"
                name="birthDate"
                values={values}
                onChange={handleChange}
                type="date"
              />
              <CustomInput
                label="Mobile Number"
                placeholder="Mobile Number"
                name="mobileNumber"
                values={values}
                defaultValue="+971 56 4183655"
                type="text"
                onChange={handleChange}
                readonly={true}
              />
              <SelectOption
                label="Nationality"
                name="nationality"
                listItem={countryList}
                placeholder=" Choose nationality"
              />
              <div>
                <div className="flex items-center gap-10 ml-5">
                  <label className="inline-flex items-center">
                    <Field
                      type="radio"
                      name="gender"
                      value="male"
                      className="appearance-none border border-primary rounded-sm w-4 h-4 checked:bg-primary checked:border-primary focus:outline-none "
                    />
                    <span className="ml-2">Male</span>
                  </label>
                  <label className="inline-flex items-center">
                    <Field
                      type="radio"
                      name="gender"
                      value="female"
                      className="appearance-none border border-primary rounded-sm w-4 h-4 checked:bg-primary checked:border-primary focus:outline-none "
                    />
                    <span className="ml-2">Female</span>
                  </label>
                </div>
                <ErrorMessage
                  name="gender"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
            </div>
            <div className="my-4">
              <label className="font-medium">Hide my Location</label>
              <div className="flex items-center gap-2 pt-1">
                <span>Hide</span>
                <Switch type="checkbox" name="hideLocation" id="isActive" />
                <span> Show</span>
              </div>
            </div>
            <div className="pb-8 pt-4 flex justify-end mt-12">
              <button
                type="submit"
                className="bg-primary py-2 px-12 text-white rounded-md uppercase"
              >
                update
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditProfile;

const Switch = ({ ...props }) => {
  const [field] = useField(props);

  return (
    <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in profile has-[:checked]:bg-[#64bd63] rounded-full border">
      <input
        type="checkbox"
        className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
        {...field}
        {...props}
      />
      <label
        htmlFor={props.id}
        className="toggle-label block overflow-hidden h-6 rounded-full bg-transparent cursor-pointer"
      ></label>
    </div>
  );
};
