import store from "@store/store";
import { Provider } from "react-redux";

import { Inter, DM_Sans } from "@next/font/google";
import "@styles/globals.css";

import { Layout } from "@components/index";

const inter = Inter({
  variable: "--font-inter",
});
const DmSans = DM_Sans({
  variable: "--font-DmSans",
  weight: "700",
});

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className={`${inter.variable} ${DmSans.variable}`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </Provider>
  );
}

export default MyApp;
