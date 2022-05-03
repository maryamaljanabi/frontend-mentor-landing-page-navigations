import React, { useRef, useState, useEffect } from "react";
import menu from "../../images/icon-menu.svg";
import closeMenu from "../../images/icon-close-menu.svg";
import logo from "../../images/logo.svg";
import downArrow from "../../images/icon-arrow-down.svg";
import upArrow from "../../images/icon-arrow-up.svg";
import todo from "../../images/icon-todo.svg";
import planning from "../../images/icon-planning.svg";
import reminders from "../../images/icon-reminders.svg";
import calendar from "../../images/icon-calendar.svg";
import "./MobileMenu.scss";

export default function MobileMenu() {
  const [menuActive, setMenuActive] = useState(false);
  const [featuresClicked, setFeaturesClicked] = useState(false);
  const [companyClicked, setCompanyClicked] = useState(false);
  const featuresDropdown = useRef(null);
  const companyDropdown = useRef(null);
  const featuresMenu = useRef(null);
  const companyMenu = useRef(null);

  const handleFeatureClick = () => {
    setFeaturesClicked(!featuresClicked);
  };

  const handleCompanyClick = () => {
    setCompanyClicked(!companyClicked);
  };

  const menuClickHandler = () => {
    setMenuActive(!menuActive);
  };
  return (
    <header className="header-mobile">
      <div className="top-bar">
        <div className={`${menuActive ? "display" : "hide"} dimmer`}></div>
        <img src={logo} className="logo-img" alt="logo" />
        <img onClick={menuClickHandler} src={menuActive ? closeMenu : menu} className="menu" alt="menu" />
      </div>
      <div className={`${menuActive ? "display" : "hide"} dropdown-container`}>
        <ul className="top">
          <li onClick={handleFeatureClick} ref={featuresMenu}>
            Features {featuresClicked ? <img src={upArrow} alt="up-arrow" className="arrow" /> : <img src={downArrow} alt="down-arrow" className="arrow" />}
            {featuresClicked && (
              <ul ref={featuresDropdown} className={`${featuresClicked ? "display" : "hide"} sub-menu`}>
                <li>
                  <img src={todo} alt="todo" />
                  Todo List
                </li>
                <li>
                  <img src={calendar} alt="calendar" />
                  Calendar
                </li>
                <li>
                  <img src={reminders} alt="reminders" />
                  Reminders
                </li>
                <li>
                  <img src={planning} alt="planning" />
                  Planning
                </li>
              </ul>
            )}
          </li>
          <li onClick={handleCompanyClick} ref={companyMenu}>
            Company {companyClicked ? <img src={upArrow} alt="up-arrow" className="arrow" /> : <img src={downArrow} alt="down-arrow" className="arrow" />}
            {companyClicked && (
              <ul ref={companyDropdown} className={`${companyClicked ? "display" : "hide"} sub-menu`}>
                <li>History</li>
                <li>Our Team</li>
                <li>Blog</li>
              </ul>
            )}
          </li>
          <li>Careers</li>
          <li>About</li>
        </ul>
        <ul className="bottom">
          <li>Login</li>
          <li>Register</li>
        </ul>
      </div>
    </header>
  );
}
