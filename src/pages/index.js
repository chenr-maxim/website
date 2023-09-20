import Head from "next/head";
import Image from "next/image";
import Layout from "@/src/components/Layout";
import Hero from "@/src/components/Hero";
import CenteredLayout from "../components/Layout";

const HeadHTML = () => {
  return (
    <Head>
      <title>Maxim Chen&#39;s - Software Engineer</title>
      <meta
        property="og.title"
        content="Maxim Chen - Software Engineer"
        key="title"
      />
      <meta
        property="og.description"
        content="This is the official portfolio website for Maxim Chen. Maxim is a front-end software engineer based in the San Francisco Bay Area"
        key="description"
      />
      <meta property="og.type" content="website" key="type" />
      <meta property="og.url" content="https://maximchen.com" key="url" />
      {/* <meta property="og.image"></meta> */}
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content="Maxim Chen" />
    </Head>
  );
};

export default function Home() {
  return (
    <>
      <HeadHTML />
      <Hero />
    </>
  );
}
