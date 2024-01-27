/* About.jsx, Kenta Yamada, 301366037, 2024/01/27 */

import {
  grid,
  gridItem,
  myName,
  slogan,
  description,
  downloadBtn,
} from "./About.module.css";
import Selfie from "../assets/selfie.jpg";
import Resume from "../assets/resume.pdf";

export default function About() {
  return (
    <>
      <h1>About Me</h1>
      <div className={grid}>
        <div className={gridItem}>
          <img src={Selfie} alt="Kenta Yamada" width="400" />
        </div>
        <div className={gridItem}>
          <div>
            <h1 className={myName}>Kenta Yamada</h1>
            <h2 className={slogan}>Front-end Developer</h2>
            <h3 className={description}>
              I design and develop experiences that make people's lives simpler
              through Web and Mobile apps. I work with Figma, HTML5, CSS3,
              JavaScript, React, ReactNative and Flutter.
            </h3>
            <a href={Resume} download="Kenta Yamada Resume">
              <button className={downloadBtn}>
                <i className="fa fa-download" /> Download Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
