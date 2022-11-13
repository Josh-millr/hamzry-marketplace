import Head from "next/head";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Hamzry Marketplace</title>
        <meta name="description" content="Hamzry marketplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <p className="text-3xl">Landing Page</p>
      </main>
    </div>
  );
}
