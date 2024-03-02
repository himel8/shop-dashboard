// src/components/Form.js

import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Stepper from "./Stepper";

const steps = [Step1, Step2, Step3];

const initialValues = {
  shopName: "",
  shopImage: null,
  shopDesc: "",
  // Add other form fields here
};

const validationSchema = Yup.object().shape({
  shopName: Yup.string().required("This field is required"),
  shopDesc: Yup.string().required("This field is required"),
  country: Yup.string().required("This field is required"),
  emirate: Yup.string().required("This field is required"),
  area: Yup.string().required("This field is required"),
  villaName: Yup.string().required("This field is required"),
  addressDetail: Yup.string().required("This field is required"),
  streetName: Yup.string().required("This field is required"),
  villaNumber: Yup.string().required("This field is required"),
  IBANNumber: Yup.string().required("This field is required"),
  bankName: Yup.string().required("This field is required"),
  branchName: Yup.string().required("This field is required"),
  accountName: Yup.string().required("This field is required"),
  swiftCode: Yup.string().required("This field is required"),
  shopAlias: Yup.string()
    .required("Only alphanumeric characters are allowed")
    .matches(/^[a-zA-Z0-9]+$/, "Only alphanumeric characters are allowed"),
  shopImage: Yup.mixed()
    .required("Image is required")
    .test("fileSize", "File size is too large", (value) => {
      return value && value.size <= 5000000; // 5 MB
    })
    .test("fileType", "Unsupported file type", (value) => {
      return (
        value && ["image/jpeg", "image/png", "image/gif"].includes(value.type)
      );
    }),
});

const FormComponent = () => {
  const [currentStep, setCurrentStep] = React.useState(0);

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission logic here
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, isSubmitting, isValidating }) => (
        <Form className="secBorder p-6 sm:p-12">
          <Stepper steps={steps} currentStep={currentStep} />
          {React.createElement(steps[currentStep], {
            values,
            isSubmitting,
            isValidating,
          })}

          <div
            className={`my-8 flex flex-col gap-5 sm:gap-0 sm:flex-row ${
              currentStep > 0 ? "justify-between" : "justify-end"
            } `}
          >
            {currentStep > 0 && (
              <button
                type="button"
                className="bg-[#ededed] py-4 px-20 rounded-md text-[#9b9b9b]"
                onClick={() => setCurrentStep(currentStep - 1)}
              >
                Previous
              </button>
            )}
            {currentStep < steps.length - 1 && (
              <button
                type="button"
                className="bg-primary py-4 px-20 rounded-md text-white"
                onClick={() => {
                  if (isValidating) return;
                  setCurrentStep(currentStep + 1);
                }}
              >
                Next
              </button>
            )}
            {currentStep === steps.length - 1 && (
              <button
                className="bg-primary py-4 px-20 rounded-md text-white"
                type="submit"
                disabled={isSubmitting}
              >
                Finish
              </button>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormComponent;
