import React from "react";
import "./Homepage.scss";

import { useHistory } from "react-router-dom";

export default function Homepage() {
  const history = useHistory();
  const redirectToPreview = () => {
    history.push("/preview");
  };

  return (
    <div className="homepage">
      <div className="textPart">
        <h1 className="headingText">Dinosaur previews</h1>
      </div>

      <div className="previewsPart">
        <div className="previewsList">
          <div className="previewExample" onClick={redirectToPreview}>
            <h2 className="previewDinoNameText">Tyrannosaurus Rex</h2>
            <img
              className="previewDinoImage"
              src="images/tyrannosaurus_rex.png"
              alt="t-rex"
            ></img>
            <p className="previewDinoInfoText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              laoreet augue in neque feugiat, sed hendrerit nisl maximus. Etiam
              vel neque bibendum, volutpat leo eu, pretium turpis. Etiam a
              vulputate ipsum, vel gravida urna.
            </p>
          </div>

          <div className="previewExample" onClick={redirectToPreview}>
            <h2 className="previewDinoNameText">Tyrannosaurus Rex</h2>
            <img
              className="previewDinoImage"
              src="images/tyrannosaurus_rex.png"
              alt="t-rex"
            ></img>
            <p className="previewDinoInfoText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              laoreet augue in neque feugiat, sed hendrerit nisl maximus. Etiam
              vel neque bibendum, volutpat leo eu, pretium turpis. Etiam a
              vulputate ipsum, vel gravida urna.
            </p>
          </div>

          <div className="previewExample" onClick={redirectToPreview}>
            <h2 className="previewDinoNameText">Tyrannosaurus Rex</h2>
            <img
              className="previewDinoImage"
              src="images/tyrannosaurus_rex.png"
              alt="t-rex"
            ></img>
            <p className="previewDinoInfoText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              laoreet augue in neque feugiat, sed hendrerit nisl maximus. Etiam
              vel neque bibendum, volutpat leo eu, pretium turpis. Etiam a
              vulputate ipsum, vel gravida urna.
            </p>
          </div>

          <div className="previewExample" onClick={redirectToPreview}>
            <h2 className="previewDinoNameText">Tyrannosaurus Rex</h2>
            <img
              className="previewDinoImage"
              src="images/tyrannosaurus_rex.png"
              alt="t-rex"
            ></img>
            <p className="previewDinoInfoText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              laoreet augue in neque feugiat, sed hendrerit nisl maximus. Etiam
              vel neque bibendum, volutpat leo eu, pretium turpis. Etiam a
              vulputate ipsum, vel gravida urna.
            </p>
          </div>

          <div className="previewExample" onClick={redirectToPreview}>
            <h2 className="previewDinoNameText">Tyrannosaurus Rex</h2>
            <img
              className="previewDinoImage"
              src="images/tyrannosaurus_rex.png"
              alt="t-rex"
            ></img>
            <p className="previewDinoInfoText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              laoreet augue in neque feugiat, sed hendrerit nisl maximus. Etiam
              vel neque bibendum, volutpat leo eu, pretium turpis. Etiam a
              vulputate ipsum, vel gravida urna.
            </p>
          </div>

          <div className="previewExample" onClick={redirectToPreview}>
            <h2 className="previewDinoNameText">Tyrannosaurus Rex</h2>
            <img
              className="previewDinoImage"
              src="images/tyrannosaurus_rex.png"
              alt="t-rex"
            ></img>
            <p className="previewDinoInfoText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              laoreet augue in neque feugiat, sed hendrerit nisl maximus. Etiam
              vel neque bibendum, volutpat leo eu, pretium turpis. Etiam a
              vulputate ipsum, vel gravida urna.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
