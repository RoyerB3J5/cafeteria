import Image from "next/image";
type CoffeeType = {
  title: string;
  image: string;
  price: number;
  description: string;
};

function Section4() {
  const dataCoffee: CoffeeType[][] = [
    [
      {
        title: "Mocha",
        image: "mocha",
        price: 5.0,
        description: "Cafe con leche y chocolate",
      },
      {
        title: "Latte",
        image: "latte",
        price: 2.0,
        description: "Cafe con leche",
      },
      {
        title: "Ice Coffee",
        image: "ice-coffe",
        price: 3.5,
        description: "Cafe con leche y crema",
      },
      {
        title: "Espresso",
        image: "espresso",
        price: 1.5,
        description: "Cafe solo",
      },
      {
        title: "Americano",
        image: "americano",
        price: 2.5,
        description: "Cafe y agua",
      },
    ],
    [
      {
        title: "Mocha",
        image: "mocha",
        price: 5.0,
        description: "Cafe con leche y chocolate",
      },
      {
        title: "Latte",
        image: "latte",
        price: 2.0,
        description: "Cafe con leche",
      },
      {
        title: "Ice Coffee",
        image: "ice-coffe",
        price: 3.5,
        description: "Cafe con leche y crema",
      },
      {
        title: "Espresso",
        image: "espresso",
        price: 1.5,
        description: "Cafe solo",
      },
      {
        title: "Americano",
        image: "americano",
        price: 2.5,
        description: "Cafe y agua",
      },
    ],
  ];
  return (
    <section id="menu"
      className="w-screen flex flex-col justify-center items-center gap-4 py-28 bg-center bg-cover px-4 sm:px-8 md:px-12"
      style={{ backgroundImage: "url('/section4/fondo.webp')" }}
    >
      <h2 className="text-4xl text-tittle font-medium text-center uppercase ">
        Nuestro menu
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
      <div className="w-full lg:w-[1300px] grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 mt-16 px-12 ">
        {dataCoffee.map((coffe, index) => (
          <ul key={index} className="w-full flex flex-col justify-center gap-8" >
            {coffe.map((item) => (
              <li key={item.title} className="flex items-center gap-10 lg:gap-8 w-full">
                <div className="size-16 relative hidden sm:flex justify-center items-center">
                  <Image
                    src={`/section4/${item.image}.webp`}
                    alt={item.title}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className="flex flex-col justify-center items-start w-full gap-1">
                  <div className="flex justify-between items-center w-full gap-5">
                    <p className="uppercase text-xl">{item.title}</p>
                    <div className="flex flex-grow border-b border-dotted border-tittle"></div>
                    <p className="text-xl">$ {item.price.toFixed(2)}</p>
                  </div>
                  <p className="font-sans font-light text-parrafo text-lg">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}

export default Section4;
