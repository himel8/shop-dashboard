import React from "react";
import FormComponent from "../components/createShop/FormComponent";

const CreateShop = () => {
  return (
    <section className="w-[95%] mx-auto">
      <h2 className="text-2xl text-[#5a5a5a]  uppercase font-regular py-7">
        create new shop
      </h2>
      <div>
        <FormComponent />
      </div>
    </section>
  );
};

export default CreateShop;
