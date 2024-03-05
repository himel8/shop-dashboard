import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import Breadcrumb from "../../../utils/Breadcrumb";
import PageTitle from "../../../utils/PageTitle";
import CustomInput from "../../createShop/CustomInput";
import FromTitle from "../../createShop/FromTitle";

const validationSchema = Yup.object().shape({
  phoneNumber: Yup.string().required("This field is required"),
});

const initialValues = {
  phoneNumber: "",
};

const ChangeNumber = () => {
  const onSubmit = (values, { setSubmitting }) => {
    console.log("Form submitted with values:", values);
    setSubmitting(false);
  };
  return (
    <div>
      <Breadcrumb main="dashboard" page="change number" />

      <PageTitle>Change Number</PageTitle>
      <p className="text-[12px] text-[#909090] leading-[18px]">
        Start generating money from your home. Start your business now. The more
        information you add, the more valuable your shop will be!
      </p>

      <FromTitle>Update Your Phone Number</FromTitle>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values, handleChange, isSubmitting, isValidating }) => (
          <Form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <CustomInput
                type="text"
                label="Phone Number"
                placeholder="+971 56 4183655"
                name="phoneNumber"
                values={values}
                onChange={handleChange}
              />
              <div className="flex items-end pb-4">
                <p className="text-[#737373] text-sm">
                  Use phone number format as +971 50 xxxxxxx
                </p>
              </div>
            </div>

            <div className="pb-8 pt-4 flex justify-end mt-12">
              <button
                type="submit"
                className="bg-primary py-2 px-12 text-white rounded-md capitalize"
              >
                Update Number
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ChangeNumber;
