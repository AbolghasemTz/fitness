import React from "react";
import Link from "next/link";

// components
import Wrapper from "../Wrapper";

// icons
import { GiGymBag } from "react-icons/gi";
import Button from "../Common/Button";
import { useTranslation } from "next-i18next";
import { usePlan } from "@/Context/PlanContextProvider";

function Plan(props) {
 const planData = usePlan();

  return (
    <div className=" md:mt-[110px] mt-[30px]">
      <Wrapper className="my-8">
        <div className="flex flex-col justify-center items-center w-full">
          <h3 className="cursor-pointer md:text-6xl text-3xl font-bold tracking-wide hover:tracking-wider duration-200 pt-8">
            OUR PRICE TABLE
          </h3>
          <p className="tracking-wide md:text-base text-xs pt-6 leading-6 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. the readable content of a page when looking at its layout.
          </p>
        </div>

        {/* plans */}

        <div className="grid grid-cols-12 md:gap-x-8 gap-y-6 md:mt-28 mt-16">
        
         {planData.map((p) => (
            <div key={p.id} className="md:col-span-4 col-span-12 border rounded-sm text-center uppercase">
            <div className="border-b py-4">
              <h3 className="text-gray-700 tracking-wide text-2xl">{p.title}</h3>
            </div>
            <div className="flex justify-center items-center flex-col py-8 border-b">
              <div
                className={`border w-[80px] h-[80px] rounded-full flex justify-center items-center
                ${p.title === "standard" ? "bg-black":"bg-[#E31C25]"}
                    `}
              >
                <GiGymBag className="text-white text-2xl" />
              </div>

              <div className="flex justify-center items-center pt-4">
                <p className="font-bold text-black text-2xl mr-2">${p.price} </p>
                <span className="text-sm text-gray-400"> / MONTH</span>
              </div>
            </div>

            <div className="pt-4 border-b">
              <p className="text-gray-600 ">{p.options.fitness}</p>
              <p className= {`text-gray-600 ${p.title === "silver" ? "line-through" : "" } py-4`}>{p.options.lossWeight}</p>
              <p className={`text-gray-600 pb-4 ${p.title === "gold" ? "" : "line-through"}`}>
              {p.options.personal}
              </p>
            </div>
            <div className={` ${p.title === "standard" ? "bg-black hover:bg-[#E31C25]" : "bg-[#E31C25] hover:bg-black"} w-[104px] mx-auto rounded-sm  duration-200 ease-out my-6 flex items-center justify-center`}>
              <Link href={`/subscribe/${p.id}`}>
                <Button className="uppercase">Subscribe</Button>
              </Link>
            </div>
          </div>
         ))}
        </div>
      </Wrapper>
    </div>
  );
}

export default Plan;
