import React from 'react'
import { footerVariants, staggerChildren } from "../utils/motion";
import css from './Footer.module.scss'
import {motion} from 'framer-motion'

const Footer = () => {
  return (
    <motion.section 
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
       
       <motion.div 
       variants={footerVariants}
       className={`yPaddings innerWidth flexCenter ${css.container}`}>

       
            <div className={css.left}>
                <span className='primaryText'>Lets build something <br/> together.</span>
                <span className='primaryText'>
                    Catchup with <a href='mailto:aakash_r@ch.iitr.ac.in'>Me!</a>
                </span>
            </div>
            <div className={css.right}>
                <div className={css.info}>
                    <p>Contact: 7014839820</p>
                    <p>Location: IIT Roorkee</p>
                </div>
            </div>

        </motion.div>
    </motion.section>
  )
}

export default Footer
