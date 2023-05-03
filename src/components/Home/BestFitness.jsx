import React from "react";
// components
import Wrapper from "../Wrapper";
import Button from "../Common/Button";

// icons
import { GiWeightLiftingUp } from "react-icons/gi";
import { IoMdFitness } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";

function BestFitness(props) {
  return (
    <Wrapper>
      <div className="grid grid-cols-12 md:gap-x-8 gap-y-6 md:mt-[130px] mt-[50px]">
        {/* left */}

        <div className="md:col-span-6 col-span-12">
          <img
            src="/best.jpg"
            alt="fitness pic"
            className="h-auto object-cover mx-w-[100%] rounded-sm"
          />
        </div>

        {/* right */}
        <div className="md:col-span-6 col-span-12">
          <h3 className="text-3xl uppercase font-bold leading-10">
            THE BEST FITNESS GYM IN TOWN
          </h3>
          <p className="text-gray-500 md:text-base text-sm my-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry.
          </p>
          <div className="flex justify-between items-center mx-auto my-10">
            <div className="">
              <GiWeightLiftingUp className="text-[#E31C25] text-6xl" />
              <h3 className="my-3 font-bold"> CERTIFIED COMPANY</h3>
              <p className="text-sm text-gray-500">
                Lorem ipsum Ut elit tellus, luctus nec pulvinar dapibus leo.
              </p>
            </div>
            <div className="">
              <IoMdFitness className="text-[#E31C25] text-6xl" />
              <h3 className="my-3 font-bold">AWARD WINNING</h3>
              <p className="text-sm text-gray-500">
                Lorem ipsum Ut elit tellus, luctus nec pulvinar dapibus leo.
              </p>
            </div>
          </div>

          <div className="flex items-center cursor-pointer bg-black  hover:bg-[#E31C25] duration-200 rounded-sm w-[150px] text-center">
            <Button>READ MORE</Button>
            <BsArrowRight className="text-white text-ls font-[600]" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default BestFitness;
