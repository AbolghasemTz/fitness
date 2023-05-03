import React from "react";
// components
import Wrapper from "../Wrapper";

// icons
import { GiWeightLiftingUp } from "react-icons/gi";
import { RiBoxingFill } from "react-icons/ri";
import { CgGym } from "react-icons/cg";

function Choice(props) {
  return (
    <div className="bg-[rgb(17,17,17)] md:pb-20 pb-8 md:mt-[130px] mt-[40px]">
      <Wrapper className="my-8">
        <div className="flex flex-col justify-center items-center w-full">
          <h3 className="text-white cursor-pointer md:text-6xl text-3xl font-bold tracking-wide hover:tracking-wider duration-200 pt-8">
            WHAY CHOICE US
          </h3>
          <p className="text-white tracking-wide md:text-base text-xs pt-6 leading-6 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. the readable content of a page when looking at its layout.
          </p>
        </div>

        {/* card */}

        <div className="grid grid-cols-12 md:gap-x-8 gap-y-6 md:mt-28 mt-16 ">
          <div
            className="md:col-span-4 col-span-12 bg-[#1A1A1A] rounded-sm relative
          flex justify-center flex-col items-center py-8 hover:bg-[#E31C25] duration-200
          "
          >
            <div>
              <RiBoxingFill className="text-white text-5xl" />
            </div>
            <div className="text-center my-6">
              <h3 className="text-white font-bold pb-3 tracking-wide lg:text-3xl md:text-2xl text-base">
                BODY BUILDING
              </h3>
              <p className="text-white md:text-base text-sm">
                Lorem ipsum dolor sit amet, consectetur ipsum adipiscing elit.
              </p>
            </div>
            <h4 className="absolute top-[15px] right-[15px] text-gray-50 text-5xl leading-10">
              01
            </h4>
          </div>

          <div
            className="md:col-span-4 col-span-12 bg-[#E31C25] rounded-sm relative
          flex justify-center flex-col items-center py-8
          "
          >
            <div className="">
              <GiWeightLiftingUp className="text-white text-5xl" />
            </div>
            <div className="text-center my-6">
              <h3 className="text-white font-bold pb-3 tracking-wide lg:text-3xl md:text-2xl text-base">
                BODY BUILDING
              </h3>
              <p className="text-white md:text-base text-sm">
                Lorem ipsum dolor sit amet, consectetur ipsum adipiscing elit.
              </p>
            </div>
            <h4 className="absolute top-[15px] right-[15px] text-gray-50 text-5xl leading-10">
              02
            </h4>
          </div>

          <div
            className="md:col-span-4 col-span-12 bg-[#1A1A1A] rounded-sm relative
          flex justify-center flex-col items-center py-8 hover:bg-[#E31C25] duration-200
          "
          >
            <div className="">
              <CgGym className="text-white text-5xl" />
            </div>
            <div className="text-center my-6">
              <h3 className="text-white font-bold pb-3 tracking-wide lg:text-3xl md:text-2xl text-base">
                BODY BUILDING
              </h3>
              <p className="text-white md:text-base text-sm font-source">
                Lorem ipsum dolor sit amet, consectetur ipsum adipiscing elit.
              </p>
            </div>
            <h4 className="absolute top-[15px] right-[15px] text-gray-50 text-5xl leading-10">
              03
            </h4>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default Choice;
