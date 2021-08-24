import React, { useState } from "react";
import c from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={c.navbar}>
      <img
        className={c.logo}
        draggable="false"
        src="../assets/logo.svg"
        alt="MIYT"
      />
      <div className={c.navItems}>
        <p className={c.navItem}>Learn More</p>
        <p className={[c.downloadNavItem, c.navItem].join(" ")}>Download</p>
      </div>
    </div>
  );
};

export default Navbar;
