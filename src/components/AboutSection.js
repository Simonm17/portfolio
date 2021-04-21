import { motion } from 'framer-motion';
import { titleAnimation, fade, photoAnim } from '../animation';
import styled from 'styled-components';
import { About, Description, Image, Hide } from '../styles';
import React from 'react';
import talgi from '../img/talgi.jpg';
import Wave from './Wave';
import { HashLink } from 'react-router-hash-link';

const AboutSection = () => {

    return (
        <About >
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>Hi there!</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>I'm <span>Ryan,</span> your go-to software developer.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>
                    <i class="fas fa-map-marker-alt"></i> Orange County, CA, USA
                </motion.p>
                <HashLink smooth to="/#faq"><Button variants={fade}>More About Me</Button></HashLink>
            </Description>
            <Image>
                <motion.img variants={photoAnim} initial="hidden" animate="show" src={talgi} alt="cute lil yorkie porkie"></motion.img>
            </Image>
            <Wave />
        </About>
    )
}

const Button = styled(motion.a)`
    font-family: 'Inter', sans-serif;
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    text-decoration: none;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    &:hover {
        background-color: #23d997;
        color: white;
    }
`;

export default AboutSection;