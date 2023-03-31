import Head from "next/head";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import New from "@/components/New";
import Trending from "@/components/Trending";

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend Mentor | News homepage</title>
        <meta
          name="description"
          content="This is solution to the  news home page challenge from frontend  mentor"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      <Nav />
      <main className="lg:my-10">
        <div className="lg:flex lg:gap-x-6  lg:w-[80%]   lg:mx-auto lg:my-10">
          <Hero />
          <New />
        </div>
        <Trending />
      </main>
    </>
  );
}
