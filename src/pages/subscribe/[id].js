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
import Layout from "@/components/Layout";
import { usePlan } from "@/Context/PlanContextProvider";
import { useGlobal } from "@/Context/GolobalContextProvider";

const radioOptions = [
  { label: "male", value: "male" },
  { label: "female", value: "female" },
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

function Plans() {

  const planData = usePlan();
  const { setUserData,auth,setAuth } = useGlobal();
 console.log(planData);
console.log(auth);
  const { query, push } = useRouter();
  const { id } = query;

  // Find Plan Name

  const foundPlan = planData?.find((item) => item.id === parseInt(id));


  const onSubmit = (values) => {
    setUserData(values);
    setAuth(true)
    const localStorageClients = localStorage.getItem("clients");
    const clients = localStorageClients ? JSON.parse(localStorageClients) : [];
    const newClients = [...clients, values];
    localStorage.setItem("clients", JSON.stringify(newClients));
    push("/success");
    successNotify("Successfully !");
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <Layout>
      <div className="bg-[#eeeeee]">
        <Wrapper>
          <div className="grid grid-cols-12 gap-8">
            <div className="md:col-span-4 col-span-10 md:mt-14 mt-10 md:mb-2">
              <div>
                <h1 className="md:mb-8 mb-4 font-bold md:text-4xl text-xl tracking-wider uppercase md:text-left text-center">
                 Plan
                  <span className="text-[#E31C25] inline-flex ml-6">
                    {foundPlan?.title}
                  </span>
                </h1>
                <div>
                  <h3 className="md:mb-8 mb-4 font-bold md:text-xl text-base tracking-wider uppercase md:text-left text-center">
                  Price
                    <span className="text-[#E31C25] inline-flex ml-6">
                      ${foundPlan?.price}
                    </span>
                  </h3>
                </div>
                <div>
                  <h3 className="md:mb-8 mb-4 font-bold md:text-xl text-base tracking-wider uppercase md:text-left text-center">
                    <span className="">{foundPlan?.options?.fitness}</span>
                  </h3>
                </div>
                <div
                  className={`${
                    foundPlan?.title === "silver" ? "hidden" : "block"
                  }`}
                >
                  <h3 className="md:mb-8 mb-4 font-bold md:text-xl text-base tracking-wider uppercase md:text-left text-center">
                    <span>{foundPlan?.options?.lossWeight}</span>
                  </h3>
                </div>
                <div
                  className={`${
                    foundPlan?.title === "gold" ? "block" : "hidden"
                  }`}
                >
                  <h3 className="mb-8 font-bold md:text-xl text-base tracking-wider uppercase md:text-left text-center">
                    <span className="">{foundPlan?.options?.personal}</span>
                  </h3>
                </div>
              </div>
            </div>
            {/* form */}
            <form
              onSubmit={formik.handleSubmit}
              className="md:col-span-8 col-span-10 md:gap-8 md:my-8 "
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
              <Select
                formik={formik}
                selectOptions={selectOptions}
                name="plan"
              />

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
    </Layout>
  );
}

export default React.memo(Plans);
