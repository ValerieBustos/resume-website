import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  LiveReload,
  ScrollRestoration,
} from "@remix-run/react";
import stylesheet from "~/tailwind.css";
import {
  NonFlashOfWrongThemeEls,
  ThemeProvider,
  useTheme,
} from "./utils/theme-provider";
import clsx from "clsx";
import { TopBar } from "./components/topbar";
import { ThemeToggle } from "./components/theme-toggle";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

function App() {
  const [theme] = useTheme();

  return (
    <html lang="en" className={clsx(theme)}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" />
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <NonFlashOfWrongThemeEls />
        <Meta />
        <Links />
      </head>
      <body className="w-full text-slate-800 dark:text-white dark:bg-slate-900 max-w-screen-2xl mx-auto">
        <TopBar />
        <Outlet />
        <ThemeToggle />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function AppWithProviders() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
