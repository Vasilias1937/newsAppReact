import styles from "./Categories.module.css"

export const Categories = ({categories, setSelectedCategory, selectedCategory}) => {
    return (
        <div className={styles.categories}>
            {categories.map(category =>  <button onClick={() => {setSelectedCategory(category)}} className={selectedCategory === category ? styles.active : styles.item} key={category}>{category}</button>)}
        </div>
    )
}

