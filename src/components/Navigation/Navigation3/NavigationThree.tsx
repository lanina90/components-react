import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
// @ts-ignore
import styles from "./navigation.module.scss"
import {AiOutlineHome, AiOutlineMail} from "react-icons/ai";
import {BsPerson} from "react-icons/bs";
import {IoSettingsOutline} from "react-icons/io5";
import {HiOutlineVideoCamera} from "react-icons/hi2";


const NavigationThree = () => {
  const menuItems=[
    {icon: <AiOutlineHome/>, color: "#94a1d4", url: '#'},
    {icon: <BsPerson/>, color: "#2b3970",url: '#'},
    {icon: <IoSettingsOutline/>, color: "#569686",url: '#'},
    {icon: <AiOutlineMail/>, color: "#bcf0a5",url: '#'},
    {icon: <HiOutlineVideoCamera/>, color: "#c28da3",url: '#'},
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className={styles.navigation}>
      <ul>
        {menuItems.map(({icon, color, url}, index) => (
          <li
            style={{ '--clr': color } as React.CSSProperties}
            key={index}
            className={`${styles.list} ${activeIndex === index ? styles.active : ""}`}
            onClick={()=> setActiveIndex(index)}
          >
            <NavLink to={url}>
              <span className={styles.icon}>{icon}</span>
            </NavLink>
          </li>
        ))}
        <div className={styles.indicator}></div>
      </ul>
    </div>
  );
};

export default NavigationThree;