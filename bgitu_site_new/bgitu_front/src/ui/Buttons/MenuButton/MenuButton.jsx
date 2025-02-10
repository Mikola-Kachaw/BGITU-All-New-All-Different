import styled from "styled-components";

const MenuButtonWrapper = styled.button`
    display: flex;
    align-items: center;
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
    }
`;

const Label = styled.span`
    font-size: 24px;
    font-weight: 700;
    color: #1967AB;
    margin-left: 5px;
`;

export default function MenuButton({handleClickMenu}) {
  return (
    <MenuButtonWrapper onClick={handleClickMenu}>
        <MenuIcon>
            <div />
            <div />
            <div />
        </MenuIcon>
        <Label>МЕНЮ</Label>
    </MenuButtonWrapper>
  );
}