import React from "react";

const FromTitle = ({ children, Style }) => {
  return (
    <div className="border rounded-md px-6 py-4 mt-12">
      <h2 className="text-lg text-[#434343] font-bold">{children}</h2>
    </div>
  );
};

export default FromTitle;
