import React, { useState } from "react";
import c from "./Navbar.module.scss";

interface Props {
  moreInfoClicked: () => void;
  downloadClicked: () => void;
}

const Navbar = (props: Props) => {
  return (
    <div className={c.navbar}>
      <img
        className={c.logo}
        draggable="false"
        src="../assets/logo.svg"
        alt="MIYT"
      />
      <div className={c.navItems}>
        <p
          onClick={() => props.moreInfoClicked()}
          className={[c.navItem, c.underline].join(" ")}
        >
          Learn More
        </p>
        <p
          onClick={() => props.downloadClicked()}
          className={[c.downloadNavItem, c.navItem].join(" ")}
        >
          Download
        </p>
      </div>
    </div>
  );
};

export default Navbar;
