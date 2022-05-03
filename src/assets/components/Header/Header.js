import React, { useRef, useState, useEffect } from "react";
import logo from "../../images/logo.svg";
import downArrow from "../../images/icon-arrow-down.svg";
import upArrow from "../../images/icon-arrow-up.svg";
import todo from "../../images/icon-todo.svg";
import planning from "../../images/icon-planning.svg";
import reminders from "../../images/icon-reminders.svg";
import calendar from "../../images/icon-calendar.svg";
import Media from "react-media";
import "./Header.scss";

export default function Header() {
  const [featuresClicked, setFeaturesClicked] = useState(false);
  const [companyClicked, setCompanyClicked] = useState(false);
  const featuresDropdown = useRef(null);
  const companyDropdown = useRef(null);
  const featuresMenu = useRef(null);
  const companyMenu = useRef(null);

  const handleFeatureClick = () => {
    setFeaturesClicked(!featuresClicked);
    setCompanyClicked(false);
  };

  const handleCompanyClick = () => {
    setCompanyClicked(!companyClicked);
    setFeaturesClicked(false);
  };

  /**
   * Hook that alerts clicks outside of the passed ref
   */
  function useOutsideAlerter(ref, flag, menuRef, hideDropdownFcn) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (flag && ref.current && !ref.current.contains(event.target) && !menuRef.current.contains(event.target)) {
          hideDropdownFcn();
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, flag]);
  }

  useOutsideAlerter(featuresDropdown, featuresClicked, featuresMenu, () => setFeaturesClicked(false));
  useOutsideAlerter(companyDropdown, companyClicked, companyMenu, () => setCompanyClicked(false));

  return (
    <header>
      <img src={logo} className="logo-img" alt="logo" />
      <ul className="left">
        <li onClick={handleFeatureClick} ref={featuresMenu}>
          Features {featuresClicked ? <img src={upArrow} alt="up-arrow" className="arrow" /> : <img src={downArrow} alt="down-arrow" className="arrow" />}
        </li>
        <li onClick={handleCompanyClick} ref={companyMenu}>
          Company {companyClicked ? <img src={upArrow} alt="up-arrow" className="arrow" /> : <img src={downArrow} alt="down-arrow" className="arrow" />}
        </li>
        <li>Careers</li>
        <li>About</li>
      </ul>
      <ul className="right">
        <li>Login</li>
        <li>Register</li>
      </ul>

      <ul ref={featuresDropdown} className={`${featuresClicked ? "dropdown-visible" : "dropdown-hidden"} features-dropdown`}>
        <li>
          <img src={todo} alt="todo" />
          &nbsp;Todo List
        </li>
        <li>
          <img src={calendar} alt="calendar" />
          &nbsp;Calendar
        </li>
        <li>
          <img src={reminders} alt="reminders" />
          &nbsp;Reminders
        </li>
        <li>
          <img src={planning} alt="planning" />
          &nbsp;Planning
        </li>
      </ul>

      <ul ref={companyDropdown} className={`${companyClicked ? "dropdown-visible" : "dropdown-hidden"} company-dropdown`}>
        <li>History</li>
        <li>Our Team</li>
        <li>Blog</li>
      </ul>
    </header>
  );
}
