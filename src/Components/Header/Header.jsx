import React, { useRef, useState } from 'react'
import css from './Header.module.scss'
import {BiMenuAltRight, BiPhoneCall} from 'react-icons/bi'
import {motion} from 'framer-motion'
import { getMenuStyles, headerVariants } from '../../utils/motion'
import useHeaderShadow from '../../hooks/useHeaderShadow'
import useOutsideAlerter from '../../hooks/useOutsideAlerter'

const Header = () => {

  const [menuOpened, setMenuOpened] =useState(false);
  const headerShadow = useHeaderShadow();
  const menuRef= useRef();

  useOutsideAlerter(
    {
      menuRef,
      setMenuOpened
    }
  )

  return (
    <motion.div 
    initial= "hidden"
    whileInView= "show"
    variants={headerVariants}
    viewport={{once: false, amount:0.25}}
    className={`paddings ${css.wrapper}`}
    style={{boxShadow: headerShadow}}
    >
      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.name}>
          Aakash Ramawat
        </div>

        <div className={css.menuIcon}
        onClick={()=>setMenuOpened((prev)=> !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>

        <ul 
        ref={menuRef}
        style={getMenuStyles(menuOpened)}
        className={`flexCenter ${css.menu}`}>
          <li><a href="#experties">About  Me</a></li>
          <li><a href="#works">Experience</a></li>
          <li><a href="#portfolios">Projects</a></li>
          <li className= {` flexCenter ${css.phone}`}>
            <p>+91 70148 39820</p>
            <BiPhoneCall size={"40px"} />
          </li>
        </ul>

        

      </div>
    </motion.div>
  )
}

export default Header
