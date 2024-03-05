import { Form, Formik } from "formik";
import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";

import { MdPhoneInTalk } from "react-icons/md";
import {
  TEModal,
  TEModalBody,
  TEModalContent,
  TEModalDialog,
  TEModalHeader,
} from "tw-elements-react";
import * as Yup from "yup";
import CustomInput from "../components/createShop/CustomInput";
import CustomTextarea from "../components/createShop/CustomTextarea";

const validationSchema = Yup.object({
  subject: Yup.string().required("subject is required"),
  body: Yup.string().required("subject is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

const initialValues = {
  email: "",
  subject: "",
  body: "",
};

const CustomerServiceModal = ({
  customerServiceModal,
  setCustomerServiceModal,
}) => {
  const [open, setOpen] = useState(false);
  const onSubmit = (values, { setSubmitting }) => {
    console.log("Form submitted with values:", values);
    setSubmitting(false);
  };
  return (
    <TEModal
      show={customerServiceModal}
      setShow={setCustomerServiceModal}
      className="z-[9999] flex items-center justify-center w-full "
    >
      <TEModalDialog className="w-[440px]">
        {open ? (
          <TEModalContent>
            <TEModalHeader className="border-b">
              {/* <!--Modal title--> */}
              <h5 className="text-lg font-medium leading-normal text-neutral-800 dark:text-neutral-200">
                Email support
              </h5>
              {/* <!--Close button--> */}
              <button
                type="button"
                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                onClick={() => setCustomerServiceModal(false)}
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </TEModalHeader>
            {/* <!--Modal body--> */}
            <TEModalBody>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {({ values, handleChange, isSubmitting, isValidating }) => (
                  <Form>
                    <div className="w-full">
                      <CustomInput
                        type="email"
                        label="From"
                        placeholder="Email"
                        name="email"
                        values={values}
                        onChange={handleChange}
                      />
                      <CustomInput
                        type="text"
                        label="Subject"
                        placeholder="Subject"
                        name="subject"
                        values={values}
                        onChange={handleChange}
                      />
                      <CustomTextarea
                        label="Body"
                        placeholder="Enter text here"
                        name="body"
                        rows={4}
                        values={values}
                        onChange={handleChange}
                      />
                      <div className=" py-8 w-full ">
                        <button
                          onClick={(e) => setOpen(false)}
                          type="submit"
                          className="bg-primary py-3 px-12 text-white rounded-md capitalize w-full"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </TEModalBody>
          </TEModalContent>
        ) : (
          <TEModalContent>
            <TEModalHeader className="border-b">
              {/* <!--Modal title--> */}
              <h5 className="text-lg font-medium leading-normal text-neutral-800 dark:text-neutral-200">
                Customer service
              </h5>
              {/* <!--Close button--> */}
              <button
                type="button"
                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                onClick={() => setCustomerServiceModal(false)}
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </TEModalHeader>
            {/* <!--Modal body--> */}
            <TEModalBody>
              <div className="py-4 flex justify-center gap-10">
                <div className="flex flex-col items-center justify-center gap-1">
                  <a href="tel:+971 56 511 5444">
                    <div className="bg-primary text-white rounded-full w-[100px] h-[100px] p-4 flex justify-center items-center">
                      <MdPhoneInTalk size={70} />
                    </div>
                  </a>
                  <a href="tel:+971 56 511 5444">
                    <p className="text-sm text-primary">
                      {" "}
                      Call customer service
                    </p>
                  </a>
                  <p className="text-sm font-light"> +971 56 511 5444</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-1">
                  <div
                    className="bg-primary text-white rounded-full w-[100px] h-[100px] p-4 flex justify-center items-center cursor-pointer"
                    onClick={(e) => setOpen(true)}
                  >
                    <FaEnvelope size={70} />
                  </div>
                  <p
                    className="text-sm text-primary cursor-pointer"
                    onClick={(e) => setOpen(true)}
                  >
                    Email customer service
                  </p>
                  <p className="text-sm font-light"> info@akshaak.com</p>
                </div>
              </div>
            </TEModalBody>
          </TEModalContent>
        )}
      </TEModalDialog>
    </TEModal>
  );
};

export default CustomerServiceModal;
