import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
function SocialIcons() {
  return (
    <div className="flex justify-center items-center gap-8 text-white mt-4 md:mt-0">
      <FaInstagram className="size-10 hover:text-marron cursor-pointer border-[1px] p-2 rounded-full transition-all" />
      <FaTiktok className="size-10 hover:text-marron cursor-pointer border-[1px] p-2 rounded-full transition-all" />
      <FaFacebookSquare className="size-10 hover:text-marron cursor-pointer border-[1px] p-2 rounded-full transition-all" />
    </div>
  );
}

export default SocialIcons;
