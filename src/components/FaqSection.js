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
            <h2>You got Q's, I got A's. </h2>
            <span>FAQ</span>
            <AnimateSharedLayout>
                <Toggle title='"Tell me a little bit about yourself!"'>
                    <div className="answer">
                        <p>
                            I am an aspiring professional software developer with a background in political science and civil law.
                            I mostly program in Python to make websites, but I also enjoy building code in HTML, CSS, and JavaScript.
                            In my spare time outside of learning software development, I love playing MMO's and FPS, hiking outdoors, and spending time with my beloved yorkie.
                        </p>
                    </div>
                </Toggle>
                <Toggle title='"What kind of websites do you make?"'>
                    <div className="answer">
                        <p>
                            Currently, my focus of web development is around creating task management-based software that assists with bookkeeping, scheduling, and to-do lists.
                            You can check out my projects <Link to="/projects">here</Link>.
                        </p>
                    </div>
                </Toggle>
                <Toggle title='"What services can you provide for me?"'>
                    <div className="answer">
                        <p>
                            My services include but are not limited to creating simple portfolios, fetching data with webscraping or API's, and host dynamic websites on the web.
                            Feel free to reach me by <Link to="/contact">email or social media!</Link>
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
        @media (max-width: 768px) {
            width: 90%;
        }
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
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
        padding: 0rem 0.5rem;
        h2 {
            padding-bottom: 0;
            display: none;
        }
        span {
                display: block;
                font-size: 2rem;
                text-align: center;
        }
        .faq-line {
            margin: 0;
        }
        .answer {
            padding-top: 0rem;
            p {
                padding-right: 0rem;
            }
        }
        .question {
            padding: 0;
        }
        span {
            text-align: center;
        }
    }
`;

export default FaqSection;