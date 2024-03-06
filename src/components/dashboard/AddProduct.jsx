import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import brownArrow from "../../assets/images/arrow_curved.png";
import blackArrow from "../../assets/images/arrow_curved_black.png";
import PageTitle from "../../utils/PageTitle";
import CustomInput from "../createShop/CustomInput";
import CustomTextarea from "../createShop/CustomTextarea";
import FromTitle from "../createShop/FromTitle";
import SelectOption from "../createShop/SelectOption";

const categoryList = [
  { id: 1, name: " Arts & Crafts" },
  { id: 2, name: " Fashion" },
  { id: 3, name: " Food & Drinks" },
  { id: 4, name: " Health & Beauty" },
];
const productList = [
  { id: 1, name: " Beverages" },
  { id: 2, name: " Cold food" },
  { id: 3, name: " Deserts" },
  { id: 4, name: " Hot food" },
  { id: 5, name: " Pastries & Cakes" },
  { id: 6, name: " Snacks" },
  { id: 7, name: " Other" },
];
const productQuantity = [
  { id: 1, name: "  Available on order " },
  { id: 2, name: " Available in stock" },
];
const productionTime = [
  { id: 1, name: "1 - 2 working days" },
  { id: 2, name: "3 - 4 working days" },
  { id: 3, name: "5 - 7 working days" },
  { id: 4, name: "1 Working week" },
  { id: 5, name: "7 to 10 Working Days" },
  { id: 6, name: "2 Working weeks" },
  { id: 7, name: "3 Working weeks" },
  { id: 8, name: "4 Working weeks" },
];
const returnPolicyList = [
  { id: 1, name: "I do not accept returns or exchange" },
  { id: 2, name: "I do not accept returns, but I do exchange" },
  { id: 3, name: "I accept returns & exchanges" },
];
const fragileList = [{ id: 1, name: "No" }];

const validationSchema = Yup.object().shape({
  productCategory: Yup.number().required("This field is required"),
  productName: Yup.string().required("This field is required"),
  productDesc: Yup.string().required("This field is required"),
  tag: Yup.string().required("This field is required"),
});

const initialValues = {
  productCategory: 0,
  productName: "",
  productDesc: "",
};

export const AddProduct = ({
  customerServiceModal,
  setCustomerServiceModal,
}) => {
  const onSubmit = (values, { setSubmitting }) => {
    console.log("Form submitted with values:", values);
    setSubmitting(false);
  };

  return (
    <div className="">
      <div className="flex items-center gap-2 ">
        <img src={blackArrow} alt="" />
        <a href="#!">dashboard</a>
        <img src={blackArrow} alt="" />
        <p className="text-primary">add product</p>
        <img src={brownArrow} alt="" />
      </div>
      <PageTitle>Add product</PageTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values, handleChange, isSubmitting, isValidating }) => (
          <Form>
            <FromTitle>Select Product Category</FromTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 ">
              <SelectOption
                label="Your shop category"
                name="shopCategory"
                listItem={categoryList}
                placeholder="Food & Drinks"
                nonClickable
              />
              <SelectOption
                label="Select Product Category"
                name="productCategory"
                listItem={productList}
                placeholder="Your product category"
              />
            </div>

            <div>
              <FromTitle>
                Add Product Images
                <span className="ml-2 text-sm text-primary font-normal">
                  (Maximum 5 images with minimum dimension of 800X600)
                </span>
              </FromTitle>
            </div>

            <div className="pt-6 flex justify-between gap-10 sm:gap-5 flex-col sm:flex-row">
              <div className="w-full">
                <div className="relative border rounded-md px-6 py-4">
                  <h2 className="text-lg text-[#434343]  font-medium">
                    Product Details
                  </h2>
                  <p className="text-sm text-[#fff] bg-primary absolute top-[-20px] left-0 rounded-md p-[6px]">
                    English
                  </p>
                </div>
                <CustomInput
                  label="Product Name"
                  placeholder="Product Name"
                  name="productName"
                  values={values}
                  onChange={handleChange}
                />
                <CustomTextarea
                  label="Product Description"
                  placeholder="Product Description"
                  name="productDesc"
                  values={values}
                  onChange={handleChange}
                />
                <CustomInput
                  label="Enter New Tags"
                  placeholder="Enter New Tags*"
                  name="tag"
                  values={values}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full">
                <div className="relative border rounded-md px-6 py-4 ">
                  <h2 className="text-lg text-[#434343]  font-medium text-right">
                    تفاصيل المنتج
                  </h2>
                  <p className="text-sm text-[#fff] bg-[#434343] absolute top-[-20px] right-0 rounded-md p-[6px] text-right">
                    العربية
                  </p>
                </div>
                <div className="pt-4 flex flex-col">
                  <label htmlFor="shop_name_A" className="text-right">
                    إسم المتجر
                  </label>
                  <input
                    id="shop_name_A"
                    type="text"
                    name="shopAName"
                    placeholder="إسم المتجر"
                    onChange={handleChange}
                    value={values.name}
                    className="text-right w-full bg-[#f6f6f6] py-2 px-3 outline-0 mt-2 font-medium rounded-md"
                  />
                </div>
                <div className="pt-4 flex flex-col">
                  <label htmlFor="shop_description_A" className="text-right">
                    وصف المتجر
                  </label>
                  <textarea
                    id="shop_description_A"
                    type="text"
                    rows={6}
                    name="shopADesc"
                    placeholder="وصف المتجر"
                    onChange={handleChange}
                    value={values.name}
                    className="text-right w-full bg-[#f6f6f6] py-2 px-3 outline-0 mt-2 font-medium rounded-md"
                  />
                </div>
                <div className="pt-4 flex flex-col">
                  <label htmlFor="shop_tag" className="text-right">
                    الكلمات الدلالية للمنتج
                  </label>
                  <input
                    id="shop_tag"
                    type="text"
                    name="shopATag"
                    placeholder="أدخل بيانات جديدة"
                    onChange={handleChange}
                    value={values.name}
                    className="text-right w-full bg-[#f6f6f6] py-2 px-3 outline-0 mt-2 font-medium rounded-md"
                  />
                </div>
              </div>
            </div>

            <FromTitle>Add Product Production Details</FromTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 ">
              <SelectOption
                label="Quantity Availability"
                name="quantityAvailability"
                listItem={productQuantity}
                placeholder="Select quantity availability"
              />
              <SelectOption
                label="Production Time"
                name="productionTime"
                listItem={productionTime}
                placeholder="Select production time"
              />
              <CustomInput
                label="Product Quantity"
                placeholder="Quantity"
                name="productQuantity"
                values={values}
                onChange={handleChange}
              />
              <CustomInput
                label="Minimum Order(Quantity)"
                placeholder="Quantity"
                name="productMinQuantity"
                values={values}
                onChange={handleChange}
                type="number"
              />
              <CustomInput
                label="Weight (In Kg)"
                placeholder="Product weight in kg"
                name="productWeight"
                values={values}
                onChange={handleChange}
                type="number"
              />
              <CustomInput
                label="Price (Inclusive Of VAT)"
                placeholder="Price in AED"
                name="productPrice"
                values={values}
                onChange={handleChange}
                type="number"
              />
              <SelectOption
                label="Exchange & Return Policy"
                name="returnPolicy"
                listItem={returnPolicyList}
                placeholder="Choose exchange & returns policy"
              />
              <SelectOption
                label="Exchange & Returns Time"
                name="returnTime"
                listItem={returnPolicyList}
                placeholder=" Choose exchange & returns time "
              />
              <SelectOption
                label="Fragile"
                name="fragile"
                listItem={fragileList}
                placeholder="Yes"
              />
            </div>

            <div className="pt-8 w-full">
              <label className="flex ">
                <Field
                  type="checkbox"
                  id="agreeChecked"
                  name="agreeChecked"
                  className="mr-2 border-primary h-4 w-4 rounded "
                />
                <span className="w-full text-base text-[#181f27] leading-[25px]">
                  I agree with the{" "}
                  <span
                    className=" text-primary cursor-pointer"
                    onClick={(e) => setCustomerServiceModal(true)}
                  >
                    Terms & conditions
                  </span>{" "}
                  Of Akshaak
                </span>
              </label>
            </div>

            <div className="pb-8 pt-4 flex justify-end">
              <button
                type="submit"
                className="bg-primary py-2 px-20 text-white rounded-md uppercase"
              >
                Add product
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
