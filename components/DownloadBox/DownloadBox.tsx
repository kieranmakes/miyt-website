import React, { useState } from "react";
import c from "./DownloadBox.module.scss";

function DownloadBox() {
  return (
    <div className={c.downloadBox}>
      <div className={c.downloadBtn}>
        Mac OS
        <div className={c.hrRed}></div>
      </div>
      <div className={c.downloadBtn}>
        Windows
        <div className={c.hrYellow}></div>
      </div>
      <div className={c.downloadBtn}>Linux</div>
    </div>
  );
}

export default DownloadBox;
