import { Link } from "react-router-dom";
import {
  name,
  githubIcon,
  grid,
  gridItem,
  statement,
  greeting,
  subtitle,
  aboutMeBtn,
  iconBtn,
  wave,
} from "./Home.module.css";

export default function Home() {
  return (
    <div className={grid}>
      <div className={gridItem}>
        <div>
          <h1 className={greeting}>
            <span className={wave}>👋</span>
            Hey! My name is <span className={name}>Kenta.</span>
          </h1>
          <p className={subtitle}>Welcome to my Portfolio!</p>
        </div>
      </div>
      <div className={gridItem}>
        <p className={statement}>
          As a front-end developer, I will create engaging user experiences
          through elegant design and innovative technology.
        </p>
      </div>
      <div className={gridItem}>
        <Link to="/about">
          <button className={aboutMeBtn}>
            <span>About Me</span>
          </button>
        </Link>
      </div>
      <div className={gridItem}>
        <a
          target="_blank"
          href="https://github.com/kentayamada-centennial/comp229-assignment1"
        >
          <button className={iconBtn}>
            <i className={`fa fa-github ${githubIcon}`} />
          </button>
        </a>
      </div>
    </div>
  );
}
