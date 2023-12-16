import { lazy } from "react";
import { AppCacheProvider } from "@mui/material-nextjs/v13-pagesRouter";

const Nav = process.browser
  ? lazy(() => {
      const mod = import("home/nav");
      return mod;
    })
  : () => null;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppCacheProvider {...pageProps}>
        <Nav />
        <Component {...pageProps} />
      </AppCacheProvider>
    </>
  );
}


export default MyApp;
