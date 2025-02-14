import Image from "next/image";
type DataType = {
  title: string;
  description: string;
  image: string;
}

function Section2() {
  const data : DataType[] = [{
    title:"Tipos de café",
    description:"Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus. Aeneantos commodo",
    image:"image1.webp"
  },
  {
    title:"Variedad de sabores",
    description:"Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus. Aeneantos commodo",
    image:"image2.webp"
  },
  {
    title:"Pastelería",
    description:"Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus. Aeneantos commodo",
    image:"image3.webp"
  },
  {
    title:"Para llevar",
    description:"Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus. Aeneantos commodo",
    image:"image4.webp"
  }]
  return (
    <section className="w-full flex flex-col justify-center items-center gap-7 py-24 px-10 md:px-20">
      <h2 className="text-4xl text-tittle font-medium text-center ">
        Lo Mejor de Nosotros
      </h2>
      <Image
        src="/title-separator.png"
        alt="separador"
        width={190}
        height={40}
      />
      <p className="text-center text-xl font-sans font-light text-tittle max-w-[820px]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10  md:max-w-full max-w-[820px] pt-8 px-0 lg:px-28 ">
        {data.map((item,index)=>(
          <div className="flex flex-col items-center justify-center gap-5" key={index}>
            <Image src={`/section2/${item.image}`} alt={item.title} width={100} height={100} />
            <h3 className="uppercase text-tittle text-xl text-center">
              {item.title}
            </h3>
            <p className="text-center font-sans font-light text-parrafo">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Section2;
