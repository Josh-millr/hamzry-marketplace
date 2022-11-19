import { Inter, DM_Sans } from "@next/font/google";

import "@styles/globals.css";

import { TopNav } from "@components/index";
import { Footer } from "@components/index";

const inter = Inter({
  variable: "--font-inter",
});
const DmSans = DM_Sans({
  variable: "--font-DmSans",
  weight: "700",
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <main className={`${inter.variable} ${DmSans.variable}`}>
        <TopNav />
        <div className="mx-auto w-full max-w-screen-desktop">
          <Component {...pageProps} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
