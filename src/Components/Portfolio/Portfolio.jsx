import React from 'react'
import css from './Portfolio.module.scss'
import {motion} from 'framer-motion'
import { fadeIn, staggerChildren } from '../../utils/motion'

const Portfolio = () => {
  return (
    <motion.section 
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>

        <a className="portfolio" id="portfolios"></a>

        <div className={`innerWidth flexCenter${css.container}`}>

            <div className={css.heading}>
                <div>
                    <span className='primaryText'>My Latest Works</span>
                    <p style={{ marginBottom:'10px'}}>Projects in Web Development </p>
                </div>
            </div>

            <div className={`flexCenter ${css.showCase}`}>
                <motion.img variants={fadeIn("up", "tween", .5, .6)} src="./showCase1.png" alt="project" />
                <motion.img variants={fadeIn("up", "tween", .7, .6)} src="./showCase2.png" alt="project" />
                <motion.img variants={fadeIn("up", "tween", .9, .6)} src="./showCase3.png" alt="project" />
            </div>

        </div>
    </motion.section>
  )
}

export default Portfolio
