import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SnackbarProvider } from 'notistack';
import { UserProvider } from "@auth0/nextjs-auth0";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
    <UserProvider>
        <Component {...pageProps} />
        </UserProvider>
    </SnackbarProvider>
  );
}
export default MyApp;
