"use client";
import MainPage from "./mainPage/MainPage";
import Head from "next/head";
// CSS
import 'bootstrap/dist/css/bootstrap.css'
import "../../styles/global.css";

const Home=({ pageProps })=>{
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <MainPage {...pageProps} />
      </main>
    </>
  );
}
export default Home;