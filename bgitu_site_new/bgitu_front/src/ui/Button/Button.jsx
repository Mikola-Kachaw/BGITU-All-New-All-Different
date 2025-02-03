import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: ${(props) => props.bg || 'white'};
    color: ${(props) => props.cl || 'black'};
    width: 140px;
    padding-top: 6px;
    border: 1px solid ${(props) => props.bc || 'black'};
    border-radius: 10px;

    &:hover {
    background-color: black;
    color: white;
    transition: all 0.3s;
  }
    &:active {
    transform: scale(0.95);
    transition: all 0.2s;
  }
`;

export default function Button({ children, bg, cl, bc, url }) {
    const handleClick = () => {
      window.location.href = url; // Переход на указанный URL
    };
    
    return <StyledButton bg={bg} cl={cl} bc={bc} onClick={handleClick}><h5>{children.toUpperCase()}</h5></StyledButton>
}