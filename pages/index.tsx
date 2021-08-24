import Head from "next/head";
import Image from "next/image";
import c from "../styles/Home.module.scss";

import Navbar from "../components/Navbar/Navbar";
import TitleBanner from "../components/TitleBanner/TitleBanner";

export default function Home() {
  let content = "width=device-width, initial-scale=0.6";
  return (
    <>
      <Head>
        <title>MIYT</title>
        <meta name="viewport" content={content} />
      </Head>
      <div>
        <img
          className={c.patternBackground}
          draggable="false"
          src="../assets/pattern background.png"
          alt="MIYT"
        />
        <Navbar />
        <main className={c.main}>
          <TitleBanner accentColor="yellow">
            Need video or audio from Youtube?
          </TitleBanner>
          <img
            draggable="false"
            className={c.offsetBackgroundLightGrey}
            src="/assets/offset light block.png"
            alt=":)"
          />
          {/* <div className={c.offsetBackgroundLightGrey}></div> */}
          <img
            draggable="false"
            className={c.person}
            src="/assets/person.png"
            alt=":)"
          />
        </main>
      </div>
    </>
  );
}
