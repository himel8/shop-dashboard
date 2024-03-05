import { Form, Formik } from "formik";
import React, { useRef, useState } from "react";
import { FaCheckCircle, FaStar } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import facebook from "../../../assets/images/facebook_circle.svg";
import instagram from "../../../assets/images/instagram_circle.svg";
import twitter from "../../../assets/images/twitter_circle.svg";
import user from "../../../assets/images/user.jpg";
import youtube from "../../../assets/images/youtube_circle.svg";
import Breadcrumb from "../../../utils/Breadcrumb";
import PageTitle from "../../../utils/PageTitle";
import CustomInput from "../../createShop/CustomInput";
import FromTitle from "../../createShop/FromTitle";

const validationSchema = Yup.object().shape({
  toDate: Yup.date().required("This field is required"),
  fromDate: Yup.date().required("This field is required"),
});

const initialValues = {
  fromDate: null,
  toDate: null,
};
const socials = [
  { link: "", icon: facebook },
  { link: "", icon: youtube },
  { link: "", icon: twitter },
  { link: "", icon: instagram },
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

const ShopStatus = () => {
  const [rating, setRating] = useState(5);
  const [radioOver, setRadioOver] = useState(1);
  const [status, setStatus] = useState("open");
  const linkToCopy = "www.akshaak.com/foodcorner";
  const linkRef = useRef(null);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(linkToCopy);
      toast.success("Link has been copied!", {
        autoClose: 2000,
        theme: "colored",
      });
    } catch (err) {
      console.error("Unable to copy to clipboard:", err);
      toast.error("Failed to copy link");
    }
  };
  const onSubmit = (values, { setSubmitting }) => {
    console.log("Form submitted with values:", values);
    setSubmitting(false);
  };
  return (
    <div>
      <Breadcrumb main="dashboard" page="shop status" />

      <PageTitle>Shop status</PageTitle>
      {/* shop card */}
      <div className="relative w-full sm:max-w-[288px] flex items-center justify-center rounded-lg overflow-hidden pt-6 pb-10 my-6">
        <div className="absolute inset-0 w-full h-full bg-cover bg-center bg-hero-pattern "></div>

        <div className="absolute inset-0 w-full h-full bg-[#212a32] opacity-95"></div>

        <div className="relative z-10 text-white text-center flex justify-center items-center flex-col gap-2">
          <div className="w-[150px] h-[150px] rounded-full overflow-hidden">
            <img src={user} alt="logo" className="w-full h-full object-cover" />
          </div>
          <div className="flex justify-center items-center gap-2">
            <h3 className="text-xl">Food corner</h3>
            <FaCheckCircle
              color="#56da77"
              className="bg-white rounded-full border-[#56da77] text-xl"
            />
          </div>

          <p className="text-sm">Food & Drinks</p>

          <div className="flex items-center justify-center gap-1">
            {[1, 2, 3, 4, 5].map((index) => (
              <FaStar
                key={index}
                className={`cursor-pointer text-sm ${
                  index <= rating ? "text-yellow-500" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <div className="flex items-center justify-center gap-4 pt-4">
            {socials.map((item, index) => (
              <a href={item.link} key={index}>
                <img src={item.icon} alt="" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <button className="bg-[#56da77] py-1 px-6 rounded-full text-white">
        Shop status: Open
      </button>
      <a href="#!">
        <div className="flex items-center gap-1 mt-2 ">
          <IoLocationOutline className="text-primary" />
          <p>Al Hili</p>
        </div>
      </a>

      <h3 className="text-lg text-[#212529] font-medium py-2">Working days</h3>
      <div className="flex items-center gap-2 flex-wrap ">
        {day.map((item, index) => (
          <div
            key={index}
            className="border border-primary text-primary p-2 rounded-md text-center w-[110px]"
          >
            {item}
          </div>
        ))}
      </div>

      <div className="py-20">
        <div className="pt-2">
          <p className="text-[#212529] text-sm font-semibold">
            Shop description
          </p>
          <p className="text-[#adabab] text-sm ">food app</p>
        </div>
        <div className="pt-2">
          <p className="text-[#212529] text-sm font-semibold">
            Shop unique link
          </p>
          <div className="text-[#212529] text-sm">
            <input
              ref={linkRef}
              type="text"
              value={linkToCopy}
              readOnly
              className="hidden"
            />
            www.akshaak.com/
            <span className="font-semibold">foodcorner</span>
            <button
              onClick={handleCopyLink}
              className="ml-2 text-primary font-medium underline cursor-pointer"
            >
              Copy link
            </button>
          </div>
        </div>
      </div>
      <FromTitle>Change Shop Status</FromTitle>
      <div className="flex gap-5 items-center py-4">
        <div
          className="cursor-pointer radio_button flex gap-1"
          onClick={(e) => setStatus("open")}
        >
          <div
            className={`${
              status === "open" ? "click" : ""
            } w-6 h-6 bg-[#fef7eb] rounded-full border border-primary`}
          ></div>
          <p className="text-lg text-[#434343] uppercase">Open A Shop</p>
        </div>
        <div
          className="cursor-pointer radio_button flex gap-1"
          onClick={(e) => setStatus("holidy")}
        >
          <div
            className={`${
              status === "holidy" ? "click" : ""
            } w-6 h-6 bg-[#fef7eb] rounded-full border border-primary`}
          ></div>
          <p className="text-lg text-[#434343] uppercase">HOLIDAY</p>
        </div>
        <div
          className="cursor-pointer radio_button flex gap-1"
          onClick={(e) => setStatus("over")}
        >
          <div
            className={`${
              status === "over" ? "click" : ""
            } w-6 h-6 bg-[#fef7eb] rounded-full border border-primary`}
          ></div>
          <p className="text-lg text-[#434343] uppercase">OVERLOADED</p>
        </div>
      </div>

      {status === "holidy" && (
        <div className="flex gap-3  py-4 flex-col">
          <p className="text-sm text-[#9b9b9b]">
            Please select the date range that you will not be available
          </p>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ values, handleChange, isSubmitting, isValidating }) => (
              <Form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pb-4">
                  <CustomInput
                    label="From Date"
                    placeholder="From Date"
                    name="fromDate"
                    values={values}
                    onChange={handleChange}
                    type="date"
                  />
                  <CustomInput
                    label="To Date"
                    placeholder="To Date"
                    name="toDate"
                    values={values}
                    onChange={handleChange}
                    type="date"
                  />
                </div>
              </Form>
            )}
          </Formik>
          <div
            className="cursor-pointer radio_button flex gap-1"
            onClick={(e) => setRadioOver(1)}
          >
            <div
              className={`${
                radioOver === 1 ? "clickR" : ""
              } w-4 h-4 bg-[#fef7eb] rounded-full border border-primary`}
            ></div>
            <p className="text-sm text-[#181f27] ">
              I will be able to accept orders (expect some delays)
            </p>
          </div>
          <div
            className="cursor-pointer radio_button flex gap-1"
            onClick={(e) => setRadioOver(2)}
          >
            <div
              className={`${
                radioOver === 2 ? "clickR" : ""
              } w-4 h-4 bg-[#fef7eb] rounded-full border border-primary`}
            ></div>
            <p className="text-sm text-[#181f27] ">
              I will not be able to accept orders and check-out will be disabled
              (This can affect your sales and customer experience)
            </p>
          </div>
        </div>
      )}

      {status === "over" && (
        <div className="flex gap-3  py-4 flex-col">
          <div
            className="cursor-pointer radio_button flex gap-1"
            onClick={(e) => setRadioOver(1)}
          >
            <div
              className={`${
                radioOver === 1 ? "clickR" : ""
              } w-4 h-4 bg-[#fef7eb] rounded-full border border-primary`}
            ></div>
            <p className="text-sm text-[#181f27] ">
              I will be able to accept orders (expect some delays)
            </p>
          </div>
          <div
            className="cursor-pointer radio_button flex gap-1"
            onClick={(e) => setRadioOver(2)}
          >
            <div
              className={`${
                radioOver === 2 ? "clickR" : ""
              } w-4 h-4 bg-[#fef7eb] rounded-full border border-primary`}
            ></div>
            <p className="text-sm text-[#181f27] ">
              I will not be able to accept orders and check-out will be disabled
              (This can affect your sales and customer experience)
            </p>
          </div>
        </div>
      )}

      <div className="pb-8 pt-4 flex justify-end mt-12">
        <button className="bg-primary py-4 px-24 text-white rounded-md capitalize">
          Add discount
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ShopStatus;
