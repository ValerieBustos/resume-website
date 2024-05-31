import { Bars3Icon } from "@heroicons/react/16/solid";
import {
  Button,
  Link,
  Menu,
  MenuItem,
  MenuTrigger,
  Popover,
} from "react-aria-components";
import { Avatar } from "~/media/avatar";
import { SocialIcons } from "./social-icons";
import { ThemeToggle } from "./theme-toggle";
import { useEffect, useState } from "react";

export function TopBar() {
  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  const navLinks = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Portfolio",
      link: "/portfolio",
    },
    {
      label: "About me",
      link: "/about-me",
    },
    {
      label: "Contact",
      link: "/contact",
    },
  ];

  return (
    <nav className="flex fixed items-center justify-between max-w-screen-2xl top-0 border-b dark:border-b-slate-500 z-50 w-full bg-white border-b-slate-200 dark:bg-slate-900 px-8 md:px-16">
      <div className="flex w-full space-x-6 py-4 text-sm">
        <div className="flex flex-wrap items-center space-x-10 mx-auto ml-0 text-center">
          <Link
            href="./"
            className="flex items-center space-x-3 rounded-md rtl:space-x-reverse focus:outline-none focus:ring focus:ring-violet-300"
          >
            <span className="self-center text-3xl text-violet-600 font-bold whitespace-nowrap dark:text-violet-400 ">
              VB
            </span>
          </Link>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {navLinks.map((menuItem, index) => (
                <li key={`nav-menuItem-${index}`}>
                  <Link
                    href={menuItem.link}
                    className="block px-3 text-slate-700 without-ring outline-none focus-visible:ring-violet-300 rounded hover:bg-slate-100 md:hover:bg-transparent md:border-0 md:hover:text-violet-400 md:p-0 dark:text-white md:dark:hover:text-violet-400 dark:hover:bg-slate-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    {menuItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <ThemeToggle />
        </div>
        <div className="flex justify-end items-center">
          <MenuTrigger>
            <Button
              aria-label="Menu"
              className="items-center mr-4 p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:base-color focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-slate-600 dark:focus:ring-gray-600"
            >
              <Bars3Icon className="text-slate-700 dark:text-white" />
            </Button>
            <Popover className="md:hidden">
              <div className="w-72 shadow-md rounded bg-white dark:bg-slate-800 pt-6">
                <div className="flex flex-col justify-center text-center space-y-3">
                  <Avatar />
                  <div className="space-y-1">
                    <p className="font-semibold text-lg">Valerie Bustos</p>
                    <p className="text-base">Frontend Developer</p>
                  </div>
                </div>
                <div className="my-12 h-0.5 border-t-0 bg-slate-100 opacity-100 mr-3 ml-3 dark:bg-slate-500" />
                <Menu className="flex flex-col p-2 outline-none rounded">
                  {navLinks.map((menuItem) => (
                    <MenuItem
                      key={menuItem.label}
                      href={menuItem.link}
                      className="ml-6 p-2 m-1 outline-none text-md font-semibold hover:text-violet-400"
                    >
                      {menuItem.label}
                    </MenuItem>
                  ))}
                </Menu>
                <div className="h-24" />
                <div className="flex justify-center w-full p-6 space-x-4">
                  <SocialIcons />
                  <ThemeToggle />
                </div>
              </div>
            </Popover>
          </MenuTrigger>
        </div>
      </div>
      <div className="hidden w-full md:block md:w-auto space-x-4">
        <div className="flex space-x-5">
          <SocialIcons />
        </div>
      </div>
    </nav>
  );
}
