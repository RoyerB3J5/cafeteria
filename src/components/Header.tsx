"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const useActiveSection = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "";

      sectionIds.forEach((id: string) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds]);

  return activeSection;
};

function Header() {
  const sectionIds: string[] = [
    "inicio",
    "nosotros",
    "horario",
    "menu",
    "galeria",
  ];
  const activeSection = useActiveSection(sectionIds);
  const [showHeader, setShowHeader] = useState(true); // Visible al inicio
  const [hasBackground, setHasBackground] = useState(false); // Fondo del header
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen && window.innerWidth < 1024) {
      setIsOpen(false);
    }
  }, [activeSection, isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const inicioSection = document.getElementById("inicio");
      if (inicioSection) {
        const rect = inicioSection.getBoundingClientRect();

        // Ocultar el menú solo si se hace scroll en la sección de inicio
        if (rect.top <= 0 && rect.bottom >= 0) {
          setShowHeader(false); // Desaparece cuando se hace scroll en la sección de inicio
        } else {
          setShowHeader(true); // Visible en otras secciones o al inicio
        }

        // Cambiar el fondo del header cuando no esté en la sección de inicio
        if (rect.bottom <= 0) {
          setHasBackground(true); // Fondo sólido en otras secciones
        } else {
          setHasBackground(false); // Fondo transparente en la sección de inicio
        }
      }

      // Reaparecer el menú cuando se llega al inicio de la página
      if (window.scrollY === 0) {
        setShowHeader(true); // Asegura que el menú esté visible en el inicio
        setHasBackground(false); // Fondo transparente en el inicio
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-20 w-full py-8 px-10 md:px-28 flex flex-col lg:flex-row justify-between items-center transition-all duration-300  ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      } ${hasBackground || isOpen ? "bg-footer" : "bg-transparent"} ${
        isOpen ? "h-screen " : "h-auto"
      }`} // Cambia el fondo aquí
    >
      <div className="flex justify-between lg:justify-normal items-center w-full lg:w-auto">
        <div className="flex justify-center">
          <Image
            src="/logo-light.png"
            alt="Logo de cafeteria"
            width={120}
            height={20}
            className="responsive"
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <div onClick={() => setIsOpen(!isOpen)} className="flex lg:hidden">
          {isOpen ? (
            <IoMdClose className=" text-white size-8 stroke-2" />
          ) : (
            <IoMdMenu className=" text-white size-8 stroke-2" />
          )}
        </div>
      </div>

      <nav
        className={`${
          isOpen ? "flex" : "hidden lg:flex"
        } flex-col lg:flex-row justify-center items-center gap-16 lg:gap-20`}
      >
        <ul className="flex flex-col lg:flex-row justify-center items-center gap-10 text-white">
          {sectionIds.map((id) => (
            <li key={id} className="relative group">
              <a
                href={`#${id}`}
                className={`block py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-marron after:transition-all after:duration-300 group-hover:after:w-full ${
                  activeSection === id ? "after:w-full" : ""
                }`}
              >
                {id.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
        <button className="px-8 py-1 border-2 text-white border-white text-base lg:text-lg hover:bg-marron hover:border-marron transition-all">
          PIDE YA
        </button>
      </nav>
      <div className="flex lg:hidden"></div>
    </header>
  );
}

export default Header;
