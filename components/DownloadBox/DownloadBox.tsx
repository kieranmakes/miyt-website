import React, { useState } from "react";
import c from "./DownloadBox.module.scss";

function DownloadBox() {
  return (
    <div className={c.downloadBox}>
      <div className={c.downloadBtn}>
        <a
          href="https://dl.dropboxusercontent.com/s/1oeih5u7as4wjgq/MIYT-1.0.0.dmg?dl=0"
          // target="_blank"
        >
          Mac OS
        </a>
        <div className={c.hrRed}></div>
      </div>
      <div className={c.downloadBtn}>
        <a
          href="https://dl.dropboxusercontent.com/s/xs3ta8vxsn65up3/MIYT%20Setup%201.0.0.exe?dl=0"
          target=""
        >
          Windows
        </a>
        <div className={c.hrYellow}></div>
      </div>
      <div className={c.downloadBtn}>Linux</div>
    </div>
  );
}

export default DownloadBox;
