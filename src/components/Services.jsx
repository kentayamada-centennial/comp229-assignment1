import { cardBody, cardHeader, cardTitle, cardImage, grid, gridItem } from "./Services.module.css";
import Framework from "../assets/framework.png";
import Performance from "../assets/performance.png";
import Responsive from "../assets/responsive.png";
import Accessibility from "../assets/accessibility.png";

export default function Services() {
  return (
    <>
      <h1>Services I provide...</h1>
      <div className={grid}>
        <div className={gridItem}>
          <div className={cardHeader}>
            <p className={cardTitle}>Responsive Web Design</p>
            <img src={Responsive} className={cardImage} />
          </div>
          <div className={cardBody}>
            <p>I specialize in creating visually appealing and user-friendly websites that look great on all devices, from desktops to mobile phones.</p>
          </div>
        </div>
        <div className={gridItem}>
          <div className={cardHeader}>
            <p className={cardTitle}>Framework Expertise</p>
            <img src={Framework} className={cardImage} />
          </div>
          <div className={cardBody}>
            <p>I am proficient in utilizing front-end frameworks such as React, Angular, and Vue.js to build dynamic and interactive user interfaces, enabling the development of modern, feature-rich web applications.</p>
          </div>
        </div>
        <div className={gridItem}>
          <div className={cardHeader}>
            <p className={cardTitle}>Performance Optimization</p>
            <img src={Performance} className={cardImage} />
          </div>
          <div className={cardBody}>
            <p>I am experienced in optimizing front-end code and assets to ensure fast load times and smooth performance, ultimately enhancing the overall speed and efficiency of websites and web applications.</p>
          </div>
        </div>
        <div className={gridItem}>
          <div className={cardHeader}>
            <p className={cardTitle}>Accessibility Implementation</p>
            <img src={Accessibility} className={cardImage} />
          </div>
          <div className={cardBody}>
            <p>I prioritize making websites accessible to all users, including those with disabilities, by following best practices and standards.</p>
          </div>
        </div>
      </div>
    </>
  )
}
