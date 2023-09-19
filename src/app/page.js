"use client";
import MainPage from "./mainPage/mainPage";
// CSS
import "../../styles/global.css";

export default function Home({ pageProps }) {
  return (
    <main>
      <MainPage {...pageProps} />
    </main>
  );
}
