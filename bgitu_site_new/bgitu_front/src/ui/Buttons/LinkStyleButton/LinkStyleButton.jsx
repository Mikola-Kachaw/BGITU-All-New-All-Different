import styled from 'styled-components';

const StyledLink = styled.a`
    display: inline-block;
    text-align: center;
    text-decoration: none;
    background-color: ${(props) => props.bg || 'white'};
    color: ${(props) => props.cl || 'black'};
    width: 140px;
    padding: 7px 0 4px;
    border: 1px solid ${(props) => props.bc || 'black'};
    border-radius: 10px;
    font-weight: bold;
    font-size: 13.28px;

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

export default function LinkStyleButton({ children, bg, cl, bc, url }) {
  return (
      <StyledLink href={url} bg={bg} cl={cl} bc={bc}>
        {children.toUpperCase()}
      </StyledLink>
  )
}