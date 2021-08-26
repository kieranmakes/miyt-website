import React from "react";
import c from "./Eyes.module.scss";

import useMightyMouse from "react-hook-mighty-mouse";

const Eyes = () => {
  const {
    selectedElement: {
      position: { angle: angleLeftEye },
    },
  } = useMightyMouse(true, "left-eye", { x: 4, y: 4 });
  const {
    selectedElement: {
      position: { angle: angleRightEye },
    },
  } = useMightyMouse(true, "right-eye", { x: 4, y: 4 });

  const rotateLeftEye = `rotate(${
    angleLeftEye != null ? -angleLeftEye : 0
  }deg)`;
  const rotateRightEye = `rotate(${
    angleRightEye != null ? -angleRightEye : 0
  }deg)`;
  return (
    <div className={c.eyesFollow}>
      <div className={c.eyes}>
        <div
          id="left-eye"
          className={c.eye}
          style={{ transform: rotateLeftEye }}
        >
          <div className={c.pupil}></div>
        </div>
        <div
          id="right-eye"
          className={c.eye}
          style={{ transform: rotateRightEye }}
        >
          <div className={c.pupil}></div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
