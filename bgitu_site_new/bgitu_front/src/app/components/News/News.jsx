import { useState } from "react";
import ArrowPrev from "../../../ui/Buttons/ArrowPrev/ArrowPrev.jsx";
import CardNews from "../../../ui/Card/CardNews.jsx";
import ArrowNext from "../../../ui/Buttons/ArrowNext/ArrowNext.jsx";
import classes from "./news.module.css";

export const News = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [...Array(6).keys()];
    const visibleSlides = 3;
    const totalItems = slides.length + 1;

    const maxSlide = totalItems - visibleSlides;

    const handleNext = () => {
        setCurrentSlide(prev => Math.min(prev + 1, maxSlide));
    };

    const handlePrev = () => {
        setCurrentSlide(prev => Math.max(prev - 1, 0));
    };

    return (
        <section className={classes.news}>
            <h2 className={classes.titleNews}>
                Новости
                <div className={classes.subTitleLine}>
                    <span className={classes.longLine}></span>
                    <span className={classes.shortLine}></span>
                    <span className={classes.shortLine}></span>
                </div>
            </h2>
            <div className={classes.slider}>
                {currentSlide > 0 && <ArrowPrev onClick={handlePrev} />}
                <div className={classes.sliderContainer}>
                    <div
                        className={classes.sliderList}
                        style={{
                            transform: `translateX(calc(-${currentSlide} * (95%) / ${visibleSlides}))`
                        }}
                    >
                        {slides.map((item, index) => (
                            <CardNews key={index}
                                      image={"https://i3.photo.2gis.com/images/geo/62/8725724292229816_2ea9.jpg"}
                                      text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."}
                                      link={"#"}
                            />
                        ))}
                        <a href="#" className={classes.moreLink}>
                            БОЛЬШЕ НОВОСТЕЙ
                        </a>
                    </div>
                </div>
                {currentSlide < maxSlide && <ArrowNext onClick={handleNext} />}
            </div>
        </section>
    );
};

