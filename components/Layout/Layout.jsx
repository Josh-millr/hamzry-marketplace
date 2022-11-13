import Head from "next/head";

export const Layout = ({ topNav: TopNav, footer: Footer, children }) => (
  <>
    <Head>
      <title>Hamzry Marketplace</title>
      <meta name="description" content="Hamzry marketplace" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <TopNav />
      <div className="mx-auto w-full max-w-screen-desktop">{children}</div>
    </main>
    <Footer />
  </>
);
