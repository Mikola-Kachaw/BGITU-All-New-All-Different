import styled from 'styled-components';

const StyledButton = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 148px;
    height: 48px;
    border-radius: 8px;
    border: none;
    font-size: 20px;
    font-weight: 700;
    color: white;
    cursor: pointer;
    background-color: ${(props) => props.bg || '#838383'};
    transition: opacity 0.3s ease;

    &:hover {
        opacity: 0.8;
    }
    
    &:active {
        transform: scale(0.95);
        transition: all 0.2s;
    }
`;

export default function ButtonCard({children, bg, href}) {
    return (
        <>
            <StyledButton bg={bg} href={href}>{children}</StyledButton>
        </>
    )
}