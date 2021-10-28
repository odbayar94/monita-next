import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import type { AppProps } from "next/app";
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';
import { useRouter } from "next/router";

//My import 
import store from 'redux/store';
// import { Layout } from "../components/Layout";
import Layout from "components/Layout";



function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const showSidebar = router.pathname === "/" ? true : false;

  return (
    <Provider store={store}>
    <SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
      {showSidebar ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
         
          <Component {...pageProps} />
        </Layout>
      )}
    </SnackbarProvider>
    </Provider>
  );
}
export default MyApp;
