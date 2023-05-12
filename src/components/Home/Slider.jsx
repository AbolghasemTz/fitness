import React from "react";
import Image from "next/image";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useTranslation } from "react-i18next";

const images = [
  { url: "/slide1.jpg", alt: "Slider" },
  { url: "/slide2.jpg", alt: "Slider" },
  { url: "/slide3.jpg", alt: "Slider" },
];

function Slider(props) {
  const { t } = useTranslation();
  return (
    <div dir="ltr">
      
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
        >
          {images.map((img, i) => (
            <div key={i} className="text-center">
              <Image
                src={img.url}
                alt={img.alt}
                width={1440}
                height={800}
                className="max-w-[100%] object-cover md:h-[700px] h-[300px]"
              />
              <div className="flex justify-center items-center absolute bottom-[20%] md:left-[40%] sm:left-[30%] left-[18%] px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-source bg-white  text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-60 ">
                {t("START YOUR FITNESS JOURNEY")}
              </div>
            </div>
          ))}
        </Carousel>
    
    </div>
  );
}

export default Slider;
