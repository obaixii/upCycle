"use client"

import * as React from "react"
import { Link } from "react-router-dom"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons/Icons"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Links, otherLinks } from "./constants"

export default function Menu() {

    return (

        <div className="hidden md:flex items-center justify-center p-2">
            <NavigationMenu>
                <NavigationMenuList>
                    {Links.map((Link) => (
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>{Link.title}</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                    <li className="row-span-3">
                                        <NavigationMenuLink asChild>
                                            <a
                                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                href="/"
                                            >
                                                {/* <Icons.logo className="h-6 w-6" /> */}
                                                <div className="mb-2 mt-4 text-lg font-medium">
                                                    {Link.heading}
                                                </div>
                                                <p className="text-sm leading-tight text-muted-foreground">
                                                    {Link.summary}
                                                </p>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                    {Link.subMenu.map((menu) => (
                                        <ListItem href={menu.url} title={menu.title}>
                                            {menu.heading}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    ))}

                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                {otherLinks.map((otherLink) => (
                                    <ListItem
                                        key={otherLink.title}
                                        title={otherLink.title}
                                        href={otherLink.href}
                                    >
                                        {otherLink.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link to="/">
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                About Us
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
