import React from "react";
import Link from "next/link";

// components
import Wrapper from "../Wrapper";

// icons
import { GiGymBag } from "react-icons/gi";
import Button from "../Common/Button";

function Plan(props) {
  return (
    <div className=" md:mt-[110px] mt-[30px]">
      <Wrapper className="my-8">
        <div className="flex flex-col justify-center items-center w-full">
          <h3 className="cursor-pointer md:text-6xl text-3xl font-bold tracking-wide hover:tracking-wider duration-200 pt-8">
            OUR PRICING TABLE
          </h3>
          <p className="tracking-wide md:text-base text-xs pt-6 leading-6 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. the readable content of a page when looking at its layout.
          </p>
        </div>

        {/* plans */}

        <div className="grid grid-cols-12 md:gap-x-8 gap-y-6 md:mt-28 mt-16">
          <div className="md:col-span-4 col-span-12 border rounded-sm text-center uppercase">
            <div className="border-b py-4">
              <h3 className="text-gray-700 tracking-wide text-2xl">Silver</h3>
            </div>
            <div className="flex justify-center items-center flex-col py-8 border-b">
              <div
                className="border border-black w-[80px] h-[80px] rounded-full flex justify-center items-center
                    bg-black 
                    "
              >
                <GiGymBag className="text-white text-2xl" />
              </div>

              <div className="flex justify-center items-center pt-4">
                <p className="font-bold text-black text-2xl mr-2">$19 </p>
                <span className="text-sm text-gray-400"> / MONTH</span>
              </div>
            </div>

            <div className="pt-4 border-b">
              <p className="text-gray-600 ">Gym Fitness</p>
              <p className="text-gray-600 line-through py-4">Weight Loss</p>
              <p className="text-gray-600 line-through pb-4">
                Personal Trainer
              </p>
            </div>
            <div className="bg-[#E31C25] w-[104px] mx-auto rounded-sm hover:bg-black duration-200 ease-out my-6 flex items-center justify-center ">
              <Link href="/subscribe/silver/1">
                <Button className="uppercase">Subscribe</Button>
              </Link>
            </div>
          </div>
          <div className="md:col-span-4 col-span-12 border rounded-sm text-center uppercase">
            <div className="border-b py-4">
              <h3 className="text-[#E31C25] tracking-wide text-2xl">
                Standard
              </h3>
            </div>
            <div className="flex justify-center items-center flex-col py-8 border-b">
              <div
                className="border border-[#E31C25] w-[80px] h-[80px] rounded-full flex justify-center items-center
                    bg-[#E31C25]
                    "
              >
                <GiGymBag className="text-white text-2xl" />
              </div>

              <div className="flex justify-center items-center pt-4">
                <p className="font-bold text-black text-2xl mr-2">$45 </p>
                <span className="text-sm text-gray-400"> / MONTH</span>
              </div>
            </div>

            <div className="pt-4 border-b">
              <p className="text-gray-600 ">Gym Fitness</p>
              <p className="text-gray-600 py-4">Weight Loss</p>
              <p className="text-gray-600 line-through pb-4">
                Personal Trainer
              </p>
            </div>
            <div className="bg-black w-[104px] mx-auto rounded-sm hover:bg-[#E31C25] duration-200 ease-out my-6 flex items-center justify-center ">
              <Link href="/subscribe/standard/2">
                <Button className="uppercase">Subscribe</Button>
              </Link>
            </div>
          </div>
          <div className="md:col-span-4 col-span-12 border rounded-sm text-center uppercase">
            <div className="border-b py-4">
              <h3 className="text-gray-700 tracking-wide text-2xl">Gold</h3>
            </div>
            <div className="flex justify-center items-center flex-col py-8 border-b">
              <div
                className="border border-black w-[80px] h-[80px] rounded-full flex justify-center items-center
                    bg-black 
                    "
              >
                <GiGymBag className="text-white text-2xl" />
              </div>

              <div className="flex justify-center items-center pt-4">
                <p className="font-bold text-black text-2xl mr-2">$67 </p>
                <span className="text-sm text-gray-400"> / MONTH</span>
              </div>
            </div>

            <div className="pt-4 border-b">
              <p className="text-gray-600 ">Gym Fitness</p>
              <p className="text-gray-600 py-4">Weight Loss</p>
              <p className="text-gray-600 pb-4">Personal Trainer</p>
            </div>
            <div className="bg-[#E31C25] w-[104px] mx-auto rounded-sm hover:bg-black duration-200 ease-out my-6 flex items-center justify-center ">
              <Link href="/subscribe/gold/3">
                <Button className="uppercase">Subscribe</Button>
              </Link>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default Plan;
