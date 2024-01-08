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
    <div className="dark:bg-slate-300">
      <div className="flex w-full justify-end pr-6 z-0 relative">
        <ToggleButton
          onPress={toggleTheme}
          className="my-8 mr-6 border-2 shadow-sm border-slate-200 rounded-full p-2 dark:bg-slate-800 dark:border-slate-500 outline-none fixed  bottom-0"
        >
          {theme === Theme.LIGHT || !theme ? (
            <SunIcon className="text-slate-400 h-8 h-8" />
          ) : (
            <MoonIcon className="text-slate-200 h-8 h-8" />
          )}
        </ToggleButton>
      </div>
    </div>
  );
}
