import Image from "next/image";
function Section3() {
  return (
    <section id="horario" className="grid grid-cols-1 lg:grid-cols-2 ">
      <div
        className="bg-cover bg-center flex justify-center items-center h-full py-28"
        style={{ backgroundImage: "url('/section3/image2.webp')" }}
      >
        <Image
          src="/section3/image3.webp"
          width={300}
          height={125}
          alt="Logo de seccion"
        />
      </div>
      <div
        className="bg-cover bg-center flex flex-col justify-center items-center text-white gap-10 py-28 md:py-36"
        style={{ backgroundImage: "url('/section3/image1.webp')" }}
      >
        <h3 className="uppercase text-3xl max-w-[400px] text-center">
          Nuestros horarios & pedido
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-28 font-sans text-lg font-light">
          <div className="flex flex-col justify-center items-center gap-5 w-full text-center ">
            <p>Lunes - Viernes // 8:00 am - 6:00 pm</p>
            <p>Sábado // 8:00 am - 2:00 pm</p>
            <p>Domigo // Cerrado</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-5 w-full">
            <p>Direccion</p>
            <p>Los Laureles, 2da Calle, 3ra Avenida</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section3;
