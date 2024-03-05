import React, { useState } from "react";
import Breadcrumb from "../../../utils/Breadcrumb";
import DateRanger from "../../../utils/DateRanger";
import SearchInput from "../../../utils/SearchInput";
import Table from "../../../utils/Table";
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

const OrderList = () => {
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
    <div className="">
      <Breadcrumb main="dashboard" page="order list" />

      <div className="pt-10 flex justify-between items-center flex-col md:flex-row gap-5">
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
    </div>
  );
};

export default OrderList;
