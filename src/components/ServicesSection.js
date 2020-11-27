import React from 'react';
// import styles
import styled from 'styled-components';
import { About, Description, Image, Hide } from '../styles';
// import icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';
import { useScroll } from './UseScroll';
import { fade } from '../animation';


const ServicesSection = () => {
    const [element, controls] = useScroll();
    return (
        <Services variants={fade} animate={controls} initial="hidden" ref={element}>
            <Description>
                <h2>Ryan's <span>Favorites</span></h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <i class="fab fa-python"></i>
                            <h3>Python</h3>
                        </div>
                        <p>
                            Easy to learn and perfect for self-teaching developers.
                        </p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <i class="fas fa-server"></i>
                            <h3>Django</h3>
                        </div>
                        <p>
                            Fast setup, good built-in security, and has ready-to-use features like class-based views.
                        </p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <i class="fab fa-react"></i>
                            <h3>React</h3>
                        </div>
                        <p>Fast, clean, and perfect for API integration.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <i class="fas fa-database"></i>
                            <h3>PostgreSQL</h3>
                        </div>
                        <p>Highly reliable and stable open source database.</p>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img src={home2} alt=""/>
            </Image>
        </Services>
    )
}

const Services = styled(About)`
    h2 {
        padding-bottom: 5rem;
    }
    p {
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 1300px) {
        justify-content: center;
    }
`;

const Card = styled.div`
    flex-basis: 20rem;
    .icon {
        display: flex;
        align-items: center;
    }
    .fas, .fab {
        font-size: 2.1rem;
    }
    .fa-python {
        color: #4B8BBE;
    }
    .fa-server {
        color: #23d997;
    }
    .fa-react {
        color: #61DBFB;
    }
    .fa-database {
        color: #008bb9;
    }
    h3 {
        margin-left: 1rem;
        background: white;
        color: black;
        padding: 1rem;
    }
`;

export default ServicesSection;