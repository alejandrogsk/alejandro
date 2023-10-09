import { cssBundleHref } from "@remix-run/css-bundle";
import { json, type LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useLocation,
} from "@remix-run/react";
import stylesheet from "~/tailwind.css";
import Navigation from "./components/Layout/Navigation";
import Grid from "./components/Layout/Grid";
import { useEffect } from "react";
import * as gtag from "~/utils/gtags.client";
export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: stylesheet }
];

// Load the GA tracking id from the .env
export const loader = async () => {
  return json({ gaTrackingId: process.env.GA_TRACKING_ID });
};



export default function App() {

  const location = useLocation();
  const { gaTrackingId } = useLoaderData<typeof loader>();

  useEffect(() => {
    if (gaTrackingId?.length) {
      gtag.pageview(location.pathname, gaTrackingId);
    }
  }, [location, gaTrackingId]);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-grey-light relative">
        <Navigation />
        <Grid />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />

      </body>
    </html>
  );
}
