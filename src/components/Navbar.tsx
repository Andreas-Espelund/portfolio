import ThemeSwitch from "./ThemeSwitch.tsx";
import {Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Link} from "@nextui-org/react";
import {socials} from "../util/ProjectData.ts";
import { vcardLink} from "../util/helpers.tsx";

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 right-0 rounded-b-xl z-50 flex justify-between items-center p-4 md:py-8 md:px-16 bg-zinc-100 dark:bg-zinc-900 shadow-md backdrop-blur-lg bg-opacity-80 dark:bg-opacity-80">
            <h1 className="md:text-4xl font-black mr-auto">ANDREAS ESPELUND</h1>
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
                        <DropdownItem key={"vcard"}>
                            <Link className={"flex items-center gap-4"} color="foreground" href={vcardLink()}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                </svg>
                                Download .vcard
                            </Link>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </header>
    )
}