import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  LiveReload,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import stylesheet from "~/tailwind.css";
import {
  Theme,
  ThemeBody,
  ThemeHead,
  ThemeProvider,
  useTheme,
} from "./utils/theme-provider";
import clsx from "clsx";
import { TopBar } from "./components/topbar";
import Footer from "./components/footer";
import { getThemeSession } from "./utils/theme.server";

export const links: LinksFunction = () => [
  {
    rel: "icon",
    href: "/favicon.ico",
    type: "image/x-icon",
  },
  {
    rel: "resume",
    href: "/resume-valerie-bustos.pdf",
    type: "file/pdf",
  },
  { rel: "stylesheet", href: stylesheet },
];

export type LoaderData = {
  theme: Theme | null;
};

export const loader: LoaderFunction = async ({ request }) => {
  const themeSession = await getThemeSession(request);

  const data: LoaderData = {
    theme: themeSession.getTheme(),
  };

  return data;
};

function App() {
  const data = useLoaderData<LoaderData>();
  const [theme] = useTheme();

  return (
    <html lang="en" className={clsx(theme)}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.1" />
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <title>Valerie Bustos</title>
        <ThemeHead ssrTheme={Boolean(data.theme)} />
        <Meta />
        <Links />
      </head>
      <body className="h-screen flex flex-col flex-0 w-full text-slate-800 dark:text-white dark:bg-slate-900 max-w-screen-2xl mx-auto">
        <TopBar />
        <div className="pt-[4rem] flex flex-1 flex-col">
          <Outlet />
          <ThemeBody ssrTheme={Boolean(data.theme)} />
        </div>
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function AppWithProviders() {
  const data = useLoaderData<LoaderData>();
  return (
    <ThemeProvider specifiedTheme={data.theme}>
      <App />
    </ThemeProvider>
  );
}
