import styled from 'styled-components';

const StyledLink = styled.a`
    display: inline-block;
    text-align: center;
    background-color: ${(props) => props.bg || 'white'};
    color: ${(props) => props.cl || 'black'};
    padding: 8px 24px;
    border: 1px solid ${(props) => props.bc || 'black'};
    border-radius: 20px;
    font-weight: bold;
    font-size: 1.6875rem;
    max-width: 100%;
    width: 100%;

    &:hover {
        background-color: black;
        color: white;
        transition: all 0.3s;
        border-color: black;
    }
    &:active {
        transform: scale(0.95);
        transition: all 0.2s;
    }
`;

export default function LinkStyleButton({ children, bg, cl, bc, url, style = {}}) {
  return (
      <StyledLink href={url} bg={bg} cl={cl} bc={bc} style={style}>
        {children.toUpperCase()}
      </StyledLink>
  )
}