/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import add from "../../assets/images/add-file.png";
import arts from "../../assets/images/cat-1.png";
import fashion from "../../assets/images/cat-2.png";
import food from "../../assets/images/cat-3.png";
import health from "../../assets/images/cat-4.png";
import CropImage from "./CropImage";
import CustomInput from "./CustomInput";
import CustomSocialInput from "./CustomSocialInput";
import CustomTextarea from "./CustomTextarea";
import FromTitle from "./FromTitle";
import SelectOption from "./SelectOption";

const categoryList = [
  { name: " Arts & Crafts ", img: arts },
  { name: "  Fashion  ", img: fashion },
  { name: "   Food & Drinks   ", img: food },
  { name: "   Health & Beauty   ", img: health },
];
const lisenceCategoryOptions = [
  { id: 1, name: "Dubai Economic Department (Dubai Trader)" },
  { id: 2, name: "Dubai Economic Department (Dubai Trader)" },
  { id: 3, name: "Ajman Businesswomen Council (Bedayat)" },
  { id: 4, name: "Ministry of Community Development (Alsanaa)" },
  {
    id: 5,
    name: "Department of Economic Development - Ajman ( Reyada Program)",
  },
  { id: 6, name: "Department of Economic Development - Abu Dhabi" },
  { id: 7, name: "Economic Development Department - Sharjah (Eitimad)" },
  { id: 8, name: "Intelaq license" },
  { id: 9, name: "Others" },
  { id: 10, name: "Fazaa" },
];
const Step1 = ({ values, handleChange }) => {
  const [category, setCategory] = useState("");
  const [alias, setAlias] = useState("");
  const [facebookAlias, setFacebookAlias] = useState("");
  const [youtubeAlias, setYoutubeAlias] = useState("");
  const [twitterAlias, setTwitterAlias] = useState("");
  const [instagramAlias, setInstagramAlias] = useState("");
  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);
  const [logoImage, setLogoImage] = useState(null);
  const [licenceImage, setLicenceImage] = useState(null);

  const handleNextClick = (value) => {
    setCategory(value);
    if (!category) {
      toast.error("Please select a category.");
      return;
    }
  };

  const handleLicenceImageChange = (e) => {
    const file = e.target.files[0];

    setLicenceImage(file?.name);
  };

  const handleFacebookChange = (e) => {
    setFacebookAlias(e.target.value);
  };
  const handleYoutubeChange = (e) => {
    setYoutubeAlias(e.target.value);
  };
  const handleTwitterChange = (e) => {
    setTwitterAlias(e.target.value);
  };
  const handleInstagramChange = (e) => {
    setInstagramAlias(e.target.value);
  };

  const handleAliasChange = (e) => {
    const newAlias = e.target.value;
    setAlias(newAlias);
  };
  const deleteLicenceImg = (e) => {
    setLicenceImage(null);
  };
  const previewUrl = `www.akshaak.com/${alias}`;
  // const facebookUrl = `https://www.facebook.com/${facebookAlias}`;

  return (
    <div>
      <h2 className="text-xl font-medium text-[#212529]">
        <span className="font-bold">Step 1</span> - My shop
      </h2>
      <h2 className="text-xl font-medium text-[#212529]">Select a category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-2">
        {categoryList.map((item, index) => (
          <div
            className={`cursor-pointer border rounded-md ${
              category === item.name
                ? "bg-primary text-white"
                : "text-[#212529] bg-[#f6f6f6]"
            }  p-5 flex justify-center items-center flex-col gap-3`}
            key={index}
            onClick={() => handleNextClick(item.name)}
          >
            <div>
              <img src={item.img} alt={item.name} />
            </div>
            <p className="text-lg ">{item.name}</p>
          </div>
        ))}
      </div>
      <div className="pt-6 flex justify-between gap-10 sm:gap-5 flex-col sm:flex-row">
        <div className="w-full">
          <div className="relative border rounded-md px-6 py-4">
            <h2 className="text-lg text-[#434343]  font-bold">
              Add Your Shop Details
            </h2>
            <p className="text-sm text-[#fff] bg-primary absolute top-[-20px] left-0 rounded-md p-[6px]">
              English
            </p>
          </div>
          <CustomInput
            label="Shop Name"
            placeholder="Shop Name"
            name="shopName"
            values={values}
            onChange={handleChange}
          />
          <CustomTextarea
            label="Shop Description"
            placeholder="Shop Description"
            name="shopDesc"
            values={values}
            onChange={handleChange}
          />
        </div>
        <div className="w-full">
          <div className="relative border rounded-md px-6 py-4 ">
            <h2 className="text-lg text-[#434343]  font-bold text-right">
              أضف تفاصيل متجرك
            </h2>
            <p className="text-sm text-[#fff] bg-[#434343] absolute top-[-20px] right-0 rounded-md p-[6px] text-right">
              العربية
            </p>
          </div>
          <div className="pt-8 flex flex-col">
            <label htmlFor="shop_name_A" className="text-right">
              إسم المتجر
            </label>
            <input
              id="shop_name_A"
              type="text"
              required={true}
              name="shopName"
              placeholder="إسم المتجر"
              onChange={handleChange}
              value={values.name}
              className="text-right w-full bg-[#f6f6f6] py-2 px-3 outline-0 mt-2 font-medium rounded-md"
            />
          </div>
          <div className="pt-8 flex flex-col">
            <label htmlFor="shop_description_A" className="text-right">
              وصف المتجر
            </label>
            <textarea
              id="shop_description_A"
              type="text"
              rows={6}
              required={true}
              name="shopName"
              placeholder="وصف المتجر"
              onChange={handleChange}
              value={values.name}
              className="text-right w-full bg-[#f6f6f6] py-2 px-3 outline-0 mt-2 font-medium rounded-md"
            />
          </div>
        </div>
      </div>

      <FromTitle>Custom Shop Url</FromTitle>
      <div className="flex justify-between items-center gap-10 sm:gap-5 flex-col sm:flex-row">
        <CustomInput
          label="Shop Alias"
          placeholder="Enter Shop Alias"
          name="shopAlias"
          values={values}
          onChange={handleAliasChange}
        />

        <div className="pt-8 w-full">
          <label>URL preview</label>
          <input
            type="text"
            value={previewUrl}
            required={true}
            name="shopName"
            placeholder="Enter Shop Alias"
            onChange={handleChange}
            className="w-full rounded-md bg-[#f6f6f6] py-2 px-3 outline-0 mt-2 font-medium"
          />
        </div>
      </div>

      <FromTitle>Emirates Id</FromTitle>
      <div className="flex justify-between gap-10 sm:gap-5 flex-col sm:flex-row">
        <div className="w-full">
          <CropImage
            image={frontImage}
            label="Emirates Id (Front)"
            setImage={setFrontImage}
            id={"frontImage"}
            name={"frontImage"}
          />
          <div className="pt-8 w-full">
            <label>License number</label>
            <input
              type="text"
              value={values.name}
              required={true}
              name="licenseNumber"
              placeholder="License number"
              onChange={handleChange}
              className="w-full rounded-md bg-[#f6f6f6] py-2 px-3 outline-0 mt-2 font-medium"
            />
          </div>
          <SelectOption
            label="License source"
            name="licenseCategory"
            listItem={lisenceCategoryOptions}
            placeholder="Select license source"
          />
        </div>
        <div className="w-full">
          <CropImage
            image={backImage}
            label="Emirates Id (Back)"
            setImage={setBackImage}
            id={"backImage"}
            name={"backImage"}
          />
          <div className="pt-8 w-full">
            <p className="text-base ">License File</p>
            <label htmlFor="licenseFile" className="flex items-center gap-1">
              <img src={add} alt="" width={30} />
              <p>
                {licenceImage ? (
                  <div className="flex gap-1 items-center">
                    {licenceImage}{" "}
                    <div
                      className="bg- bg-red-700 rounded-full p-2 text-white cursor-pointer"
                      onClick={deleteLicenceImg}
                    >
                      <FaTrashAlt />
                    </div>
                  </div>
                ) : (
                  "Upload License File"
                )}
              </p>
            </label>
            <input
              type="file"
              id="licenseFile"
              value={values.name}
              required={true}
              name="licenseFile"
              placeholder="License number"
              onChange={handleLicenceImageChange}
              className="hidden"
            />
          </div>
        </div>
      </div>

      <FromTitle>Add Your Shop Logo</FromTitle>
      <CropImage
        image={logoImage}
        label="Add your shop logo "
        setImage={setLogoImage}
        id={"logoImage"}
        name={"logoImage"}
      />

      <FromTitle>Social Media Accounts</FromTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 ">
        <CustomSocialInput
          label="Facebook"
          id="facebook"
          name="facebookUrl"
          onChange={handleFacebookChange}
          value={facebookAlias}
          constantUrl={"https://www.facebook.com/"}
          paddingLeft="pl-[230px]"
        />

        <CustomSocialInput
          label="Youtube"
          id="youtube"
          name="youtubeUrl"
          onChange={handleYoutubeChange}
          value={youtubeAlias}
          constantUrl={"https://www.youtube.com/"}
          paddingLeft="pl-[222px]"
        />
        <CustomSocialInput
          label="Twitter"
          id="twitter"
          name="twitterUrl"
          onChange={handleTwitterChange}
          value={twitterAlias}
          constantUrl={"https://www.twitter.com/"}
          paddingLeft="pl-[208px]"
        />
        <CustomSocialInput
          label="Instagram"
          id="instagram"
          name="instagramUrl"
          onChange={handleInstagramChange}
          value={instagramAlias}
          constantUrl={"https://www.instagram.com/"}
          paddingLeft="pl-[235px]"
        />
      </div>
    </div>
  );
};

export default Step1;
