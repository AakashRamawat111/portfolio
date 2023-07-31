import React from 'react'
import css from './Hero.module.scss'
import {motion} from "framer-motion"
import { fadeIn, slideIn, staggerContainer } from '../../utils/motion'
const Hero = () => {
  return (
    
    <section className={` paddings ${css.wrapper}`}>
        <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={` innerWidth ${css.container}`}>
            <div className={css.upperElements}>
                <motion.span className='primaryText' variants={fadeIn("right", "tween", 0.2, 1)}>
                    Hey There, <br/> I'm Aakash.
                    </motion.span>
                <motion.span className='secondaryText' variants={fadeIn("left", "tween", 0.4, 1)}>
                    I develop Websites <br/> and I am DSA enthusiast.
                    </motion.span>
            </div>

            <motion.div className={css.person} variants={fadeIn("up", "tween", 0.3, 1)}>
                <motion.img variants={slideIn("up", "tween", 0.5, 1.3)} src="./extrapersoni.png" alt="" />
            </motion.div>

            <a href="mailto:aakash_r@ch.iitr.ac.in" className={css.email}>
                aakash_r@ch.iitr.ac.in
            </a>

            {/* lower elements */}
            <div className={css.lowerElements}>
                <motion.div className={css.experience} variants={fadeIn("right", "tween", 0.3, 1)}>
                    <div className='primaryText'>1</div>
                    <div className='secondaryText'>
                        <div>Year</div>
                        <div>Experience</div>
                    </div>
                </motion.div>
                <motion.div className={css.certificate} variants={fadeIn("left", "tween", 0.5, 1)}>
                     <img src="./certificate.png" alt="" />
                     <span>IIT ROORKEE</span>
                     <span>Final Year - BTech</span>
                </motion.div>
            </div>
        </motion.div>
    </section>
    
  )
}

export default Hero
