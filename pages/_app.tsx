import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SnackbarProvider } from 'notistack';
import { UserProvider } from "@auth0/nextjs-auth0";

import { Layout } from "../components/Layout";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const showSidebar = router.pathname === "/" ? true : false;

  return (
    <SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
    <UserProvider>
      {showSidebar ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </UserProvider>
    </SnackbarProvider>
  );
}
export default MyApp;
