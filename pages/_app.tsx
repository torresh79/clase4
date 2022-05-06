import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";

import Menu from "@/components/Menu";
import Alert from "@/components/Alert";
import { MenuContextProvider } from "providers/menu";
import { AlertContextProvider } from "providers/alert";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="preload"
          href="/fonts/Gotham/Gotham-Book.otf"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Gotham/Gotham-Bold.otf"
          as="font"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon.ico" />
        <title>Peimento</title>
      </Head>
      <MenuContextProvider>
        <AlertContextProvider>
          <Alert />
          <Menu />
          <AnimatePresence exitBeforeEnter initial={false}>
            <Component key={router.pathname} {...pageProps} />
          </AnimatePresence>
        </AlertContextProvider>
      </MenuContextProvider>
    </>
  );
}

export default MyApp;
