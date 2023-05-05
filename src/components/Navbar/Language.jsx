import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

import { IoMdArrowDropdown } from "react-icons/io";

function Language(props) {
  const [showLanguage, setShowLanguage] = useState(false);
  const { locales, asPath } = useRouter();

  return (
    <div className="relative">
      <button
        className="pl-1 py-1 bg-[#E31C25] text-white rounded-md overflow-hidden flex items-center relative"
        onClick={() => setShowLanguage(!showLanguage)}
      >
        <span>Lang </span>
        <IoMdArrowDropdown
          className={`ml-3 cursor-pointer ${
            showLanguage ? "rotate-180" : "rotate-0"
          } duration-300 text-2xl`}
        />
      </button>
      <div
        className={`bg-white w-[80px] text-center overflow-hidden absolute mt-2  ${
          showLanguage ? "block" : "hidden"
        }`}
      >
        {locales.map((lang, i) => (
          <p
            className=" text-gray-700 py-2 block cursor-pointer hover:bg-[#ff464fe7] 
            hover:text-white duration-200 "
            key={i}
          >
            <Link href={asPath} locale={lang} onClick={() => setShowLanguage(false)}>
              {lang}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
}

export default Language;
