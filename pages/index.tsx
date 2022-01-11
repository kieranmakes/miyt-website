import React, { useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import { animateScroll as scroll } from "react-scroll";
import c from "../styles/Home.module.scss";

import Navbar from "../components/Navbar/Navbar";
import TitleBanner from "../components/TitleBanner/TitleBanner";
import DownloadBox from "../components/DownloadBox/DownloadBox";
import Footer from "../components/Footer/Footer";
import Eyes from "../components/Eyes/Eyes";

export default function Home() {
  const scrollToMoreInfo = () => {
    scroll.scrollTo(window.innerHeight / 3);
  };
  const scrollToDownload = () => {
    scroll.scrollTo(window.innerHeight * 10);
  };
  let content = "width=device-width, initial-scale=1.0";
  return (
    <>
      <Head>
        <title>MIYT</title>
        <meta name="viewport" content={content} />

        <meta
          name="description"
          content="MIYT is a cross platform desktop application. Download multiple videos at once, as video or audio. Search by URL or video names. Edit metadata of downloads. Change video selection from app"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://miyt.xyz/" />
        <meta property="og:title" content="MIYT" />
        <meta
          property="og:description"
          content="MIYT is a cross platform desktop application. Download multiple videos at once, as video or audio. Search by URL or video names. Edit metadata of downloads. Change video selection from app"
        />
        <meta
          property="og:image"
          content="https://ipfs.io/ipfs/QmbZQufpYr1TjQLhwNPrTrQEW3f85Goc5Y6AoxkWGAMgsE?filename=useMiyt.png"
        />

        {/* <!-- Twitter --> */}
        {/* <meta property="twitter:card" content="summary_large_image"> */}
        {/* <meta property="twitter:url" content="https://metatags.io/"> */}
        {/* <meta property="twitter:title" content="MIYT"> */}
        {/* <meta property="twitter:description" content="MIYT is a cross platform desktop application. Download multiple videos at once, as video or audio. Search by URL or video names. Edit metadata of downloads. Change video selection from app"> */}
        {/* <meta property="twitter:image" content="/assets/useMiyt.png"> */}
      </Head>
      <div>
        <img
          className={c.patternBackground}
          draggable="false"
          src="../assets/pattern background.png"
          alt="MIYT"
        />
        <Navbar
          moreInfoClicked={() => scrollToMoreInfo()}
          downloadClicked={() => scrollToDownload()}
        />
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
          <div className={c.personContainer}>
            <Eyes />
            <img
              draggable="false"
              className={c.person}
              src="/assets/person.png"
              alt=":)"
            />
          </div>
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
