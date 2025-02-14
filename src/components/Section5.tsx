import Image from "next/image";
function Section5() {
  const images = [
    "/section5/img1.webp",
    "/section5/img2.webp",
    "/section5/img3.webp",
    "/section5/img4.webp",
    "/section5/img5.webp",
    "/section5/img6.webp",
    "/section5/img7.webp",
    "/section5/img8.webp",
  ];
  return (
    <section className="flex flex-col justify-center items-center gap-10 mt-24">
      <h2 className="text-4xl text-tittle font-medium text-center uppercase ">
        Nuestra dulce galeria
      </h2>
      <Image
        src="/title-separator.png"
        alt="separador"
        width={190}
        height={40}
      />
      <p className="text-center text-xl font-sans font-light text-tittle max-w-[820px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore
      </p>
      <div className="grid grid-cols1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full mt-5">
        {images.map((img, index) => (
          <div key={index} className="relative w-full" style={{ aspectRatio: '1 / 1' }}>
          <Image
            src={img}
            alt={`imagen ${index}`}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        ))}
      </div>
    </section>
  );
}

export default Section5;
