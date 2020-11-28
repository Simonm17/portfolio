import React from 'react';
import { motion } from 'framer-motion';
import { pageAnimation, titleAnimation } from '../animation';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';
import talgi2 from '../img/talgi2.jpg';
import { photoAnim } from '../animation';

const ContactUs = () => {
    return (
        <ContactStyle
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
            style={{ background: '#fff' }}
        >
            <ReactTooltip />
            <div>
                <Title>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>
                            Let's stay in touch.
                        </motion.h2>
                    </Hide>
                </Title>
                <div>
                    <Hide>
                        <Social variants={titleAnimation}>
                            <a class="mail" href="mailto:ryanchuung@gmail.com" target="_blank" data-tip="ryanchuung@gmail.com"><i class="fas fa-mail-bulk"></i></a>
                            <a class="pdf" href="resume.pdf" target="_blank"><i class="fas fa-file-pdf"></i></a>
                        </Social>
                    </Hide>
                    <Hide>
                        <Social variants={titleAnimation}>
                            <a class="github" href="https://github.com/simonm17" target="_blank"><i class="fab fa-github"></i></a>
                            <a class="stack" href="https://stackoverflow.com/users/12266621/rython" rel="nonreferrer" target="_blank"><i class="fab fa-stack-overflow"></i></a>
                        </Social>
                    </Hide>
                    <Hide>
                        <Social variants={titleAnimation}>
                            <a class="discord" data-tip="Tuna#3900"><i class="fab fa-discord main-i"></i></a>
                            <a class="instagram" href="https://www.instagram.com/ryanchuung/" rel="nonreferrer" target="_blank"><i class="fab fa-instagram"></i></a>
                        </Social>
                    </Hide>
                </div>
            </div>

                <Img variants={photoAnim} initial="hidden" animate="show" src={talgi2} alt="lane" />
            
        </ContactStyle>
    )
}

const ContactStyle = styled(motion.div)`
    padding: 5rem 10rem;
    color: #353535;
    min-height: 90vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Title = styled.div`
    margin-bottom: 4rem;
    color: black;
`;

const Hide = styled.div`
    overflow: hidden;
`;

const Circle = styled.div`
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    background: #353535;
`;

const Img = styled(motion.img)`
    height: 70vh;
    width: 50%;
    object-fit: cover;

    @media (max-width: 768px) {
        display: none;
    }
`;

const Social = styled(motion.div)`
    display: flex;
    align-items: center;
    h2 {
        margin: 2rem;
    }
    a {
        margin: 2rem;
        font-size: 4.5rem;
    }
    .mail {
        color: lightblue;
    }
    .pdf {
        color: rgb(199, 0, 0);
    }
    .github {
        color: rgb(206, 206, 206);
    }
    .stack {
        color: #ef8236;
    }
    .discord {
        color: #7289da
    }
    .instagram {
        background: -webkit-linear-gradient(#405DE6, #833AB4, #C13584, #FD1D1D, #F77737, #FFDC80);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;

export default ContactUs;