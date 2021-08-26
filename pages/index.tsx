import React, { useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import c from "../styles/Home.module.scss";

import Navbar from "../components/Navbar/Navbar";
import TitleBanner from "../components/TitleBanner/TitleBanner";
import DownloadBox from "../components/DownloadBox/DownloadBox";
import Footer from "../components/Footer/Footer";
import Eyes from "../components/Eyes/Eyes";

export default function Home() {
  const moreInfoRef = useRef();
  const scrollToMoreInfo = () => {
    const node = moreInfoRef.current;
    if (node != null) {
      //@ts-ignore
      node.scrollIntoView();
    }
  };
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
        <Navbar moreInfoClicked={() => scrollToMoreInfo()} />
        <main className={c.main}>
          <TitleBanner className={c.titleBanner1} accentColor="yellow">
            Need video or audio from YouTube?
          </TitleBanner>
          <img
            draggable="false"
            className={c.offsetBackgroundLightGrey}
            src="/assets/offset light block.png"
            alt=":)"
          />
          <Eyes />
          <img
            draggable="false"
            className={c.person}
            src="/assets/person.png"
            alt=":)"
          />
          <img
            draggable="false"
            className={c.applicationImage}
            src="/assets/MIYT application.png"
            alt=":)"
          />
          <h1 className={c.questionTitle}>What is MIYT?</h1>
          <div className={c.infoBox}>
            MIYT is a YouTube downloader desktop application for:
            <br />
            <p style={{ float: "right" }}>Mac OS, Windows, Linux</p>
            <br />
            <br />
            <p>
              &nbsp;&nbsp;&nbsp;-- Download multiple videos at once, as video or
              audio
            </p>
            <p>&nbsp;&nbsp;&nbsp;-- Search by URL or video names</p>
            <p>&nbsp;&nbsp;&nbsp;-- Edit metadata of downloads</p>
            <p>&nbsp;&nbsp;&nbsp;-- Change video selection from app</p>
          </div>
          <img
            draggable="false"
            className={c.line2}
            src="/assets/line2.png"
            alt=":)"
          />
          <TitleBanner className={c.titleBanner2} right accentColor="red">
            Watch MIYT in action
          </TitleBanner>
          {/* <video */}
          {/*   // height={"60vh"} */}
          {/*   // width={"100vw"} */}
          {/*   className={c.video} */}
          {/*   muted */}
          {/*   autoPlay */}
          {/*   loop */}
          {/* > */}
          {/*   <source src="/assets/miyt.mov" type="video/mp4" /> */}
          {/*   Your browser does not support the video tag. */}
          {/* </video> */}
          <img
            src="/assets/miyt.gif"
            alt="miyt video"
            draggable={false}
            className={c.video}
          />
          <img
            draggable="false"
            src="/assets/waves with lines.png"
            alt="~"
            className={c.wavesBackground}
          />
          {/* <img */}
          {/*   draggable="false" */}
          {/*   src="/assets/line1.png" */}
          {/*   alt="~" */}
          {/*   className={c.line1} */}
          {/* /> */}
          {/* <img */}
          {/*   draggable="false" */}
          {/*   src="/assets/line3.png" */}
          {/*   alt="~" */}
          {/*   className={c.line3} */}
          {/* /> */}
          {/* <img */}
          {/*   draggable="false" */}
          {/*   src="/assets/line4.png" */}
          {/*   alt="~" */}
          {/*   className={c.line4} */}
          {/* /> */}
          <TitleBanner className={c.titleBanner3} accentColor="green">
            Download MIYT
          </TitleBanner>
          <DownloadBox />
        </main>
        <Footer />
      </div>
    </>
  );
}
