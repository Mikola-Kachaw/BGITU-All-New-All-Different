import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./HorizontalScroll.module.css";

export const HorizontalScroll = () => {
    const [phase, setPhase] = useState('normal');
    const [blockStart, setBlockStart] = useState(window.innerWidth); // Динамический BLOCK_START
    const blockRef = useRef(null);
    const startScrollY = useRef(0);
    const animationProgress = useRef(0);
    const isAnimating = useRef(false);

    // Конфигурация анимации
    const ANIMATION_DURATION = 1000;
    const BLOCK_END = 100;

    // Обновление blockStart при ресайзе
    useEffect(() => {
        const handleResize = () => setBlockStart(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Проверка видимости блока
    const isBlockVisible = useCallback(() => {
        if (!blockRef.current) return false;
        const rect = blockRef.current.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom >= 0;
    }, []);

    // Обработчик скролла
    const handleScroll = useCallback((e) => {
        if (phase === 'animating' && isAnimating.current) {
            e.preventDefault();

            const delta = e.deltaY || e.detail || (-e.wheelDelta);
            animationProgress.current = Math.min(
                Math.max(animationProgress.current + delta, 0),
                ANIMATION_DURATION
            );

            const progress = animationProgress.current / ANIMATION_DURATION;
            const newX = blockStart - (blockStart - BLOCK_END) * progress;

            blockRef.current.style.transform = `translateX(${newX}px)`;

            if (animationProgress.current >= ANIMATION_DURATION) {
                isAnimating.current = false;
                setPhase('normal');
                document.body.style.overflow = ''; // Восстановление скролла
            }
        }
    }, [phase, blockStart]);

    // Основной обработчик
    useEffect(() => {
        const checkScroll = () => {
            if (phase === 'normal' && isBlockVisible() && !isAnimating.current) {
                setPhase('animating');
                isAnimating.current = true;
                startScrollY.current = window.scrollY;
                animationProgress.current = 0;
                document.body.style.overflow = 'hidden';
            }
        };

        window.addEventListener('scroll', checkScroll);
        window.addEventListener('wheel', handleScroll, { passive: false });
        window.addEventListener('touchmove', handleScroll, { passive: false });

        return () => {
            window.removeEventListener('scroll', checkScroll);
            window.removeEventListener('wheel', handleScroll);
            window.removeEventListener('touchmove', handleScroll);
            document.body.style.overflow = '';
        };
    }, [phase, isBlockVisible, handleScroll]);

    return (
        <div style={{ height: '200vh' }}>
            <div style={{ height: '100vh' }}>Прокрутите вниз</div>

            <div
                ref={blockRef}
                style={{
                    position: 'fixed',
                    top: '50%',
                    right: `-${blockStart}px`,
                    width: '300px',
                    height: '200px',
                    background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
                    transition: 'transform 0.1s',
                    borderRadius: '10px',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    transform: `translateX(${blockStart}px)`
                }}
            >
                Анимируемый блок
            </div>

            <div style={{ height: '100vh', marginTop: '100vh' }}>
                Продолжение контента после анимации
            </div>
        </div>
    );
};