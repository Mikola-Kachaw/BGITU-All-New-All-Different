import styled from 'styled-components';

const StyledItem = styled.a`
    padding: 5px;
    width: 296px;
    height: 483px;
    border-radius: 20px;
    background-image: ${(props) => props.bg || 'radial-gradient(circle, red, red)'};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    font-weight: 700;
    color: white;
    text-align: center;
    text-decoration: none;
`;

export default function FacultiesItem({children, bg, href}) {
    return (
        <>
            <StyledItem bg={bg} href={href}>
                {children.toUpperCase()}
            </StyledItem>
        </>
    )
}