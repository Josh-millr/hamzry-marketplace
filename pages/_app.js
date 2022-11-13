import "@styles/globals.css";
import { Layout, TopNav, Footer } from "@components/index";

function MyApp({ Component, pageProps }) {
  return (
    <Layout topNav={TopNav} footer={Footer}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
