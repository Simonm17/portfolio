import { motion } from 'framer-motion';
import { titleAnimation, fade, photoAnim } from '../animation';
import styled from 'styled-components';
import { About, Description, Image, Hide } from '../styles';
import React from 'react';
import home1 from '../img/home1.png';
import Wave from './Wave';


const AboutSection = () => {

    return (
        <About >
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>your <span>dreams</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>true.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>Contact us for any photography or videography ideas that you have.
                    We have professionals with amazing skills.
                </motion.p>
                <motion.button variants={fade}>Contact Us</motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnim} initial="hidden" animate="show" src={home1} alt="home camera guy"></motion.img>
            </Image>
            <Wave />
        </About>
    )
}

export default AboutSection;