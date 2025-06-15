import ThemeSwitch from "./ThemeSwitch.tsx";
import { Tooltip } from "@nextui-org/react";
import { socials } from "../util/ProjectData.ts";
import { useEffect, useState } from "react";

const BREAKPOINT = 600;
export default function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Function to update window width
  const updateWindowWidth = () => setWindowWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  const small = windowWidth < BREAKPOINT;

  return (
    <header className="absolute top-0 left-0 right-0 z-50 flex justify-between items-end p-4 lg:py-3 lg:px-16 ">
      <h1 className="md:text-2xl font-semibold mr-auto">ANDREAS ESPELUND</h1>
      <div className={"flex gap-2 md:gap-4"}>
        {socials.map((item) => (
          <Tooltip content={item.label} color="primary" size="lg" radius="full">
            <a
              className="flex items-center gap-4 px-2 py-1"
              href={item.href}
              target={"_blank"}
            >
              <i className={item.devIcon}></i>
            </a>
          </Tooltip>
        ))}

        <ThemeSwitch size={small ? "sm" : "md"} />
      </div>
    </header>
  );
}
