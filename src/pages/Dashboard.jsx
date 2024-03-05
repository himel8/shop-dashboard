import React, { useEffect, useState } from "react";
import { AiFillCustomerService } from "react-icons/ai";
import { BsBox2, BsChatLeftText, BsShop } from "react-icons/bs";
import { CgMenuGridO, CgMenuLeft } from "react-icons/cg";
import { FaUser } from "react-icons/fa6";
import { GoGear, GoReport } from "react-icons/go";
import { IoMdHome } from "react-icons/io";
import { IoList } from "react-icons/io5";
import { LuBadgePercent } from "react-icons/lu";
import { NavLink, Route, Routes } from "react-router-dom";
import { Sidenav, initTE } from "tw-elements";
import AddDiscount from "../components/dashboard/AddDiscount";
import { AddProduct } from "../components/dashboard/AddProduct";
import MerchantDashboard from "../components/dashboard/MerchantDashboard";
import DiscountDetails from "../components/dashboard/discount/DiscountDetails";
import Message from "../components/dashboard/message/Message";
import OrderList from "../components/dashboard/orders/OrderList";
import ProductList from "../components/dashboard/product/ProductList";
import ChangeNumber from "../components/dashboard/profile/ChangeNumber";
import ChangePassword from "../components/dashboard/profile/ChangePassword";
import EditProfile from "../components/dashboard/profile/EditProfile";
import SalesReport from "../components/dashboard/salesReport/SalesReport";
import ShopPreview from "../components/dashboard/shop/ShopPreview";
import ShopStatus from "../components/dashboard/shop/ShopStatus";
import CustomerServiceModal from "../utils/CustomerServiceModal";
import Dropdown from "../utils/Dropdown";
import TearmsModal from "../utils/TearmsModal";

const sideNavMenu = [
  {
    name: "Dashboard",
    icon: <IoMdHome />,
    menus: [{ name: "Merchant dashboard", link: "/" }],
  },
  {
    name: "Products",
    icon: <IoList />,
    menus: [
      { name: "Product list", link: "/product/list" },
      { name: "Add product", link: "/product/add" },
    ],
  },
  {
    name: "Orders",
    icon: <BsBox2 />,
    menus: [{ name: "Order list", link: "/order/list" }],
  },
  {
    name: "Discount",
    icon: <LuBadgePercent />,
    menus: [
      { name: "Discount details", link: "/discount/list" },
      { name: "Add discount", link: "/discount/add" },
    ],
  },
  {
    name: "Shop",
    icon: <BsShop />,
    menus: [
      { name: "Shop preview", link: "/shop/list" },
      { name: "Shop status", link: "/shop/status" },
    ],
  },
  {
    name: "Messages",
    icon: <BsChatLeftText />,
    menus: [{ name: "Inbox", link: "/inbox" }],
  },
  {
    name: "Profile",
    icon: <FaUser />,
    menus: [
      { name: "Edit profile", link: "/profile/edit" },
      { name: "Change password", link: "/profile/change-password" },
      { name: "Change Number", link: "/profile/change-number" },
    ],
  },
];

const Dashboard = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isOverMode, setIsOverMode] = useState(false);
  const [customerServiceModal, setCustomerServiceModal] = useState(false);
  const [customerTermsModal, setCustomerTermsModal] = useState(false);

  const toggleDropdown = (index) => {
    setOpenDropdown((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    initTE({ Sidenav });
    const modes = ["over", "side"];

    const handleResize = () => {
      setIsOverMode(window.innerWidth < 640);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    modes.forEach((mode) => {
      const modeSwitch = document.getElementById(mode);

      if (modeSwitch) {
        modeSwitch.addEventListener("click", () => {
          const instance = Sidenav.getInstance(
            document.getElementById("sidenav-2")
          );

          if (mode === "over") {
            setIsOverMode(true);
          } else {
            setIsOverMode(false);
          }

          instance.changeMode(mode);

          modes.forEach((el) => {
            if (el === mode) {
              ["text-blue-600", "border-blue-600"].forEach((item) =>
                modeSwitch.classList.remove(item)
              );
              modeSwitch.className +=
                " bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 focus:bg-blue-700 border-transparent";
            } else {
              const node = document.getElementById(el);
              node.className += " text-blue-600 border-blue-600";
              [
                "bg-blue-600",
                "text-white",
                "hover:bg-blue-700",
                "active:bg-blue-800",
                "focus:bg-blue-700",
                "border-transparent",
              ].forEach((item) => node.classList.remove(item));
            }
          });
        });
      }
    });

    const categoryItems = document.querySelectorAll(
      "[data-te-sidenav-link-ref]"
    );
    categoryItems.forEach((category) => {
      category.addEventListener("click", () => {
        const collapseRef = category.nextElementSibling;
        if (collapseRef) {
          const isVisible = collapseRef.classList.contains("show");
          isVisible
            ? collapseRef.classList.remove("show")
            : collapseRef.classList.add("show");
        }
      });
    });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <nav
        id="sidenav-2"
        className={`fixed left-0 top-0 z-[1035] h-screen w-60 -translate-x-full overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0 dark:bg-zinc-800 ${
          isOverMode ? "te-side-over" : ""
        }`}
        data-te-sidenav-init
        data-te-sidenav-hidden="false"
        data-te-sidenav-mode={isOverMode ? "over" : "side"}
        data-te-sidenav-content="#content"
      >
        <ul class="relative m-0 list-none px-[0.2rem]" data-te-sidenav-menu-ref>
          {sideNavMenu.map((menuItem, index) => (
            <Dropdown
              key={index}
              menuItem={menuItem}
              isOpen={openDropdown === index}
              toggleDropdown={() => toggleDropdown(index)}
            />
          ))}
          <NavLink
            to="/reports/payment-list"
            className="flex justify-between items-center cursor-pointer  py-4  
           hover:bg-[#f1f0f0]
           px-3"
          >
            <div className="flex items-center gap-2 ">
              <GoReport />
              <p>Sales Report</p>
            </div>
          </NavLink>
          <a
            href="#!"
            className="flex justify-between items-center cursor-pointer  py-4  
           hover:bg-[#f1f0f0]
           px-3"
          >
            <div
              className="flex items-center gap-2 "
              onClick={() => setCustomerServiceModal(true)}
            >
              <AiFillCustomerService />
              <p>Customer service</p>
            </div>
          </a>
          <a
            href="#!"
            className="flex justify-between items-center cursor-pointer  py-4  
           hover:bg-[#f1f0f0]
           px-3"
          >
            <div className="flex items-center gap-2 ">
              <CgMenuGridO />
              <p>User Manual</p>
            </div>
          </a>
          <a
            href="#!"
            className="flex justify-between items-center cursor-pointer  py-4  
           hover:bg-[#f1f0f0]
           px-3"
          >
            <div
              className="flex items-center gap-2 "
              onClick={(e) => setCustomerTermsModal(true)}
            >
              <GoGear />
              <p>Terms & Conditions</p>
            </div>
          </a>
        </ul>
      </nav>
      {/* Sidenav */}

      {/* Content Area */}
      <div className="p-5 !pl-[260px] " id="content">
        <div className="border-b">
          <button
            id="contentToggle"
            className=""
            data-te-sidenav-toggle-ref
            data-te-target="#sidenav-2"
            aria-controls="#sidenav-2"
            aria-haspopup="true"
          >
            <CgMenuLeft className="" size={35} />
          </button>
        </div>

        <Routes>
          <Route path="/" element={<MerchantDashboard />} />
          <Route path="/product/list" element={<ProductList />} />
          <Route path="/product/add" element={<AddProduct />} />
          <Route path="/order/list" element={<OrderList />} />
          <Route path="/discount/add" element={<AddDiscount />} />
          <Route path="/discount/list" element={<DiscountDetails />} />
          <Route path="/shop/status" element={<ShopStatus />} />
          <Route path="/shop/list" element={<ShopPreview />} />
          <Route path="/inbox" element={<Message />} />
          <Route path="/profile/edit" element={<EditProfile />} />
          <Route path="/profile/change-password" element={<ChangePassword />} />
          <Route path="/profile/change-number" element={<ChangeNumber />} />
          <Route path="/reports/payment-list" element={<SalesReport />} />
        </Routes>
      </div>

      {/* customer services modal */}
      <CustomerServiceModal
        customerServiceModal={customerServiceModal}
        setCustomerServiceModal={setCustomerServiceModal}
      />
      <TearmsModal
        customerServiceModal={customerTermsModal}
        setCustomerServiceModal={setCustomerTermsModal}
      />
    </div>
  );
};

export default Dashboard;
