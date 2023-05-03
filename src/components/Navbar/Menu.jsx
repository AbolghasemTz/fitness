import Link from "next/link";
import React from "react";

function Menu(props) {
  const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About Us", url: "/about" },
    { id: 2, name: "Contact Us", url: "/contact" },
  ];
  return (
    <ul className="hidden md:flex items-center gap-8 font-medium">
      {data.map((item,i) => (
        <React.Fragment key={i}>
          <li className="text-black active:text-[#E31C25] hover:text-[#E31C25] duration-200 font-[600]"  >
            <Link href={item.url}>{item.name}</Link>
          </li>
        </React.Fragment>
      ))}
    </ul>
  );
}

export default Menu;
