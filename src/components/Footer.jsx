import React from "react";
import Image from "next/image";

// components
import Wrapper from "./Wrapper";

// icons
import {
  BsTelephone,
  BsInstagram,
  BsWhatsapp,
  BsFacebook,
} from "react-icons/bs";
import { GoLocation } from "react-icons/go";

function Footer() {
  return (
    <footer className="bg-[#111111] pb-4">
      <Wrapper>
        {/* top footer */}
        <div className="grid grid-cols-12 md:gap-x-8 gay-y-6 py-8">
          <div className="lg:col-span-3 md:col-span-6 col-span-12 text-white">
            <h3 className="font-bold text-2xl tracking-wider">Fitness</h3>
            <p className="md:text-base text-sm py-8">
              Lorem Ipsum is simply dummied text of the printing and industry.
            </p>
            <div className=" flex items-center justify-around py-2 bg-[#292929] rounded-sm">
              <div>
                <p>GET US SUPPORT</p>
                <p className="font-bold tracking-wider">+989354947002</p>
              </div>
              <div className="p-3 bg-[#E31C25] rounded-sm">
                <BsTelephone className="text-2xl" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 md:col-span-6 col-span-12 text-white">
            <h3 className="font-bold tracking-wider text-2xl md:mt-0 mt-6">
              USEFUL-LINKS
            </h3>
            <ul className="py-8">
              <li className="hover:text-[#E31C25] duration-200 ease-out cursor-pointer">
                Lifting weights
              </li>
              <li className="hover:text-[#E31C25] duration-200 ease-out pt-4 cursor-pointer">
                Cardio Classes
              </li>
              <li className="hover:text-[#E31C25] duration-200 ease-out pt-4 cursor-pointer">
                New To Fitness
              </li>
              <li className="hover:text-[#E31C25] duration-200 ease-out pt-4 cursor-pointer">
                Body Muscle
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 md:col-span-6 col-span-12 text-white">
            <h3 className="font-bold tracking-wider text-2xl md:mt-0 mt-6">
              CONTACT
            </h3>
            <div className="py-6">
              <Image
                src="/location.png"
                alt="Location"
                width={250}
                height={250}
              />
            </div>
            <div className="flex items-center mt-8">
              <GoLocation className="text-[#E31C25] text-2xl mr-2" />
              <p>IRAN, Gorgan , Ozon gym ,24H</p>
            </div>
          </div>

          <div className="lg:col-span-3 md:col-span-6 col-span-12 text-white">
            <h3 className="font-bold tracking-wider text-2xl md:mt-0 mt-6">
              GYM OPENING TIME
            </h3>

            <div className="mt-6">
              <div className="flex items-center justify-between">
                <p>Monday</p>
                <p>8AM-2AM</p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <p>Tuesday</p>
                <p>8AM-2AM</p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <p>wednesday</p>
                <p>8AM-2AM</p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <p>Thursday</p>
                <p>8AM-2AM</p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <p>Friday</p>
                <p>8AM-2AM</p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <p>Saturday</p>
                <p>8AM-2AM</p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <p>On Public Holidays</p>
                <p>Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* bottom footer */}
        <div className="grid grid-cols-12 md:gap-x-8 gay-y-6 border-t pt-4">
          <div className="md:col-span-6 col-span-12 text-white ">
            <ul className="flex md:justify-start justify-center items-center gap-x-8">
              <li className="p-4">
                <BsInstagram className="text-2xl cursor-pointer hover:text-[#E31C25] duration-200" />
              </li>
              <li className="p-4">
                <BsFacebook className="text-2xl cursor-pointer hover:text-[#E31C25] duration-200" />
              </li>
              <li className="p-4">
                <BsWhatsapp className="text-2xl cursor-pointer hover:text-[#E31C25] duration-200" />
              </li>
            </ul>
          </div>
          <div className="md:col-span-6 col-span-12 text-white ">
            <div className="flex md:justify-end justify-center md:mt-0 mt-3">
              <h3 className="text-2xl mt-2 md:mr-3">Made By Omid Taziki</h3>
            </div>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
}

export default Footer;
