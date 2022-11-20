import store from "@store/store";
import { Provider } from "react-redux";

import { Inter, DM_Sans } from "@next/font/google";
import "@styles/globals.css";

import { Footer, TopNav, Loader } from "@components/index";

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
      <>
        <main className={`${inter.variable} ${DmSans.variable}`}>
          <TopNav />
          <Loader />
          <div className="mx-auto w-full max-w-screen-desktop">
            <Component {...pageProps} />
          </div>
        </main>
        <Footer />
      </>
    </Provider>
  );
}

export default MyApp;
