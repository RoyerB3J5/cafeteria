import Image from "next/image";
import SocialIcons from "./SocialIcons";

function Footer() {
  return (
    <footer className=" w-full py-16 px-20 flex flex-col md:flex-row gap-16 md:gap-0 justify-around items-center bg-footer">
      <p className="text-white text-lg"> © 2026 URBAN COFFEE</p>

      <Image
        src="/logo-light.png"
        alt="Logo de cafeteria "
        width={150}
        height={20}
        className="responsive"
        style={{ width: "auto", height: "auto" }}
      />

      <SocialIcons />
    </footer>
  );
}

export default Footer;
