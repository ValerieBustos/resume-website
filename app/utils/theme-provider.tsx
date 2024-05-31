import { useFetcher } from "@remix-run/react";
import {
  createContext,
  createElement,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import type { Dispatch, ReactNode, SetStateAction } from "react";

enum Theme {
  DARK = "dark",
  LIGHT = "light",
}

type ThemeContextType = [Theme | null, Dispatch<SetStateAction<Theme | null>>];

const prefersDarkMQ = "(prefers-color-scheme: dark)";

const getPreferredTheme = () =>
  window.matchMedia(prefersDarkMQ).matches ? Theme.DARK : Theme.LIGHT;

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const themes: Array<Theme> = Object.values(Theme);

function isTheme(value: unknown): value is Theme {
  return typeof value === "string" && themes.includes(value as Theme);
}

const clientThemeCode = `
;(() => {
  const theme = window.matchMedia('${prefersDarkMQ}').matches
    ? '${Theme.DARK}'
    : '${Theme.LIGHT}';

  const cl = document.documentElement.classList;
  if (
    cl.contains('${Theme.LIGHT}') || cl.contains('${Theme.DARK}')
  ) {
    // The theme is already applied...
    // this script shouldn't exist if the theme is already applied!
    console.warn("See theme-provider.tsx>clientThemeCode>cl.contains");
    // Hi there, you shouldn't be seeing this!
  } else {
    cl.add(theme);
  }

  const meta = document.querySelector('meta[name=color-scheme]');
  if (meta) {
    meta.content = theme === '${Theme.DARK}' ? 'dark light' : 'light dark';
  } else {
    console.warn("See theme-provider.tsx>clientThemeCode>meta");
    // Hey, could you let me know you're seeing this console.warn? Thanks!
  }
})();` // Remove double slash comments & replace excess white space with a single space.
  .replace(/((?<=[^:])\/\/.*|\s)+/g, " ")
  .trim();

const themeStylesCode = `
 /* default light, but app-preference is "dark" */
 html.dark {
   light-mode {
     display: none;
   }
 }

 /* default light, and no app-preference */
 html:not(.dark) {
   dark-mode {
     display: none;
   }
 }

 @media (prefers-color-scheme: dark) {
   /* prefers dark, but app-preference is "light" */
   html.light {
     dark-mode {
       display: none;
     }
   }

   /* prefers dark, and app-preference is "dark" */
   html.dark,
   /* prefers dark and no app-preference */
   html:not(.light) {
     light-mode {
       display: none;
     }
   }
 }
`;

function ThemeHead({ ssrTheme }: { ssrTheme: boolean }) {
  const [theme] = useTheme();

  return (
    <>
      <meta
        name="color-scheme"
        content={theme === "light" ? "light dark" : "dark light"}
      />
      {ssrTheme ? null : (
        <>
          <script dangerouslySetInnerHTML={{ __html: clientThemeCode }} />
          <style dangerouslySetInnerHTML={{ __html: themeStylesCode }} />
        </>
      )}
    </>
  );
}

const clientDarkAndLightModeElsCode = `;(() => {
  const theme = window.matchMedia(${JSON.stringify(prefersDarkMQ)}).matches
    ? 'dark'
    : 'light';
  const darkEls = document.querySelectorAll("dark-mode");
  const lightEls = document.querySelectorAll("light-mode");
  for (const darkEl of darkEls) {
    if (theme === "dark") {
      for (const child of darkEl.childNodes) {
        darkEl.parentElement?.append(child);
      }
    }
    darkEl.remove();
  }
  for (const lightEl of lightEls) {
    if (theme === "light") {
      for (const child of lightEl.childNodes) {
        lightEl.parentElement?.append(child);
      }
    }
    lightEl.remove();
  }
})();`;

function ThemeBody({ ssrTheme }: { ssrTheme: boolean }) {
  return ssrTheme ? null : (
    <script
      dangerouslySetInnerHTML={{ __html: clientDarkAndLightModeElsCode }}
    />
  );
}

function ThemeProvider({
  children,
  specifiedTheme,
}: {
  children: ReactNode;
  specifiedTheme: Theme | null;
}) {
  const [theme, setTheme] = useState<Theme | null>(() => {
    if (specifiedTheme) {
      if (themes.includes(specifiedTheme)) {
        return specifiedTheme;
      } else {
        return null;
      }
    }

    if (typeof document === "undefined") {
      return null;
    }

    return getPreferredTheme();
  });

  const persistTheme = useFetcher();

  const mountRun = useRef(false);

  useEffect(() => {
    if (!mountRun.current) {
      mountRun.current = true;
      return;
    }
    if (!theme) {
      return;
    }

    persistTheme.submit(
      { theme },
      { action: "action/set-theme", method: "post" }
    );
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia(prefersDarkMQ);
    const handleChange = () => {
      setTheme(mediaQuery.matches ? Theme.DARK : Theme.LIGHT);
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
}

function Themed({
  dark,
  light,
  initialOnly = false,
}: {
  dark: ReactNode | string;
  light: ReactNode | string;
  initialOnly?: boolean;
}) {
  const [theme] = useTheme();
  const [initialTheme] = useState(theme);
  const themeToReference = initialOnly ? initialTheme : theme;
  const serverRenderWithUnknownTheme =
    !theme && typeof document === "undefined";

  if (serverRenderWithUnknownTheme) {
    return (
      <>
        {createElement("dark-mode", null, dark)}
        {createElement("light-mode", null, light)}
      </>
    );
  }

  return <>{themeToReference === "light" ? light : dark}</>;
}

function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export {
  ThemeBody,
  Themed,
  ThemeHead,
  Theme,
  ThemeProvider,
  isTheme,
  useTheme,
};
