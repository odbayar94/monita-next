import "bootstrap/dist/css/bootstrap.min.css";
import "../sass/main.scss";

import type { AppProps } from "next/app";
import { SnackbarProvider } from "notistack";
import { Provider } from "react-redux";
import { useRouter } from "next/router";
import { useAppSelector, useAppDispatch } from "redux/hooks";
//My import
import store from "redux/store";
import Layout from "components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const showSidebar = router.pathname === "/" ? true : false;

  return (
    <Provider store={store}>
      <SnackbarProvider
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SnackbarProvider>
    </Provider>
  );
}
export default MyApp;
