import React from "react";
import { FaChevronUp } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Dropdown = ({ menuItem, isOpen, toggleDropdown }) => {
  const { name, icon, menus } = menuItem;

  return (
    <div className="">
      <div
        className={`flex justify-between items-center cursor-pointer relative py-4  ${
          isOpen ? "bg-[#fbdba7] " : "hover:bg-[#f1f0f0]"
        }  duration-400 ease-in-out transition-all px-3`}
        onClick={toggleDropdown}
      >
        <div
          className={`flex items-center gap-2 ${
            isOpen ? " text-[#f4a523]" : ""
          }`}
        >
          {icon}
          <p>{name}</p>
        </div>
        <FaChevronUp
          className={` transition-all ease-in-out duration-400 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      <ul className={`px-8 dropdown-list  ${isOpen ? "open " : ""}`}>
        {menus?.map((item, index) => (
          <li className="py-3">
            <NavLink
              activeClassName="active-link"
              to={item.link}
              key={index}
              className={({ isActive, isPending }) =>
                isActive ? "text-[#f4a523]" : ""
              }
              onMouseEnter={(e) => e.target.classList.add("hover-link")}
              onMouseLeave={(e) => e.target.classList.remove("hover-link")}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
