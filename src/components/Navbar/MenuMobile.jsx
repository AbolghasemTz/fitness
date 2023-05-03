import React from "react";
import Link from "next/link";
import { MdOutlineClose } from "react-icons/md";

function MenuMobile({ mobileMenu, setMobileMenu }) {
  const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About Us", url: "/about" },
    { id: 2, name: "Contact Us", url: "/contact" },
  ];
  return (
    <>
      <MdOutlineClose
        onClick={() => setMobileMenu(false)}
        className={`md:hidden text-3xl text-[#E31C25] cursor-pointer  absolute top-5 right-4 first-letter:
              ${mobileMenu ? "flex" : "hidden"}`}
      />
      {mobileMenu && (
        <ul
          className="flex flex-col md:hidden font-bold absolute top-[70px] right-0 w-full h-[calc(100vh - 50px)] 
      bg-white border-b 
      "
        >
          {data.map((item,i) => (
            <React.Fragment key={i}>
              <li className="cursor-pointer py-4 px-5 border-b flex-col  relative hover:bg-[#E31C25] hover:text-white duration-200">
                <Link href={item.url}>{item.name}</Link>
              </li>
            </React.Fragment>
          ))}
        </ul>
      )}
    </>
  );
}

export default MenuMobile;
