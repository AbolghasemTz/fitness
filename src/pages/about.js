import React from "react";
import Image from "next/image";

// components
import Button from "@/components/Common/Button";
import Wrapper from "@/components/Wrapper";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

// icons
import { BsArrowRight, BsCheckAll } from "react-icons/bs";


function about(props) {
  return (
    <>
      <Header />
      <div className="md:mb-[130px] mb-[50px]">
        <div className="relative">
          <Image
            src="/about.jpg"
            alt="about picture"
            width={1440}
            height={400}
            className="w-full md:h-[400px] h-[300px]"
          />
          <h1 className="absolute top-[50%] left-[30%] md:text-8xl text-4xl text-white font-bold tracking-wider">
            About Us
          </h1>
        </div>
        <Wrapper>
          {/* top title */}
          <div>
            <h3 className="text-center cursor-pointer md:text-4xl text-2xl font-bold tracking-wide hover:tracking-wider duration-200 pt-10">
              EVERYBODY WELCOME FAVORITE GYM
            </h3>
            <p className="text-center tracking-wide md:text-base text-xs pt-6 leading-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. the readable content of a page when looking at its
              layout.
            </p>
          </div>

          <div className="grid grid-cols-12 md:gap-x-8 gap-y-6 md:mt-[130px] mt-[50px]">
            {/* left */}

            <div className="md:col-span-6 col-span-12">
              <h3 className="text-3xl uppercase font-bold leading-10">Our</h3>
              <p className="text-gray-500 md:text-base text-sm my-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <div>
                <div className="flex items-center py-3">
                  <BsCheckAll className="text-[#E31C25] mr-3" />
                  <p className="text-gray-600 font-[500]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div className="flex items-center py-3">
                  <BsCheckAll className="text-[#E31C25] mr-3" />
                  <p className="text-gray-600 font-[500]">
                    Proin sit amet diam et elit dictum sodales.
                  </p>
                </div>
                <div className="flex items-center py-3">
                  <BsCheckAll className="text-[#E31C25] mr-3" />
                  <p className="text-gray-600 font-[500]">
                    Suspendisse tempus felis a libero mollis ultrices.
                  </p>
                </div>
                <div className="flex items-center py-3">
                  <BsCheckAll className="text-[#E31C25] mr-3" />
                  <p className="text-gray-600 font-[500]">
                    Nullam accumsan ipsum a diam cursus mattis.
                  </p>
                </div>
              </div>

              <div className="flex  items-center mt-4 cursor-pointer bg-black  hover:bg-[#E31C25] duration-200 rounded-sm w-[150px] text-center">
                <Button>READ MORE</Button>
                <BsArrowRight className="text-white text-ls font-[600]" />
              </div>
            </div>
            {/* right */}
            <div className="md:col-span-6 col-span-12">
              <Image
                src="/about-1.jpg"
                alt="fitness pic"
                width={500}
                height={500}
                className="h-auto object-cover mx-w-[100%] rounded-sm"
              />
            </div>
          </div>
        </Wrapper>
      </div>
      <Footer />
    </>
  );
}

export default about;
