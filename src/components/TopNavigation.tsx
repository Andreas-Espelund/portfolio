import { useState } from 'react'
import {
    Navbar,
    NavbarContent,
    NavbarItem,
    Link,
    NavbarMenu,
    NavbarMenuItem, NavbarMenuToggle, NavbarBrand
} from "@nextui-org/react";
import {NavItem} from "../../types.ts";
import ThemeSwitch from "./ThemeSwitch.tsx";


export default function TopNavigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const items: NavItem[] = [
        {
            label : 'Home',
            href : '#home',
        },
        {
            label : 'Projects',
            href : '#projects',
        },
        {
            label : 'Contact',
            href : '#contact',
        },
    ]

    return (
            <Navbar onMenuOpenChange={setIsMenuOpen} isBordered

            >
                <NavbarContent className="md:hidden">
                    <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"}/>
                </NavbarContent>
                <NavbarContent>
                    <div className="grid grid-flow-col">


                    <NavbarBrand>
                        <h1 className="text-3xl font-black">ANDREAS ESPELUND</h1>
                    </NavbarBrand>

                    {items.map((item) =>
                        <NavbarItem>
                            <Link href={item.href} color="foreground">
                                {item.label}
                            </Link>
                        </NavbarItem>
                    )}

                    <NavbarMenu>
                        {items.map((item: NavItem) =>
                            <NavbarMenuItem>
                                <Link href={item.href} color="foreground">
                                    {item.label}
                                </Link>
                            </NavbarMenuItem>
                        )}
                    </NavbarMenu>
                    <ThemeSwitch/>
                    </div>
                </NavbarContent>
            </Navbar>
    )
}


