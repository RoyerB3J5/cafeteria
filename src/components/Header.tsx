import Image from "next/image";
function Header() {
  return (
    <header className=" absolute top-0 z-10 w-full py-8 px-20 flex justify-between items-center">
      <div className="flex justify-center flex-1">
        <Image
          src="/logo-light.png"
          alt="Logo de cafeteria "
          width={140}
          height={20}
          className="responsive"
        />
      </div>

      <button className=" bg-marron px-5 py-2 text-white rounded-lg ">
        PEDIR
      </button>
    </header>
  );
}

export default Header;
