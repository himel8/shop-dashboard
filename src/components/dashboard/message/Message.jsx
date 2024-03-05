import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import Breadcrumb from "../../../utils/Breadcrumb";

const Message = () => {
  const [messages, setMessages] = useState(0);
  return (
    <div>
      <Breadcrumb main="dashboard" page="inbox" />
      <div className="pt-10">
        <div className="max-w-[300px] bg-[#f7f7f9] py-[10px] px-[15px] rounded-md min-h-[300px]">
          <div className="border rounded-full overflow-hidden w-full flex justify-between items-center py-2 px-4 gap-2 my-2">
            <input
              type="text"
              className={`w-full outline-0 font-light text-base ${
                messages ? "" : "cursor-not-allowed"
              }`}
              disabled={messages === 0}
              placeholder="Search messages"
            />
            <IoSearchOutline size={25} />
          </div>

          {messages ? (
            <div></div>
          ) : (
            <div className="mt-10">
              <p className="text-sm text-center text-[#212529]">
                No conversation found!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;
