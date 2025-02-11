import styled, { keyframes } from 'styled-components';

const gradientAnimation = keyframes`
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
`;

const shineAnimation = keyframes`
    0% { transform: translateX(-100%) rotate(45deg); }
    100% { transform: translateX(200%) rotate(45deg); }
`;

const StyledItem = styled.a`
    padding: 5px;
    width: 296px;
    height: 483px;
    border-radius: 20px;
    background: ${(props) => props.bg};
    background-size: 200% 200%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    font-weight: 700;
    color: white;
    text-align: center;
    text-decoration: none;
    animation: ${gradientAnimation} 5s ease infinite;
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;

    &::after {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: linear-gradient(
            45deg,
            rgba(255, 255, 255, 0) 30%,
            rgba(255, 255, 255, 0.2) 50%,
            rgba(255, 255, 255, 0) 70%
        );
        transform: rotate(45deg);
        animation: ${shineAnimation} 3s infinite;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    &:hover {
        animation: ${gradientAnimation} 2s ease infinite;
        transform: translateY(-10px);
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);

        &::after {
            opacity: 1;
            animation: ${shineAnimation} 1.5s infinite;
        }
    }
`;

export default function FacultiesItem({ children, bg, href }) {
    return (
        <StyledItem bg={bg} href={href}>
            {children.toUpperCase()}
        </StyledItem>
    );
}