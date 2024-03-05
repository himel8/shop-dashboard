import React, { useRef, useState } from "react";
import { FaCheckCircle, FaRegEdit, FaStar } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import facebook from "../../../assets/images/facebook_circle.svg";
import instagram from "../../../assets/images/instagram_circle.svg";
import twitter from "../../../assets/images/twitter_circle.svg";
import user from "../../../assets/images/user.jpg";
import youtube from "../../../assets/images/youtube_circle.svg";
import Breadcrumb from "../../../utils/Breadcrumb";
import PageTitle from "../../../utils/PageTitle";
const day = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const ShopPreview = () => {
  const [rating, setRating] = useState(5);
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

  const socials = [
    { link: "", icon: facebook },
    { link: "", icon: youtube },
    { link: "", icon: twitter },
    { link: "", icon: instagram },
  ];
  return (
    <div>
      <Breadcrumb main="dashboard" page="shop preview" />

      <PageTitle>MY SHOP PREVIEW</PageTitle>

      <div className="flex gap-5 items-start md900:flex-row flex-col  my-6">
        <div className="relative w-full sm:max-w-[288px] flex  justify-center rounded-lg overflow-hidden pt-6 pb-10">
          <div className="absolute inset-0 w-full h-full bg-cover bg-center bg-hero-pattern "></div>

          <div className="absolute inset-0 w-full h-full bg-[#212a32] opacity-95"></div>

          <div className="relative z-10 text-white text-center flex justify-center items-center flex-col gap-2">
            <div className="w-[150px] h-[150px] rounded-full overflow-hidden">
              <img
                src={user}
                alt="logo"
                className="w-full h-full object-cover"
              />
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
        <div>
          <div>
            <div className="flex justify-between items-center gap-5 flex-wrap">
              <button className="text-sm bg-[#56da77] rounded-full px-4 py-1 text-white">
                Shop status: Open
              </button>
              <div className="flex gap-2 lg1160:flex-row flex-col md:w-auto w-full">
                <div className="flex items-center md:w-auto w-full">
                  <FaRegEdit className="w-[40px] h-[40px] bg-[#eeeeee] p-3 flex items-center peer" />
                  <p className="h-[40px] flex items-center border border-[#eeeeee] px-2 hover:bg-primary peer-hover:bg-primary peer-hover:text-white hover:text-white md:w-auto w-full">
                    Shop information
                  </p>
                </div>
                <div className="flex items-center md:w-auto w-full">
                  <FaRegEdit className="w-[40px] h-[40px] bg-[#eeeeee] p-3 flex items-center peer" />
                  <p className="h-[40px] flex items-center border border-[#eeeeee] px-2 hover:bg-primary peer-hover:bg-primary peer-hover:text-white hover:text-white md:w-auto w-full">
                    Business details
                  </p>
                </div>
                <div className="flex items-center md:w-auto w-full">
                  <FaRegEdit className="w-[40px] h-[40px] bg-[#eeeeee] p-3 flex items-center peer" />
                  <p className="h-[40px] flex items-center border border-[#eeeeee] px-2 hover:bg-primary peer-hover:bg-primary peer-hover:text-white hover:text-white md:w-auto w-full">
                    Shop policies
                  </p>
                </div>
              </div>
            </div>
            <a href="#!">
              <div className="flex items-center gap-1 mt-2 ">
                <IoLocationOutline className="text-primary" />
                <p>Al Hili</p>
              </div>
            </a>
            <h3 className="text-lg text-[#212529] py-3">Working days</h3>
            <div className="flex items-center gap-2 flex-wrap ">
              {day.map((item, index) => (
                <div
                  key={index}
                  className="border border-primary text-primary p-2 rounded-md text-center w-[110px] cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="py-10">
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
        </div>
      </div>

      <div className="flex justify-start sm:justify-between sm:items-center gap-5 flex-col sm:flex-row">
        <h2 className="text-lg text-[#434343] font-regular">Your Products</h2>
        <div className="flex sm:justify-end items-center gap-2">
          <button className="bg-[#434343] py-2 px-8 text-white rounded-md uppercase">
            View all
          </button>
          <button className="bg-primary py-2 px-8 text-white rounded-md uppercase">
            Add product
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ShopPreview;
