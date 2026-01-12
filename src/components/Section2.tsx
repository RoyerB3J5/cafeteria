import Image from "next/image";
type DataType = {
  title: string;
  description: string;
  image: string;
};

function Section2() {
  const data: DataType[] = [
    {
      title: "Tipos de café",
      description:
        "Explora nuestros granos de origen único y mezclas artesanales, tostadas con precisión para ofrecerte la taza perfecta.",
      image: "image1.webp",
    },
    {
      title: "Variedad de sabores",
      description:
        "Desde espressos intensos hasta bebidas frías y cremosas, cada sorbo revela nuevas notas, aromas y experiencias.",
      image: "image2.webp",
    },
    {
      title: "Pastelería",
      description:
        "Acompaña tu bebida con postres caseros recién horneados: tortas, galletas, croissants y dulces para cada momento.",
      image: "image3.webp",
    },
    {
      title: "Para llevar",
      description:
        "Lleva tu café favorito donde vayas con nuestras opciones take-away rápidas, prácticas y llenas de sabor.",
      image: "image4.webp",
    },
  ];
  return (
    <section
      id="nosotros"
      className="w-full flex flex-col justify-center items-center gap-7 py-24 px-10 md:px-20"
    >
      <h2 className="text-4xl text-tittle font-medium text-center ">
        Lo Mejor de Nosotros
      </h2>
      <Image
        src="/title-separator.png"
        alt="separador"
        width={190}
        height={40}
        style={{ width: "auto", height: "auto" }}
      />
      <p className="text-center text-xl font-sans font-light text-tittle max-w-[820px]">
        Descubre lo que hace única nuestra cafetería: sabor auténtico, ambiente
        acogedor y una experiencia creada para disfrutar cada momento.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10  md:max-w-full max-w-[820px] pt-8 px-0 lg:px-28 ">
        {data.map((item, index) => (
          <div
            className="flex flex-col items-center justify-center gap-5"
            key={index}
          >
            <Image
              src={`/section2/${item.image}`}
              alt={item.title}
              width={100}
              height={100}
              style={{ width: "auto", height: "auto" }}
            />
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
