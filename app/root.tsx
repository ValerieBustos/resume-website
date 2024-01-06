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

  export const links: LinksFunction = () => [
    { rel: "stylesheet", href: stylesheet },
  ];
  
  export default function App() {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport"/>
          <link
            rel="icon"
            href="data:image/x-icon;base64,AA"
          />
          <Meta />
          <Links />
        </head>
        <body>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    );
  }
  