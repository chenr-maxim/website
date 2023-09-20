import Layout from "@/src/components/Layout";
import localFont from "next/font/local";
import { CenteredLayout } from "@/src/components/Layout";

import "../styles/globals.css";
import "../styles/reset.css";
import "normalize.css";

export default function App({ Component, pageProps }) {
  const Layout = Component.Layout || CenteredLayout;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
