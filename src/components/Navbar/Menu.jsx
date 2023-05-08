import React from "react";
import Link from "next/link";

import {MenuItem} from '../../Constant/menu'
function Menu() {
  


  return (
    <ul className="hidden md:flex items-center gap-8 font-medium">
      {MenuItem.map((item, i) => (
        <React.Fragment key={i}>
          <li className="text-black active:text-[#E31C25] hover:text-[#E31C25] duration-200 font-[600]">
            <Link href={item.url}>{item.title}</Link>
          </li>
        </React.Fragment>
      ))}
    </ul>
  );
}

export default Menu;
