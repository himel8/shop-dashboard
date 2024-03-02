/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import RejectedOrder from "../../assets/images/merchant/cancelled.svg";
import CompletedOrder from "../../assets/images/merchant/complete-orders.svg";
import Currency from "../../assets/images/merchant/currency.svg";
import SaledOrder from "../../assets/images/merchant/order-inporcess.svg";
import PendingOrder from "../../assets/images/merchant/pending-order.svg";
import ProgressOrder from "../../assets/images/merchant/progress.svg";
import TodayOrder from "../../assets/images/merchant/today-order.svg";

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

const MerchantDashboard = () => {
  const [selectBox, useSelectBox] = useState("Total Orders");
  console.log(selectBox);
  return (
    <>
      <section className="p-10 flex items-stretch justify-between gap-5 w-full">
        <div className="grid grid-cols-3 gap-5 w-[65%]">
          {merchantCard.map((item, index) => (
            <div
              key={index}
              className="flex justify-between gap-5 merchant-box p-5 rounded-md cursor-pointer"
              onClick={() => useSelectBox(index !== 5 ? item.value : selectBox)}
            >
              <div>
                {index !== 5 ? (
                  <p className="text-2xl text-primary font-bold">
                    {item.count}
                  </p>
                ) : (
                  <p className="text-2xl text-primary font-bold">
                    <span>AED </span>
                    {item.count}
                  </p>
                )}
                <p className="text-sm font-medium">{item.name}</p>
              </div>
              <div>
                <img src={item.icon} alt="today order" />
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-5 w-[35%]">
          {totalCard.map((item, index) => (
            <div
              key={index}
              className=" bg-primary p-5 rounded-md flex flex-col justify-between h-full"
            >
              <div className="flex justify-between">
                <div>
                  <h3 className="text-3xl text-white">AED</h3>
                  <p className="text-3xl text-white">0.00</p>
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
      <section className="p-10">
        <div className="mt-1 rounded-md shadow-sm -space-y-px">
          <div>
            <select
              name="country"
              autoComplete="country-name"
              className="focus:ring-indigo-500 focus:border-indigo-500 relative block w-full rounded-none rounded-t-md bg-transparent focus:z-10 sm:text-sm border-gray-300"
            >
              <option>{selectBox}</option>
              <option>Status</option>
              <option>Received</option>
              <option>Accepted</option>
              <option>In process</option>
              <option>Ready for delivery/ready for Pickup</option>
              <option>Delivered/Picked Up</option>
              <option>Rejected</option>
            </select>
          </div>
        </div>
      </section>
    </>
  );
};

export default MerchantDashboard;
