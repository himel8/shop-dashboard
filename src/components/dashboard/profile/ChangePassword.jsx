import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import Breadcrumb from "../../../utils/Breadcrumb";
import PageTitle from "../../../utils/PageTitle";
import CustomInput from "../../createShop/CustomInput";
import FromTitle from "../../createShop/FromTitle";

const validationSchema = Yup.object().shape({
  oldPassword: Yup.string().required("This field is required"),
  newPassword: Yup.string().required("This field is required"),
  ConfirmnewPassword: Yup.string().required("This field is required"),
});

const initialValues = {
  oldPassword: "",
  newPassword: "",
  ConfirmnewPassword: "",
};

const ChangePassword = () => {
  const onSubmit = (values, { setSubmitting }) => {
    console.log("Form submitted with values:", values);
    setSubmitting(false);
  };
  return (
    <div>
      <Breadcrumb main="dashboard" page="change password" />

      <PageTitle>CHANGE YOUR PASSWORD</PageTitle>
      <p className="text-[12px] text-[#909090] leading-[18px]">
        Start generating money from your home. Start your business now. The more
        information you add, the more valuable your shop will be!
      </p>

      <FromTitle>Change Password</FromTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values, handleChange, isSubmitting, isValidating }) => (
          <Form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <CustomInput
                type="password"
                label="Old Password"
                placeholder="Old Password"
                name="oldPassword"
                values={values}
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <CustomInput
                type="password"
                label="New Password"
                placeholder="New Password"
                name="newPassword"
                values={values}
                onChange={handleChange}
              />
              <CustomInput
                type="password"
                label="Confirm New Password"
                placeholder="Enter Your Password"
                name="ConfirmnewPassword"
                values={values}
                onChange={handleChange}
              />
            </div>
            <div className="pb-8 pt-4 flex justify-end mt-12">
              <button
                type="submit"
                className="bg-primary py-2 px-8 text-white rounded-md uppercase"
              >
                Change Password
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ChangePassword;
