import React from "react";
import styles from "./Search.module.css"

export const Search = ({keywords, setKeywords}) => {
    return (
        <div className={styles.search}>
            <input className={styles.input} type="text" value={keywords} onChange={(event) => setKeywords(event.target.value)}/>
        </div>
    )
}