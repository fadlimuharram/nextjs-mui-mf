import Nav from "../components/nav";
import App from "next/app";
import dynamic from "next/dynamic";
import { AppCacheProvider } from "@mui/material-nextjs/v13-pagesRouter";

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
