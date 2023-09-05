import Header from './component/header';
import '../../styles/global.css';

export default function Home({pageProps}) {
  console.log(pageProps);
  return (
    <main>
      <Header {...pageProps}/>
      <h1>goodbye</h1>
    </main>
  )
}
