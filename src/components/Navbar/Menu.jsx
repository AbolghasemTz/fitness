import Link from "next/link";
import React from "react";
import data from '../../Constants/menuItem.json';
import { useRouter } from "next/router";

function Menu() {
const {locale} = useRouter();


  return (
    <ul className="hidden md:flex items-center gap-8 font-medium">
      {data.menu.filter(p => p.locale === locale).map((item,i) => (
        <React.Fragment key={i}>
          <li className="text-black active:text-[#E31C25] hover:text-[#E31C25] duration-200 font-[600]"  >
            <Link href={item.url}>{item.title}</Link>
          </li>
        </React.Fragment>
      ))}
    </ul>
  );
}

export default Menu;
