import React from "react";
import FormComponent from "../components/createShop/FormComponent";

const CreateShop = () => {
  return (
    <section>
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
