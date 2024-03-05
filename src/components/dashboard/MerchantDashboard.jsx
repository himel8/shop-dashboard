/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import RejectedOrder from "../../assets/images/merchant/cancelled.svg";
import CompletedOrder from "../../assets/images/merchant/complete-orders.svg";
import Currency from "../../assets/images/merchant/currency.svg";
import SaledOrder from "../../assets/images/merchant/order-inporcess.svg";
import PendingOrder from "../../assets/images/merchant/pending-order.svg";
import ProgressOrder from "../../assets/images/merchant/progress.svg";
import TodayOrder from "../../assets/images/merchant/today-order.svg";
import Breadcrumb from "../../utils/Breadcrumb";
import DateRanger from "../../utils/DateRanger";
import SearchInput from "../../utils/SearchInput";
import Table from "../../utils/Table";

const merchantCard = [
  { name: "Total Orders", count: "0", icon: TodayOrder, value: "Status" },
  { name: "Pending Orders", count: "0", icon: PendingOrder, value: "Received" },
  {
    name: "Completed Orders",
    count: "0",
    icon: CompletedOrder,
    value: "Delivered/Picked Up",
  },
  {
    name: "Orders In Progress",
    count: "0",
    icon: ProgressOrder,
    value: "Ready for delivery/ready for Pickup",
  },
  {
    name: "Rejected Orders",
    count: "0",
    icon: RejectedOrder,
    value: "Rejected",
  },
  { name: "Today's Sale", count: "0.00", icon: SaledOrder },
];
const totalCard = [
  { name: "Total Sales", count: "0.00", icon: Currency },
  { name: "Your Share", count: "0.00", icon: Currency },
];
const searchList = [
  { id: 0, name: "Status" },
  { id: 1, name: "Received" },
  { id: 2, name: "Accepted" },
  { id: 3, name: "In process" },
  { id: 4, name: "Ready for delivery/ready for Pickup" },
  { id: 5, name: "Delivered/Picked Up" },
  { id: 6, name: "Rejected" },
];
const tabledata = [
  {
    orderId: 0,
    Date: "1",
    method: "1",
    Payment: "1",
    status: "1",
  },
];
const tableheader = [
  "Order#",
  "Date/Time",
  "Delivery method",
  "Payment",
  "Status",
];

const MerchantDashboard = () => {
  const [selectBox, useSelectBox] = useState("Total Orders");
  const [searchOption, setSearchOption] = useState("Status");
  const [dateRange, setDateRange] = useState({
    startDate: null,
    endDate: null,
  });

  const handleSearchChange = (e) => {
    setSearchOption(e.target.value);
  };

  const handleClear = () => {
    setSearchOption("Status");
    setDateRange({
      startDate: null,
      endDate: null,
    });
  };

  return (
    <>
      <Breadcrumb main="dashboard" />
      <section className=" py-10 flex items-stretch justify-between gap-5 w-full lg1200:flex-row flex-col">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 w-full lg1200:w-[65%]">
          {merchantCard.map((item, index) => (
            <div
              key={index}
              className="flex justify-between gap-5 merchant-box p-5 rounded-md cursor-pointer"
              onClick={() => useSelectBox(index !== 5 ? item.value : selectBox)}
            >
              <div>
                {index !== 5 ? (
                  <p className="text-2xl text-primary font-semibold">
                    {item.count}
                  </p>
                ) : (
                  <p className="text-2xl text-primary font-semibold">
                    <span>AED </span>
                    {item.count}
                  </p>
                )}
                <p className="text-sm  pt-3">{item.name}</p>
              </div>
              <div>
                <img src={item.icon} alt="today order" />
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2 w-full lg1200:w-[35%]">
          {totalCard.map((item, index) => (
            <div
              key={index}
              className=" bg-primary p-5 rounded-md flex flex-col justify-between h-full gap-5"
            >
              <div className="flex justify-between">
                <div>
                  <p className="text-2xl text-white font-light">AED</p>
                  <p className="text-3xl text-white ">0.00</p>
                </div>
                <div>
                  <img src={item.icon} alt="today order" />
                </div>
              </div>

              <p className="text-sm font-medium text-white">{item.name}</p>
            </div>
          ))}
        </div>
      </section>
      <div className="flex justify-between items-center flex-col md:flex-row gap-5">
        <div className="relative w-full sm:w-auto">
          <select
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            value={searchOption}
            onChange={handleSearchChange}
          >
            {searchList.map((option) => (
              <option key={option.id} value={option.name}>
                {option.name}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="flex w-full sm:w-auto  flex-col md:flex-row gap-5">
          <DateRanger value={dateRange} setValue={setDateRange} />
          <button
            onClick={handleClear}
            className="px-4 border py-2 border-gray-400 bg-[#f4f4f4] rounded-md"
          >
            Clear
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center flex-col md:flex-row gap-5 border border-gray-400 rounded-t-md mt-2 px-4 md:pt-0 pt-2">
        <h2 className="text-lg text-[#434343] font-medium">All orders</h2>
        <SearchInput />
      </div>

      {/* data */}
      <Table tableheader={tableheader} tabledata={tabledata} />
    </>
  );
};

export default MerchantDashboard;
