import React from "react";
import ShopStatus from "../components/dashboard/shop/ShopStatus";

const Dashboard = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center  h-full"></div>

      {/* onClose={closeDrawer} */}
      <div className="flex gap-5">
        <ShopStatus />
      </div>
    </>
  );
};

export default Dashboard;
