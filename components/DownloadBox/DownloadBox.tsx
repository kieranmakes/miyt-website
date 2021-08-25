import React, { useState } from "react";
import c from "./DownloadBox.module.scss";

function DownloadBox() {
  return (
    <div className={c.downloadBox}>
      <div className={c.downloadBtn}>Mac OS</div>
      <div className={c.downloadBtn}>Windows</div>
      <div className={c.downloadBtn}>Linux</div>
    </div>
  );
}

export default DownloadBox;
