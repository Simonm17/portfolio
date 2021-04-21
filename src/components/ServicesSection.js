import React from 'react';
// import styles
import styled from 'styled-components';
import { About, Description, Image } from '../styles';
// import icons
import home2 from '../img/home2.png';
import { useScroll } from './UseScroll';
import { fade } from '../animation';


const ServicesSection = () => {
    // const [element, controls] = useScroll();
    return (
        // <Services variants={fade} animate={controls} initial="hidden" ref={element}>
        <Services >
            <Description>
                <h2>Ryan's Favorite <span>Developer Tools</span></h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <i class="fab fa-python"></i>
                            <h3>Python</h3>
                        </div>
                        <p>Versatile & eloquent.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <i class="fas fa-server"></i>
                            <h3>Django</h3>
                        </div>
                        <p>Secure & reliable.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <i class="fab fa-react"></i>
                            <h3>React</h3>
                        </div>
                        <p>Fun & stateful!</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <i class="fas fa-database"></i>
                            <h3>PostgreSQL</h3>
                        </div>
                        <p>Free & flexible!</p>
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
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 768px) {
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
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export default ServicesSection;