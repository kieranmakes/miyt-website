import React, { useState } from "react";
import c from "./TitleBanner.module.scss";

interface Props {
  children: any;
  right?: boolean;
  accentColor: "yellow" | "red" | "green";
}
function TitleBanner(props: Props) {
  let style = props.right
    ? [c.titleBanner, c.floatRight, c[props.accentColor]].join(" ")
    : [c.titleBanner, c[props.accentColor]].join(" ");

  return <div className={style}>{props.children}</div>;
}

export default TitleBanner;
