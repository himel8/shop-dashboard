import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { GoChevronRight } from "react-icons/go";
import { IoTrashOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import emptyDiscountCard from "../../../assets/images/no-discount.svg";
import Breadcrumb from "../../../utils/Breadcrumb";
import PageTitle from "../../../utils/PageTitle";
import SearchInput from "../../../utils/SearchInput";

const DiscountDetails = () => {
  const [products, setProducts] = useState([]);
  const [rating, setRating] = useState(5);
  return (
    <div>
      <Breadcrumb main="dashboard" page="discount details" />

      <PageTitle>Discounts</PageTitle>
      {products.length < 1 ? (
        <div className="flex flex-col justify-center items-center gap-4 mt-10">
          <div>
            {" "}
            <img
              src={emptyDiscountCard}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-[#2c3642] text-lg text-center">
            Your discount page is empty
          </p>
          <div className="pb-8 pt-4 flex justify-center ">
            <Link to="/discount/add">
              <button className="bg-primary py-3 px-16 text-white rounded-md uppercase">
                add discount
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <SearchInput />

          {/* product card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="product__card flex  items-center gap-5 flex-col sm:flex-row z-10 cursor-pointer">
              <div className="pr-4 pt-4  flex flex-col gap-2">
                <h3 className="text-lg font-medium text-[#2c3642]">new</h3>
                <h2 className="text-primary text-lg font-medium">
                  AED 11.00 off
                </h2>
                <p className="text-[#adabab] text-lg">Applied on 1 Products</p>
                <button className="bg-[#56da77] text-white px-6 py-1 rounded-full">
                  27-03-2024 {"<"} 28-03-2024
                </button>
              </div>

              <GoChevronRight
                size={30}
                className="absolute right-2 top-[50%] -translate-y-1/2 cursor-pointer text-primary"
              />
              <FaEdit
                size={22}
                className="absolute right-2 top-2 cursor-pointer"
              />
              <IoTrashOutline
                size={40}
                className="absolute right-2 bottom-2 cursor-pointer bg-[#e51607] rounded-full p-2 text-white z-20"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DiscountDetails;
