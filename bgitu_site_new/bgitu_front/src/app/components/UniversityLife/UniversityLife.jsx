import React, { useEffect, useRef } from 'react';
import classes from "./UniversityLife.module.css";

// Выносим posts за пределы компонента (если данные статичны)
const posts = [
    { id: 'vk_post_-30577958_21753', ownerId: -30577958, postId: 21753, hash: 'gxF0zKr85t83Qkykq3RC8NQ4KXyC' },
    { id: 'vk_post_-30577958_21752', ownerId: -30577958, postId: 21752, hash: 'R3PSX5I2qCoO2LxnbDSvaUxIRL-6' },
    { id: 'vk_post_-30577958_21755', ownerId: -30577958, postId: 21755, hash: 'wTxN9MxOveGVs9e0hmFMWlvO2Kce' },
];

export const VKWidget = () => {
    const isScriptLoaded = useRef(false);

    useEffect(() => {
        const initializeWidgets = () => {
            posts.forEach(post => {
                const container = document.getElementById(post.id);
                if (container && !container.hasChildNodes()) {
                    window.VK.Widgets.Post(
                        post.id,
                        post.ownerId,
                        post.postId,
                        post.hash
                    );
                }
            });
        };

        if (!window.VK && !isScriptLoaded.current) {
            const script = document.createElement('script');
            script.src = 'https://vk.com/js/api/openapi.js?173';
            script.async = true;
            script.onload = () => {
                isScriptLoaded.current = true;
                initializeWidgets();
            };
            document.body.appendChild(script);
        } else if (window.VK) {
            initializeWidgets();
        }

        return () => {
            posts.forEach(post => {
                const container = document.getElementById(post.id);
                if (container) {
                    container.innerHTML = '';
                }
            });
        };
    }, []); // Убрали posts из зависимостей

    return (
        <div>
            <h2 className={classes.title}>Жизнь вуза</h2>
            <div className={classes.background}>
                {posts.map(post => (
                    <div key={post.id} id={post.id} className={classes.post}></div>
                ))}
            </div>
        </div>
    );
};