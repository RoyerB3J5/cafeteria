"use client"
import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
function UpperWindow() {
  const [showIcon, setShowIcon] = useState(false)
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      const inicioSection = document.getElementById("inicio")
      if(inicioSection){
        const rect = inicioSection.getBoundingClientRect()

        if(rect.top <= 0 && rect.bottom >=0){
          setShowIcon(false)
        }else {
          setShowIcon(true)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  },[])
  return (
    <div className={`size-10 bg-marron text-white fixed bottom-4 right-4 md:bottom-6 md:right-6 p-2 cursor-pointer justify-center items-center ${showIcon ? "flex" :"hidden"}`} onClick={scrollToTop}>
      <IoIosArrowUp className="size-6"/>
    </div>
  )
}

export default UpperWindow