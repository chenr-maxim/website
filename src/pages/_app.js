import Layout from "@/src/components/Layout";
import localFont from "next/font/local";

import "../styles/globals.css";
import "../styles/reset.css";
import "normalize.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
