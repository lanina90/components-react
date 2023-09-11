import React, {useState} from 'react';
import {IoCloseOutline, IoGameControllerOutline, IoSettingsOutline} from "react-icons/io5";
import {AiOutlineHome, AiOutlineMail} from "react-icons/ai";
import {BsCamera, BsPerson} from "react-icons/bs";
import {HiOutlineVideoCamera} from "react-icons/hi2";
import {GoKey} from "react-icons/go";
// @ts-ignore
import styles from "./navigation.module.scss"
import {NavLink} from "react-router-dom";

const NavigationTwo = () => {

  const menuItems = [
    {icon: <AiOutlineHome/>, url: '#'},
    {icon: <BsPerson/>, url: '#'},
    {icon: <IoSettingsOutline/>, url: '#'},
    {icon: <AiOutlineMail/>, url: '#'},
    {icon: <HiOutlineVideoCamera/>, url: '#'},
    {icon: <GoKey/>, url: '#'},
    {icon: <IoGameControllerOutline/>, url: '#'},
    {icon: <BsCamera/>, url: '#'},
  ]
  const [isActive, setIsActive] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const handleClick = (index: number) => {
    setActiveIndex(index);
  }

  return (
    <div>
      <ul className={`${styles.menu} ${isActive ? styles.active : ''}`}>
        <div className={`${styles.toggle} ${isActive ? styles.active : ''}`} onClick={()=> setIsActive(!isActive)}><IoCloseOutline/></div>
        {menuItems.map(({ icon, url }, index) => (
          <li key={index}  style={{ '--i': index } as React.CSSProperties} onClick={() => handleClick(index)}  className={`${activeIndex === index ? styles.active : ''}`}>
            <NavLink to={url}>
              <span className={styles.icon}>{icon}</span>
            </NavLink>
          </li>
          ))
        }

        <div className={styles.indicator}>
        </div>
      </ul>
    </div>
  );
};

export default NavigationTwo;