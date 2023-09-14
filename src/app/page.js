"use client";
import MainPage from "./MainPage/MainPage";
// CSS
import "../../styles/global.css";

export default function Home({ pageProps }) {
  return (
    <main>
      <MainPage {...pageProps} />
    </main>
  );
}
