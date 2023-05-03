import { useTranslation } from "next-i18next";
import Link from "next/link";
import React from "react";

function Menu() {
const {t} = useTranslation();

 
  const data = [
    { id: 1, name: t("header:title-one"), url: "/" },
    { id: 2, name: t("header:title-two"), url: "/about" },
    { id: 2, name: t("header:title-three"), url: "/contact" },
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
