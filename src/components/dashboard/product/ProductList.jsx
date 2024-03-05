import React, { useState } from "react";
import { FaEdit, FaStar } from "react-icons/fa";
import food from "../../../assets/images/food.jpg";
import emptyCard from "../../../assets/images/product.svg";
import Breadcrumb from "../../../utils/Breadcrumb";
import PageTitle from "../../../utils/PageTitle";
import SearchInput from "../../../utils/SearchInput";

const ProductList = () => {
  const [products, setProducts] = useState([{}]);
  const [rating, setRating] = useState(5);

  return (
    <div className="">
      <div
        className={`${
          products.length < 1 ? "" : "flex justify-between flex-wrap gap-5"
        }`}
      >
        <div>
          <Breadcrumb main="dashboard" page="product list" />

          <PageTitle>All products</PageTitle>
        </div>
        <div className={`${products.length < 1 ? "hidden" : "flex items-end"}`}>
          <button
            type="submit"
            className="bg-primary py-2 px-5 text-white rounded-md uppercase"
          >
            add product
          </button>
        </div>
      </div>
      {products.length < 1 ? (
        <div className="flex flex-col justify-center items-center gap-4 mt-10">
          <div>
            {" "}
            <img
              src={emptyCard}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-[#9b9b9b] text-sm text-center">
            Your products page is empty
          </p>
          <div className="pb-8 pt-4 flex justify-center ">
            <button
              type="submit"
              className="bg-primary py-3 px-16 text-white rounded-md uppercase"
            >
              add product
            </button>
          </div>
        </div>
      ) : (
        <div>
          <SearchInput />

          {/* product card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="product__card flex  items-center gap-5 flex-col sm:flex-row">
              <div className="w-[210px] h-[157px] ">
                <img
                  src={food}
                  alt="product_image"
                  className="w-[210px] h-full object-cover"
                />
              </div>
              <div className="pr-4 pt-4 w-full">
                <h3 className="text-sm font-medium">
                  Food & Drinks / Beverages
                </h3>
                <h3>Burgers</h3>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((index) => (
                    <FaStar
                      key={index}
                      className={`cursor-pointer text-sm ${
                        index <= rating ? "text-yellow-500" : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-sm font-light">(10)</span>
                </div>
                <div className="pt-5 flex justify-between gap-4">
                  <h2 className="text-primary text-xl font-medium">
                    AED 11.00
                  </h2>
                  <div>
                    <button className="bg-[#f43d54] py-2 px-4 text-white rounded-md uppercase">
                      UNPUBLISHED
                    </button>
                    <p className="text-sm pt-1 text-center text-primary">
                      Available on order
                    </p>
                  </div>
                </div>
              </div>
              <FaEdit
                size={22}
                className="absolute right-2 top-2 cursor-pointer"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
