import React, { useState } from "react";
import c from "./Footer.module.scss";

function Footer() {
  return (
    <div className={c.footer}>
      <a href="https://github.com/kieranmakes" target="_blank">
        <img
          src="/assets/github.png"
          draggable={false}
          alt=""
          className={c.githubLogo}
        />
      </a>
      <div className={c.cryptoContainer}>
        <div className={c.cryptoInnerContainer}>
          <img src="/assets/eth.png" alt="eth" className={c.ethImg} />
          <p>ETH: 0x60d232F4a4f465175EDAe1626Da3898166Ab1307</p>
        </div>
      </div>
      <img src="/assets/kw logo.png" alt="kw" className={c.kwlogo} />
      <div className={c.bottomFooter}>
        <strong className={c.crSymbol}>©</strong> 2021 MIYT. All rights
        reserved.
      </div>
    </div>
  );
}

export default Footer;
