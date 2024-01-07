import { Bars3Icon } from "@heroicons/react/16/solid";
import { UserCircleIcon } from "@heroicons/react/16/solid";
import {
  Button,
  Menu,
  MenuItem,
  MenuTrigger,
  Popover,
} from "react-aria-components";
import { Avatar } from "~/media/avatar";
import { Figma } from "~/media/figma";
import { GitHub } from "~/media/github";
import { LinkedIn } from "~/media/linkedin";

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
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-3xl text-violet-400 font-bold whitespace-nowrap dark:text-violet-200">
            VB
          </span>
        </a>
        <MenuTrigger>
          <Button
            aria-label="Menu"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-500 rounded-lg md:hidden hover:base-color focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <Bars3Icon className="text-slate-700" />
          </Button>
          <Popover className="md:hidden">
            <div className="w-72 shadow-md rounded">
              <div className="flex flex-col justify-center text-center space-y-3 m-2">
                <Avatar />
                <div className="space-y-1">
                  <p className="font-semibold text-lg">Valerie Bustos</p>
                  <p className="text-base">Frontend Developer</p>
                </div>
              </div>
              <div className="my-12 h-0.5 border-t-0 bg-slate-100 opacity-100 dark:opacity-50 mr-3 ml-3" />
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
              <div className="h-56" />
              <div className="flex justify-center p-10 space-x-6 align-middle">
                <LinkedIn />
                <GitHub />
                <Figma />
              </div>
            </div>
          </Popover>
        </MenuTrigger>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navLinks.map((link, index) => (
              <li key={`nav-link-${index}`}>
                <a
                  href="#"
                  className="block py-2 px-3 text-slate-700 rounded hover:bg-slate-100 md:hover:bg-transparent md:border-0 md:hover:text-violet-400 md:p-0 dark:text-white md:dark:hover:text-violet-400 dark:hover:bg-slate-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
