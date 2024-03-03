import React from "react";

const FromTitle = ({ children, Style }) => {
  return (
    <div className="border rounded-md px-6 py-2 mt-10">
      <h2 className="text-lg text-[#434343] font-medium">{children}</h2>
    </div>
  );
};

export default FromTitle;
