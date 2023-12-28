import ThemeSwitch from "./ThemeSwitch.tsx";
import {Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Link} from "@nextui-org/react";
import {socials} from "../util/ProjectData.ts";

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 md:py-8 md:px-16 bg-zinc-100 dark:bg-zinc-900 shadow-md backdrop-blur-lg bg-opacity-80 dark:bg-opacity-80">
            <h1 className="md:text-4xl font-semibold mr-auto">ANDREAS ESPELUND</h1>
            <div className={"flex gap-2 md:gap-4"}>
                <ThemeSwitch/>
                <Dropdown>
                    <DropdownTrigger>
                        <Button color="primary" className="p-0 md:px-8 md:py-6 md:text-lg font-medium">
                            Contact
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Static Actions">
                        {socials.map((item) =>
                            <DropdownItem key={item.label}>
                                <Link className="flex items-center gap-4" href={item.href} target={"_blank"} color="foreground">
                                    <i className={item.devIcon}></i>
                                    {item.label}
                                </Link>
                            </DropdownItem>
                        )}
                    </DropdownMenu>
                </Dropdown>
            </div>
        </header>
    )
}