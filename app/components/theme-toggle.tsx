import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";
import { ToggleButton } from "react-aria-components";
import { Theme, useTheme } from "~/utils/theme-provider";

export function ThemeToggle() {
  const [theme, setTheme] = useTheme();

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    );
  };
  return (
    <div className="flex w-full justify-end dark:bg-slate-300 rounded-full">
      <ToggleButton
        onPress={toggleTheme}
        className="border-[2px] shadow-sm border-slate-200 rounded-full p-1 bg-white dark:bg-slate-800 dark:border-slate-500 outline-none"
      >
        {theme === Theme.LIGHT || !theme ? (
          <MoonIcon className="text-slate-400 h-4 h-4" />
        ) : (
          <SunIcon className="text-slate-200 h-4 h-4" />
        )}
      </ToggleButton>
    </div>
  );
}
