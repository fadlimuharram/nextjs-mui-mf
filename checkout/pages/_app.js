import App from "next/app";
import { lazy } from "react";
import { AppCacheProvider } from "@mui/material-nextjs/v13-pagesRouter";

const Nav = process.browser
  ? lazy(() => {
      const mod = import("home/nav").catch(console.error);
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
MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);
  return appProps;
};

export default MyApp;
