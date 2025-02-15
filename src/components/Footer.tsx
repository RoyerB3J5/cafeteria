import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
function Footer() {
  return (
    <footer className=" w-full py-16 px-20 flex flex-col md:flex-row gap-16 md:gap-0 justify-around items-center bg-footer">
      <p className="text-white text-lg"> © 2025 RB COFFEE</p>

      <Image
        src="/logo-light.png"
        alt="Logo de cafeteria "
        width={150}
        height={20}
        className="responsive"
      />
      
      <div className="flex justify-center items-center gap-8 text-white mt-4 md:mt-0">
        <FaInstagram className="size-10 hover:text-marron cursor-pointer border-[1px] p-2 rounded-full transition-all" />
        <FaTiktok className="size-10 hover:text-marron cursor-pointer border-[1px] p-2 rounded-full transition-all" />
        <FaFacebookSquare className="size-10 hover:text-marron cursor-pointer border-[1px] p-2 rounded-full transition-all" />
      </div>
    </footer>
  );
}

export default Footer;
