import React, { useState } from "react";
import c from "./DownloadBox.module.scss";

function DownloadBox() {
  return (
    <div className={c.downloadBox}>
      <a
        className={c.downloadBtn}
        href="https://dl.dropboxusercontent.com/s/0fpzbkq2llb5zrh/MIYT-1.0.0.dmg?dl=0"
        target=""
      >
        Mac OS
      </a>
      <div className={c.hrRed}></div>
      <a
        className={c.downloadBtn}
        href="https://dl.dropboxusercontent.com/s/0ft2d5bm6rqjmsf/MIYT%20Setup%201.0.0.exe?dl=0"
        target=""
      >
        Windows
      </a>
      <div className={c.hrYellow}></div>
      <a
        className={c.downloadBtn}
        href="https://dl.dropboxusercontent.com/s/h51xogqlmsy6owr/miyt_1.0.0_amd64.snap?dl=0"
        target=""
      >
        Linux
      </a>
    </div>
  );
}

export default DownloadBox;
