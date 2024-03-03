import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import brownArrow from "../../assets/images/arrow_curved.png";
import blackArrow from "../../assets/images/arrow_curved_black.png";
import CustomInput from "../createShop/CustomInput";
import SelectOption from "../createShop/SelectOption";
import PageTitle from "./PageTitle";

const discountList = [
  { id: 1, name: "Amount" },
  { id: 2, name: "Percentage" },
];
const validationSchema = Yup.object().shape({
  discountName: Yup.string().required("This field is required"),
  discountType: Yup.number().required("This field is required"),
  discountValue: Yup.string().required("This field is required"),
});

const initialValues = {
  discountName: "",
  discountType: 0,
  discountValue: "",
};

const AddDiscount = () => {
  const onSubmit = (values, { setSubmitting }) => {
    console.log("Form submitted with values:", values);
    setSubmitting(false);
  };
  return (
    <div className="w-[95%] mx-auto">
      <div className="flex items-center gap-2 ">
        <img src={blackArrow} alt="" />
        <a href="#!">dashboard</a>
        <img src={blackArrow} alt="" />
        <p className="text-primary">add discount</p>
        <img src={brownArrow} alt="" />
      </div>
      <PageTitle>Add discount</PageTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values, handleChange, isSubmitting, isValidating }) => (
          <Form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 ">
              <CustomInput
                label="Discount Name"
                placeholder="Discount Name"
                name="discountName"
                values={values}
                onChange={handleChange}
              />
              <SelectOption
                label="Discount Type"
                name="discountType"
                listItem={discountList}
                placeholder="Choose discount type"
              />
              <div className="pt-8 w-full">
                <label className="font-medium">
                  Discount Value (
                  <span className="text-red-600">
                    {values.discountType === "1"
                      ? "AED"
                      : values.discountType === "2"
                      ? "%"
                      : ""}
                  </span>
                  )<span className="text-red-500">*</span>
                </label>
                <Field
                  type="text"
                  required={true}
                  name="discountValue"
                  placeholder="Discount Value"
                  onChange={handleChange}
                  value={values.name}
                  className="w-full rounded-md bg-[#f6f6f6] py-2 px-3 outline-0 mt-2"
                />
                <ErrorMessage
                  name="discountValue"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
            </div>
            <div className="pb-8 pt-4 flex justify-end">
              <button
                type="submit"
                className="bg-primary py-4 px-24 text-white rounded-md capitalize"
              >
                Add discount
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddDiscount;
