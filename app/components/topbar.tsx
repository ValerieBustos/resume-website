import { Bars3Icon } from "@heroicons/react/16/solid";
import {
  Button,
  Menu,
  MenuItem,
  MenuTrigger,
  Popover,
} from "react-aria-components";
import { Avatar } from "~/media/avatar";
import { SocialIcons } from "./social-icons";

export function TopBar() {
  const navLinks = [
    {
      label: "Resume",
    },
    {
      label: "Portfolio",
    },
    {
      label: "Hobbies",
    },
    {
      label: "Contact",
    },
  ];

  return (
    <nav className="bg-white border-slate-200 dark:bg-slate-900 px-16">
      <div className="flex space-between pt-9 pb-9">
        <div className="flex flex-wrap items-center space-x-16 mx-auto ml-0 text-center">
          <a
            href=""
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-3xl text-violet-400 font-bold whitespace-nowrap">
              VB
            </span>
          </a>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {navLinks.map((link, index) => (
                <li key={`nav-link-${index}`}>
                  <a
                    href="#"
                    className="block px-3 text-slate-700 rounded hover:bg-slate-100 md:hover:bg-transparent md:border-0 md:hover:text-violet-400 md:p-0 dark:text-white md:dark:hover:text-violet-400 dark:hover:bg-slate-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex items-center">
          <MenuTrigger>
            <Button
              aria-label="Menu"
              className="items-center mr-4 p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:base-color focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-slate-600 dark:focus:ring-gray-600"
            >
              <Bars3Icon className="text-slate-700 dark:text-white" />
            </Button>
            <Popover className="md:hidden">
              <div className="w-72 shadow-md rounded dark:bg-slate-800 pt-6">
                <div className="flex flex-col justify-center text-center space-y-3">
                  <Avatar />
                  <div className="space-y-1">
                    <p className="font-semibold text-lg">Valerie Bustos</p>
                    <p className="text-base">Frontend Developer</p>
                  </div>
                </div>
                <div className="my-12 h-0.5 border-t-0 bg-slate-100 opacity-100 mr-3 ml-3 dark:bg-slate-500" />
                <Menu className="flex flex-col p-2 outline-none rounded">
                  {navLinks.map((link) => (
                    <MenuItem
                      key={link.label}
                      href="#"
                      className="ml-6 p-2 m-1 outline-none text-md font-semibold hover:text-violet-400"
                    >
                      {link.label}
                    </MenuItem>
                  ))}
                </Menu>
                <div className="h-24" />
                <div className="flex justify-center w-full p-6 space-x-4">
                  <SocialIcons />
                </div>
              </div>
            </Popover>
          </MenuTrigger>
        </div>
        <div className="hidden w-full md:block md:w-auto space-x-4">
          <SocialIcons />
        </div>
      </div>
    </nav>
  );
}
