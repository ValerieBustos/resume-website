import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";
import { ToggleButton } from "react-aria-components";
import { Theme, Themed, useTheme } from "~/utils/theme-provider";

export interface ThemeToggleProps {
  showLabel?: boolean;
  size?: "md" | "lg";
}

export function ThemeToggle({ showLabel, size }: ThemeToggleProps) {
  const [theme, setTheme] = useTheme();

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    );
  };
  return (
    <div className="inline-flex dark:bg-slate-300 rounded-full">
      <ToggleButton
        onPress={toggleTheme}
        className={clsx(
          "border-[2px] flex shadow-sm border-slate-200 rounded-full focus:ring focus:ring-slate-100 bg-white dark:bg-slate-800 focus:dark:ring-slate-700 dark:border-slate-500 outline-none",

          size === "lg" ? "p-4" : "p-2"
        )}
        aria-label="A toggle to control the theme"
      >
        {showLabel ? (
          <p className="text-slate-600 dark:text-slate-300 text-sm mr-2">
            {theme === Theme.LIGHT ? "Try dark mode" : "Try light mode"}
          </p>
        ) : null}

        <Themed
          dark={
            <SunIcon
              className="text-slate-200"
              height={size === "lg" ? 20 : 18}
            />
          }
          light={
            <MoonIcon
              className="text-slate-400"
              height={size === "lg" ? 20 : 18}
            />
          }
        />
      </ToggleButton>
    </div>
  );
}
