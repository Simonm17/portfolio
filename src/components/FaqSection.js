import React from 'react';
import styled from 'styled-components';
import { About } from '../styles';
import Toggle from './Toggle';
import { AnimateSharedLayout } from 'framer-motion';
import { useScroll } from './UseScroll';
import { fade } from '../animation';
import { Link } from 'react-router-dom';

const FaqSection = () => {
    const [element, controls] = useScroll();
    return (
        <Faq id="faq" variants={fade} animate={controls} initial="hidden" ref={element}>
            <h2>You got Q's, I got A's. <span>FAQ</span></h2>
            <AnimateSharedLayout>
                <Toggle title='"Tell me a little bit about yourself!"'>
                    <div className="answer">
                        <p>
                            I am an aspiring software developer with a background in political science and civil law.
                            My favorite activities are going for walks in the park, eating delicious food, and spending time with my beloved yorkie.
                        </p>
                    </div>
                </Toggle>
                <Toggle title='"What do you usually code?"'>
                    <div className="answer">
                        <p>
                            I am currently honing my skills to create awesome websites for companies and individuals using Python and JavaScript.
                            I also have plans to learn advanced data science with Python and R in the near future.
                        </p>
                    </div>
                </Toggle>
                <Toggle title='"When did you start coding?"'>
                    <div className="answer">
                        <p>
                            I was introduced to programming in late 2018 through my interest in videogames and game development.
                            I started to learn code for professional aspirations towards the end of 2019.
                        </p>
                    </div>
                </Toggle>
                <Toggle title='"May I see some of your projects?"'>
                    <div className="answer">
                        <p>
                            Absolutely! You can check out my work in my <Link to="/projects">project page</Link>.
                        </p>
                    </div>
                </Toggle>
            </AnimateSharedLayout>
        </Faq>
    )
}

const Faq = styled(About)`
    display: block;
    span {
        display: block;
    }
    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    a {
        color: #23d997;
        text-decoration: none;
        font-size: 1.5rem;
    }
    .faq-line {
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question {
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer {
        padding: 2rem 0rem;
        p {
            padding: 1rem 0rem;
        }
    }
`;

export default FaqSection;