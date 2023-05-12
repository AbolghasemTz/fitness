import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

function Menu() {
  const {i18n}  = useTranslation()
  const [items,setItems] = useState();
 
  useEffect(() => {
    fetch(`/menuItems/${i18n.language}.json`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [i18n.language]);

  return (
    <ul className="hidden md:flex items-center gap-8 font-medium">
      {items?.map((item, i) => (
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
