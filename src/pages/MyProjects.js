import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { pageAnimation, fade, photoAnim, lineAnim, slider, sliderContainer } from '../animation';
import { useScroll } from '../components/UseScroll';
import ScrollTop from '../components/ScrollTop';
// styled
import styled from 'styled-components';
// images
import meeting from '../img/meeting.jpg';
import blog from '../img/blog.jpg';
import boilerplate from '../img/boilerplate.jpg';


const MyProjects = () => {

    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();

    return (
        <Projects style={{ background: "#fff"}} variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <motion.div variants={sliderContainer}>
                <Frame1 variants={slider}></Frame1>
                <Frame2 variants={slider}></Frame2>
                <Frame3 variants={slider}></Frame3>
                <Frame4 variants={slider}></Frame4>
            </motion.div>
            <Project>
                <motion.h2 variants={fade}>Runetask</motion.h2>
                <motion.div variants={lineAnim} className="line">
                </motion.div>
                <Link to="/projects/runetask">
                    <Hide>
                        <motion.img variants={photoAnim} src={meeting} alt="meeting"/>
                    </Hide>
                </Link>
            </Project>
            <Project ref={element} variants={fade} initial="hidden" animate={controls}>
                <h2>Django Boilerplate</h2>
                <motion.div variants={lineAnim} className="line">
                </motion.div>
                <Link to="/projects/django-boilerplate">
                    <img src={boilerplate} alt="boilerplate"/>
                </Link>
            </Project>
            <Project ref={element2} variants={fade} initial="hidden" animate={controls2}>
                <h2>Personal Blog</h2>
                <motion.div variants={lineAnim} className="line">
                </motion.div>
                <Link to="/projects/blog">
                    <img src={blog} alt="good times"/>
                </Link>
            </Project>
            <ScrollTop />
        </Projects>
    )
}

const Projects = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    h2 {
        padding: 1rem 0rem;
    }
    @media (max-width: 768px) {
        padding: 0.75rem;
        h2 {
            text-align: center;
        }
    }
`;

const Project = styled(motion.div)`
    padding-bottom: 10rem;
    .line {
        height: 0.5rem;
        background: #23d997;
        margin-bottom: 3rem;
    }
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

const Hide = styled.div`
    overflow: hidden;
`;

// Frame Animation
const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background: #fffebf;
    z-index: 2;
`;

const Frame2 = styled(Frame1)`
    background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
    background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
    background: #8effa0;
`;

export default MyProjects;