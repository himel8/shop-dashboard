import { Field } from "formik";
import React, { useState } from "react";
import CustomInput from "./CustomInput";
import FromTitle from "./FromTitle";

const Step3 = ({ values, handleChange }) => {
  const [bankDetailsChecked, setBankDetailsChecked] = useState(false);
  return (
    <div>
      <h2 className="text-xl font-medium text-[#212529] mb-2">
        <span className="font-bold">Step 3</span> - Shop setup
      </h2>
      <div className="pt-8 w-full">
        <label className="flex ">
          <Field
            type="checkbox"
            id="delivery"
            name="bankDetailsChecked"
            checked={bankDetailsChecked}
            onChange={() => setBankDetailsChecked(!bankDetailsChecked)}
            className="mr-2 border-primary h-4 w-4 rounded"
          />
          <span className="text-sm text-[#181f27] leading-[25px] w-full">
            I don't have a bank account and prefer an alternate payout through
            exchange (AED 20 transfer charges will be applied)
          </span>
        </label>
      </div>

      <FromTitle>Bank Details</FromTitle>
      {!bankDetailsChecked && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <CustomInput
            label="IBAN Number"
            placeholder="IBAN Number"
            name="IBANNumber"
            values={values}
            onChange={handleChange}
          />
          <div></div>
          <CustomInput
            label="Bank Name"
            placeholder="Bank Name"
            name="bankName"
            values={values}
            onChange={handleChange}
          />
          <CustomInput
            label="Branch Name"
            placeholder="Branch Name"
            name="branchName"
            values={values}
            onChange={handleChange}
          />
          <CustomInput
            label="Account Name"
            placeholder="Account Name"
            name="accountName"
            values={values}
            onChange={handleChange}
          />
          <CustomInput
            label="Swift / BIC Code"
            placeholder="Swift / BIC Code"
            name="swiftCode "
            values={values}
            onChange={handleChange}
          />
        </div>
      )}

      <FromTitle>Shop Policies</FromTitle>
      <div className="pt-8">
        <label>Shop Policies</label>
        <textarea
          id="Shop Policies"
          type="text"
          rows={6}
          required={true}
          name="shopPolicies"
          placeholder="Shop Policies"
          onChange={handleChange}
          value={values.name}
          className="rounded-md w-full bg-[#f6f6f6] py-2 px-3 outline-0 mt-2 font-medium"
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
          <span className="w-full text-sm text-[#181f27] leading-[25px]">
            I agree with the{" "}
            <span className="font-bold text-primary cursor-pointer">
              Terms & conditions
            </span>
          </span>
        </label>
      </div>
    </div>
  );
};

export default Step3;
