import { useState } from "react";
import styled from "styled-components";

const MenuButtonWrapper = styled.button`
    display: flex;
    align-items: center;
    margin: 1em 0 0 1em;
`;

const MenuIcon = styled.div`
    width: 26px;
    display: block;
    margin-top: ${({ isOpen }) => (isOpen ? "6px" : "0")};

    div {
        height: 4px;
        background-color: #1967AB;
        margin: 3px 0;
        border-radius: 50px;
        transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
    }

    ${({ isOpen }) =>
        isOpen &&
        `
        div:nth-child(1) {
        transform: translateY(6.6px) rotate(45deg);
        }
        div:nth-child(2) {
        opacity: 0;
        }
        div:nth-child(3) {
        transform: translateY(-6.6px) rotate(-45deg);
        }
    `}
`;

const Label = styled.span`
    font-size: 24px;
    font-weight: 700;
    color: #1967AB;
    margin-left: 5px;
`;

export default function MenuButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MenuButtonWrapper onClick={() => setIsOpen(!isOpen)}>
        <MenuIcon isOpen={isOpen}>
            <div />
            <div />
            <div />
        </MenuIcon>
        {!isOpen && <Label>МЕНЮ</Label>}
    </MenuButtonWrapper>
  );
}
