/* Layout.jsx, Kenta Yamada, 301366037, 2024/01/27 */

import NavigationBar from "./NavigationBar";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Services from "./Services";
import Contact from "./Contact";
import { Routes, Route } from "react-router-dom";
import { header, main } from "./Layout.module.css";

export default function Layout() {
  return (
    <>
      <header className={header}>
        <NavigationBar />
      </header>
      <main className={main}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}
