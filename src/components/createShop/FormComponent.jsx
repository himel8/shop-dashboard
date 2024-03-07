// src/components/Form.js

import { Form, Formik } from "formik";
import React from "react";

import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Stepper from "./Stepper";

const steps = [Step1, Step2, Step3];

const initialValues = {
  shopName: "",
  shopDesc: "",
  country: "",
  emirate: "",
  area: "",
  villaName: "",
  addressDetail: "",
  streetName: "",
  villaNumber: "",
  IBANNumber: "",
  bankName: "",
  branchName: "",
  accountName: "",
  swiftCode: "",
  shopAlias: "",
  shopImage: null,
  // Add other form fields here
};

const validationSchema = Yup.object().shape({
  shopName: Yup.string().trim().required("This field is required"),
  shopDesc: Yup.string().required("This field is required"),
  country: Yup.string().required("This field is required"),

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
  const navigate = useNavigate();

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission logic here
    console.log("clicked", values);
    navigate("/");
    setSubmitting(false);
  };

  const validateStep1 = (values) => {
    const errors = {};

    if (!values.shopName || !values.shopDesc) {
      errors.step1 = "Please fill out all required fields in Step 1";
    }
    return errors;
  };

  const validateStep2 = (values) => {
    const errors = {};

    if (
      !values.country ||
      !values.emirate ||
      !values.area ||
      !values.villaName
    ) {
      errors.step2 = "Please fill out all required fields in Step 2";
    }
    return errors;
  };

  const validateStep3 = (values) => {
    const errors = {};

    if (!values.agreeChecked || !values.shopPolicies) {
      errors.step3 =
        "Please agree to terms and conditions and fill out the shop policies";
    }

    return errors;
  };

  const handleNextClick = async (values, isValidating) => {
    if (isValidating) return;

    let errors = {};

    switch (currentStep) {
      case 0:
        errors = validateStep1(values);
        break;
      case 1:
        errors = validateStep2(values);
        break;
      case 2:
        errors = validateStep3(values);
        break;
      default:
        break;
    }

    if (Object.keys(errors).length === 0) {
      setCurrentStep(currentStep + 1);
    } else {
      Object.keys(errors).forEach((key) => {
        toast.error(errors[key], {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      });
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, handleChange, isSubmitting, isValidating }) => {
        return (
          <Form className="secBorder p-6 sm:p-12">
            <Stepper steps={steps} currentStep={currentStep} />
            {React.createElement(steps[currentStep], {
              values,
              handleChange,
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
                  onClick={() => handleNextClick(values, isValidating)}
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
            <ToastContainer />
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormComponent;
