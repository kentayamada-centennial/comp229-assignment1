/* NavigationBar.jsx, Kenta Yamada, 301366037, 2024/01/27 */

import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { navBar, list } from "./NavigationBar.module.css";

export default function NavigationBar() {
  return (
    <div className={navBar}>
      <Link to="/">
        <img src={Logo} height="50" alt="Logo" />
      </Link>
      <nav>
        <ul className={list}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
