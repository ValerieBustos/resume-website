import { ToggleButton } from "react-aria-components";
import { TopBar } from "~/components/topbar";
import { Theme, useTheme } from "~/utils/theme-provider";

export default function Index() {
  const [, setTheme] = useTheme();

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    );
  };

  return (
    <>
      <TopBar />
      <ToggleButton onPress={toggleTheme}>Theme</ToggleButton>
    </>
  );
}
