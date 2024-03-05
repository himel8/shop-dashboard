import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const SearchInput = () => {
  return (
    <div className="border rounded-full overflow-hidden w-full sm:w-[400px] flex justify-between items-center py-2 px-4 gap-2 my-2">
      <input
        type="text"
        className="w-full outline-0 font-light"
        placeholder="Search products"
      />
      <IoSearchOutline size={25} />
    </div>
  );
};

export default SearchInput;
