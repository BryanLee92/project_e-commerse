"use client";
import MainPage from "./mainPage/MainPage";
// CSS
import "../../styles/global.css";

const Home=({ pageProps })=>{
  return (
    <main>
      <MainPage {...pageProps} />
    </main>
  );
}
export default Home;