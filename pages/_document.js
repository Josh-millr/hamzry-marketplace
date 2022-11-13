import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="mx-auto w-[100vw] max-w-[1280px] md:h-[100vh]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
