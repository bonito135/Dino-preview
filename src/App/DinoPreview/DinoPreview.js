import React, { useEffect, useRef } from "react";
import "./DinoPreview.scss";

import { useHistory } from "react-router-dom";

// 3D
import { World } from "../../3D/World/World";

export default function DinoPreview() {
  const history = useHistory();
  const returnToHomepage = () => {
    history.push("/");
  };

  const containerFor3D = useRef();

  useEffect(() => {
    const currentContainerFor3D = containerFor3D.current;
    const world = new World(currentContainerFor3D);

    world.init();
    world.start();

    return () => {
      world.stop();
    };
  }, []);

  return (
    <div className="dinoPreview">
      <div className="infoBlock">
        <div className="upperInfoBlock">
          <img
            onClick={returnToHomepage}
            src="images/back.png"
            alt="backArrow"
          ></img>
        </div>

        <div className="middleInfoBlock">
          <h4 className="infoBlockHeading">Bio</h4>
          <p className="infoBlockText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            facilisis ac leo nec vulputate. Nunc semper dui lacus, a viverra est
            eleifend vel. Pellentesque vel mattis dui. Nullam velit nulla,
            mattis vel auctor at, pulvinar a velit. Pellentesque sagittis sapien
            eu arcu mollis vulputate. Ut nisl sem, tempus nec laoreet et,
            tincidunt et velit.
          </p>
        </div>

        <div className="bottomInfoBlock">
          <img src="images/back.png" alt="backArrow"></img>
          <img src="images/forward.png" alt="forwardArrow"></img>
        </div>
      </div>

      <div className="block3D">
        <div ref={containerFor3D} className="container"></div>
        <img src="images/rotate360.png" alt="360rotate"></img>
      </div>
    </div>
  );
}
