import styled from 'styled-components';
import { motion } from 'framer-motion';


export const About = styled(motion.div)`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
    @media (max-width: 768px) {
        padding: 0;
        img {
            display: none;
        }
        justify-content: center;
    }
`;

export const Description = styled.div`
    flex: 1;
    padding-right: 5rem;
    h2 {
        font-weight: lighter;
    }
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0;
        text-align: center;
    }
`;

export const Image = styled.div`
    flex: 1;
    overflow: hidden;
    img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
    @media (max-width: 768px) {
        flex: 0;
    }
`;

export const Hide = styled.div`
    overflow: hidden;
`;