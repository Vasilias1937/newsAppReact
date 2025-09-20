import React from "react";
import styles from './Skeleton.module.css';

export const Skeleton = ({ count = 1, type = "banner" }) => {
    return (
        <>
            {count > 1 ? (
                <ul className={styles.list}>
                    {Array.from({ length: count }, (_, index) => (
                        <li className={type === "banner" ? styles.banner : styles.item} key={index} />
                    ))}
                </ul>
            ) : (
                <li className={type === "banner" ? styles.banner : styles.item} />
            )}
        </>
    );
};
