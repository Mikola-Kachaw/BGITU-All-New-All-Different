import { Logo } from "../../components/Logo/Logo.jsx";
import MenuButton from "../../../ui/Buttons/MenuButton/MenuButton.jsx";
import classes from "./header.module.css";
import { useEffect, useState, useCallback } from "react";
import throttle from 'lodash/throttle';
import {Nav} from "../Nav/Nav.jsx";
import {Eyes} from "../../../ui/Eyes/Eyes.jsx";

export const Header = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleClickMenu = () => setIsOpenMenu(!isOpenMenu);

    const handleScroll = useCallback(throttle(() => {
        const scrolled = window.scrollY > 50;
        setIsScrolled(scrolled);
    }, 100), []);

    const disableScroll = () => {
        document.body.style.overflow = 'hidden'; // Запрещаем скролл
    };

    const enableScroll = () => {
        document.body.style.overflow = ''; // Возвращаем скролл
    };

    useEffect(() => {
        handleScroll();
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            handleScroll.cancel();
        };
    }, [handleScroll]);

    useEffect(() => {
        if (isOpenMenu) {
            disableScroll();
        } else {
            enableScroll();
        }
    }, [isOpenMenu]); // Зависимость от isOpenMenu

    return (
        <header className={`${classes.header}`}>
            <div className={isScrolled && classes.glassBackground}>
                <div className={`${classes.flex} ${classes.headerTop}`}>
                    <Logo width="96" height="100" fill="#1968AB"/>
                    <div className={classes.rightHeader}>
                        <Eyes/>
                        <MenuButton handleClickMenu={handleClickMenu}/>
                    </div>
                </div>
            </div>
            <Nav isOpenMenu={isOpenMenu} handleClickMenu={handleClickMenu}/>
        </header>
    );
};