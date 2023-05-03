import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// components
import Wrapper from "./Wrapper";
import Menu from "./Navbar/Menu";
import MenuMobile from "./Navbar/MenuMobile";

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <div
      className="w-full h-[70px] md:h-[100px] bg-white flex items-center justify-between z-20 sticky top-0 
    transition-transform duration-300 shadow-md"
    >
      <Wrapper className="flex justify-between items-center">
        <Link href="/">
          <Image
            src="/Logo.png"
            alt="Logo gym"
            width={100}
            height={100}
            className="md:w-20 md:h-20 w-16 h-16"
          />
        </Link>

        {/* Menu */}

        <Menu />

        {/* Mobile Menu */}

        {mobileMenu && (
          <MenuMobile mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
        )}

        {/* Icon Mobile Menu */}

        <div
          onClick={() => setMobileMenu(!mobileMenu)}
          className={`md:hidden  w-6 h-5 flex flex-col justify-between items-center mdl:hidden
        text-4xl text-[#E31C25] cursor-pointer overflow-hidden group ${
          mobileMenu ? "hidden" : "flex"
        }`}
        >
          <span
            className="w-full h-[3px] bg-[#E31C25] inline-flex
           transform group-hover:translate-x-2 transition-all ease-in-out duration-300"
          ></span>
          <span
            className="w-full h-[3px] bg-[#E31C25] inline-flex
           transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"
          ></span>
          <span
            className="w-full h-[3px] bg-[#E31C25] inline-flex
           transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"
          ></span>
        </div>
      </Wrapper>
    </div>
  );
}

export default Header;
