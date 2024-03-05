import React, { useRef, useState } from "react";
import { FaCheckCircle, FaStar } from "react-icons/fa";
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
import FromTitle from "../../createShop/FromTitle";

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
