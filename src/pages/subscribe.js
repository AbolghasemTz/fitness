import React from "react";
import { useRouter } from "next/router";

// formik
import { useFormik } from "formik";
import * as Yup from "yup";

// components
import Wrapper from "@/components/Wrapper";
import Input from "@/components/Common/Input";
import Select from "@/components/Common/SelectComponents";
import RadioInput from "@/components/Common/RadioInput";
import { successNotify } from "@/Utils/toast";

// icons
import { GoLocation } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";

const radioOptions = [
  { label: "male", value: "0" },
  { label: "female", value: "1" },
];

const selectOptions = [
  { label: "Select Plan", value: "select plan" },
  { label: "Silver", value: "silver" },
  { label: "Standard", value: "standard" },
  { label: "Gold", value: "gold" },
];

const initialValues = {
  name: "",
  age: "",
  height: "",
  weight: "",
  phone: "",
  gender: "",
};

let validationSchema = Yup.object({
  name: Yup.string().required("Name Is Required").min(4),
  age: Yup.string().required("Age Is Required"),
  height: Yup.string().required("Height Is Required"),
  weight: Yup.string().required("Weight Is Required"),
  phone: Yup.string().required("Phone Number Is Required").min(11),
  plan: Yup.string().required("Select a Plan"),
  gender: Yup.string().required("Gender Is Required"),
});

function subscribe() {
  const router = useRouter();

  const onSubmit = (values) => {
    const localStorageClients = localStorage.getItem("clients");
    const clients = localStorageClients ? JSON.parse(localStorageClients) : [];
    const newClients = [...clients, values];
    localStorage.setItem("clients", JSON.stringify(newClients));
    successNotify("Successfully !");
    setTimeout(() => {
      router.push("/");
    }, 2000);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div className="bg-[#eeeeee]">
      <Wrapper>
        <div className="grid grid-cols-12 gap-8">
          <div className="md:col-span-4 col-span-10 md:mt-14 mt-10 mb-2">
            <h3 className="mb-8 font-bold text-3xl tracking-wider">
              Registration classes
            </h3>
            <div>
              <div className="flex items-center">
                <GoLocation className="text-[#E31C25] text-2xl mr-2" />

                <div>
                  <p className="text-2xl font-[600]">Our Address</p>
                  <p>IRAN, Gorgan , Ozon gym ,24H</p>
                </div>
              </div>

              <div className="flex items-center mt-6">
                <AiOutlineMail className="text-[#E31C25] text-2xl mr-2" />

                <div>
                  <p className="text-2xl font-[600]">Mail Us</p>
                  <p>info@ozon.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* form */}
          <form
            onSubmit={formik.handleSubmit}
            className="md:col-span-8 col-span-10 md:gap-8 md:my-8 my-2"
          >
            <Input
              formik={formik}
              name="name"
              type="text"
              placeholder="Enter name"
            />
            <Input
              formik={formik}
              name="age"
              type="number"
              placeholder="Enter age"
            />
            <Input
              formik={formik}
              name="height"
              type="number"
              placeholder="Enter height"
            />
            <Input
              formik={formik}
              name="weight"
              type="number"
              placeholder="Enter weight"
            />
            <Input
              formik={formik}
              name="phone"
              type="tel"
              placeholder="Enter phone"
            />
            <RadioInput
              formik={formik}
              radioOptions={radioOptions}
              name="gender"
            />
            <Select formik={formik} selectOptions={selectOptions} name="plan" />

            <button
              type="submit"
              className="text-white border-none py-3 px-5 cursor-pointer bg-[#E31C25] 
             mx-auto rounded-sm hover:bg-black duration-200 ease-out my-6 flex items-center justify-center"
            >
              Submit
            </button>
          </form>
        </div>
      </Wrapper>
    </div>
  );
}

export default subscribe;
