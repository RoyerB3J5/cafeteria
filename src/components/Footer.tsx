import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
function Footer() {
  return (
    <footer className=" w-full py-16 px-20 flex justify-around items-center bg-footer">
      <p className="text-white text-lg"> © 2025 RB COFFEE</p>
      
      <Image
        src="/logo-light.png"
        alt="Logo de cafeteria "
        width={140}
        height={20}
        className="responsive"
      />

      <div className="flex justify-center items-center gap-8 text-white">
        <FaInstagram className="size-8 hover:text-marron cursor-pointer" />
        <FaTiktok className="size-8 hover:text-marron "/>
        <FaFacebookSquare className="size-8 hover:text-marron cursor-pointer"/>
      </div>
    </footer>
  );
}

export default Footer;
