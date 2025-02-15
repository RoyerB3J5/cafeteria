"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
function Section1() {
  const [indexImage, setIndexImage] = useState(1);
  const [visible, setVisible] = useState(true);
  const indicators = [1, 2, 3];
  /*useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndexImage((prev) => (prev === 3 ? 1 : prev + 1));
        setVisible(true);
      }, 500);
    }, 7000);

    return () => clearInterval(interval);
  }, []);*/

  const handleIndicatorClick = (i: number) => {
    setVisible(false);
    setTimeout(() => {
      setIndexImage(i);
      setVisible(true);
    }, 500);
  };
  return (
    <section id="inicio"
      className={` h-screen w-full flex flex-col justify-center items-end text-white gap-8 px-12 md:px-16 lg:px-40 bg-center `}
      style={{ backgroundImage: `url(/carrusel/slide${indexImage}.webp)` }}
    >
      <div className={`flex flex-col justify-center items-center max-w-[700px] gap-5 md:gap-8 transition-all duration-500 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
        <div className="size-20 md:size-32 lg:size-36 relative">
          <Image
            src="/logo2.png"
            alt="Logo secundario"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>

        <h1 className=" font-medium text-4xl md:text-6xl lg:text-7xl">RB COFFEE</h1>
        <Image src="/separador.png" width={220} alt="Separador" height={20} />
        <p className="text-center text-base lg:text-lg md:max-w-[600px] lg:max-w-[700px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quidem molestias suscipit ex facilis nesciunt iste blanditiis illum eaque, numquam temporibus corrupti. 
        </p>
        <button className=" px-10 py-3 border-2 border-white text-lg hover:bg-marron hover:border-marron  transition-all">
          PEDIR
        </button>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center items-center gap-4">
        {indicators.map((i) => (
          <div
            key={i}
            className={`size-3 lg:size-4 rounded-full hover:cursor-pointer ${
              indexImage === i ? "bg-marron" : "bg-white"
            }`}
            onClick={() => handleIndicatorClick(i)}
          ></div>
        ))}
      </div>
    </section>
  );
}

export default Section1;
