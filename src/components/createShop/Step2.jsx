import { Field } from "formik";
import React, { useState } from "react";
import CustomInput from "./CustomInput";
import FromTitle from "./FromTitle";
import SelectOption from "./SelectOption";

const countryOptions = [{ id: 1, name: "United Arab Emirates" }];
const emirateOptions = [
  { id: 1, name: "Abu Dhabi" },
  { id: 2, name: "Ajman" },
  { id: 3, name: "Al Ain" },
  { id: 4, name: "Al Dhafra (western region)" },
  { id: 5, name: "Dubai" },
  { id: 6, name: "Fujairah" },
  { id: 7, name: "Ras Al Khaimah" },
  { id: 8, name: "Sharjah" },
  { id: 9, name: "Umm Al Quawain" },
];
const days = [
  { name: "everyday" },
  {
    name: "customize",
  },
];
const day = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const Step2 = ({ values, handleChange }) => {
  const [workday, setWorkday] = useState("everyday");

  return (
    <div>
      <h2 className="text-xl font-medium text-[#212529] mb-2">
        <span className="font-bold">Step 2</span> - Shop location
      </h2>
      <FromTitle>My Location</FromTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <SelectOption
          label="Country"
          name="country"
          listItem={countryOptions}
          placeholder="Select country"
        />
        <SelectOption
          label="Emirate"
          name="emirate"
          listItem={emirateOptions}
          placeholder="Select emirate"
        />
        <SelectOption
          label="Area"
          name="area"
          listItem={emirateOptions}
          placeholder="area"
        />
        <CustomInput
          label="Building / Villa Name"
          placeholder="Building / Villa Name"
          name="villaName"
          values={values}
          onChange={handleChange}
        />
        <CustomInput
          label="Apt / Villa Number"
          placeholder="Apt / Villa Number"
          name="villaNumber"
          values={values}
          onChange={handleChange}
        />
        <CustomInput
          label="Street Name / Number"
          placeholder="Street Name / Number"
          name="streetName"
          values={values}
          onChange={handleChange}
        />
        <CustomInput
          label="Address Detail"
          placeholder="Address Detail"
          name="addressDetail"
          values={values}
          onChange={handleChange}
        />
      </div>

      <FromTitle>Delivery Type</FromTitle>
      <div className="pt-8 w-full">
        <label className="flex items-center">
          <Field
            type="checkbox"
            id="delivery"
            name="delivery"
            className="mr-2 border-primary h-4 w-4 rounded"
          />
          <span className="w-full text-sm text-[#181f27] leading-[25px]">
            Akshaak delivery
          </span>
        </label>
      </div>
      <div className="pt-4 w-full">
        <label className="flex items-center">
          <Field
            type="checkbox"
            id="pickUp"
            name="pickUp"
            className="mr-2 border-primary h-4 w-4 rounded"
          />
          <span className="w-full text-sm text-[#181f27] leading-[25px]">
            Customer pick-up (Address will be shared with the customer)
          </span>
        </label>
      </div>

      <FromTitle>Days Of Operation</FromTitle>
      <div className="pt-8">
        <p className="text-base">
          Select the days that your shop is open and you are available to accept
          orders. (E.g. Weekends are off)
        </p>
      </div>
      <div className="flex  sm:flex-row flex-col sm:items-center mt-8 sm:gap-2 gap-5">
        {days.map((item, index) => (
          <div
            key={index}
            className={`${
              workday === item.name
                ? "bg-primary text-white"
                : "bg-[#f6f6f6] text-[#434343]"
            } py-4 px-20 rounded-md  text-lg font-medium cursor-pointer`}
            onClick={() => setWorkday(item.name)}
          >
            {item.name}
          </div>
        ))}
      </div>
      {workday === "customize" && (
        <div className="flex gap-5 sm:items-center mt-8 lg:flex-nowrap flex-wrap sm:flex-row flex-col">
          {day.map((item, index) => (
            <label key={index} className="flex items-center">
              <Field
                type="checkbox"
                id="pickUp"
                name={item}
                className="mr-2 border-primary h-4 w-4 rounded"
              />
              <span className="w-full text-xl text-[#181f27] leading-[25px]">
                {item}
              </span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default Step2;
