import ThemeSwitch from "./ThemeSwitch.tsx";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
} from "@nextui-org/react";
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
    <header className="absolute top-0 left-0 right-0 z-50 flex justify-between items-end p-4 md:py-3 md:px-16 ">
      <h1 className="md:text-2xl font-semibold mr-auto">ANDREAS ESPELUND</h1>
      <div className={"flex gap-2 md:gap-4"}>
        <ThemeSwitch size={small ? "sm" : "md"} />
        <Dropdown>
          <DropdownTrigger>
            <Button
              color="primary"
              size={small ? "sm" : "lg"}
              className="font-medium"
            >
              Contact
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            {socials.map((item) => (
              <DropdownItem
                key={item.label}
                closeOnSelect={false}
                className={"p-0"}
              >
                <Link
                  className="flex items-center gap-4 px-2 py-1"
                  href={item.href}
                  target={"_blank"}
                  color="foreground"
                >
                  <i className={item.devIcon}></i>
                  {item.label}
                </Link>
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>
    </header>
  );
}
