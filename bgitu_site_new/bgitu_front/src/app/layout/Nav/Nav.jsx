import classes from "./nav.module.css";
import LinkStyleButton from "../../../ui/Buttons/LinkStyleButton/LinkStyleButton.jsx";
import {useState} from "react";
import {CloseButton} from "../../../ui/Buttons/CloseButton/CloseButton.jsx";

export const Nav = ({isOpenMenu, handleClickMenu}) => {

    const menu = [
        {
            name: "Абитуриентам",
            url: "#"
        },
        {
            name: "школьникам",
            url: "#"
        },
        {
            name: "студентам",
            url: "#"
        },
        {
            name: "выпускникам",
            url: "#"
        },
        {
            name: "аспирантам",
            url: "#"
        },
        {
            name: "наука",
            url: "#"
        },
        {
            name: "университет",
            url: "#"
        },
    ]

    return (
        <>
            <div className={`${classes.overlay} ${isOpenMenu && classes.overlayActive}`} onClick={handleClickMenu}>
            </div>
            <nav className={`${classes.nav} ${isOpenMenu && classes.navActive}`}>
                <div className={classes.topMenu}>
                    <span>
                        меню
                    </span>
                    <CloseButton onClick={handleClickMenu}/>
                </div>
                <ul className={classes.middleMenu}>
                    {menu.map((item) => {
                        return (
                            <li key={item.name}>
                                <LinkStyleButton url={item.url}>
                                    {item.name}
                                </LinkStyleButton>
                            </li>
                        )
                    })}
                </ul>
                <div className={classes.bottomMenu}>
                    <LinkStyleButton url="#" bg="#1968AB" bc="#1968AB" cl="#FFFFFF" style={{width: 'auto'}}>
                        ВОЙТИ В ЭИОС
                    </LinkStyleButton>
                </div>
            </nav>
        </>
    )
}
