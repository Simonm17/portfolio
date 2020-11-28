import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { MovieState } from '../movieState';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const ProjectDetail = () => {
    const history = useHistory();
    const url = history.location.pathname;

    const [projects, setProjects] = useState(MovieState);
    const [project, setProject] = useState(null);

    useEffect(
        () => {
            const currentProject = projects.filter((stateProject) => 
                stateProject.url === url
            )
            setProject(currentProject[0]);
        }, [projects, url]
    )

    return (
        <>
        {project && (
            <Details variants={pageAnimation} initial="hidden" animate="show" exit="exit">
                <HeadLine>
                    <h2>{project.title}</h2>
                    <img src={project.mainImg} alt="project" />
                </HeadLine>
                <Features>
                    {project.infos.map( info => (
                        <Feature
                            title={info.title}
                            description={info.description}
                            key={info.tite}
                        />
                    ))}
                </Features>
                <Github href={project.link} target="_blank" rel="nonreferrer">View code <i class="fas fa-code-branch"></i></Github>
                <ImageDisplay>
                    <img src={project.secondaryImg} alt="project" />
                </ImageDisplay>
            </Details>
        )}
        </>
    )
}

const Details = styled(motion.div)`
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const HeadLine = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h2 {
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%);
    }
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19); 
    }
`;

const Features = styled.div`
    min-height: 80vh;
    display: flex;
    margin: 5rem 5rem 0rem 5rem;
    align-items: center;
    justify-content: space-around;
    @media (max-width: 1200px) {
        display: block;
        margin: 2rem 2rem;
    }
`;

const FeatureStyle = styled.div`
    padding: 5rem;
    h3 {
        font-size: 2rem;
    }
    .line {
        width: 80%;
        background: #23d997;
        height: 0.3rem;
        margin: 1rem 0rem;
    }
    p {
        padding: 2rem 0rem;
    }
`;

const Feature = ({ title, description }) => {
    return (
        <FeatureStyle>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </FeatureStyle>
    )
}

const ImageDisplay = styled.div`
    min-height: 50vh;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const Github = styled.a`
    color: white;
    text-decoration: none;
    font-size: 3rem;
    border: transparent;
    border-radius: 5px;
    margin: -2rem 0 10rem 0;
`;

export default ProjectDetail;