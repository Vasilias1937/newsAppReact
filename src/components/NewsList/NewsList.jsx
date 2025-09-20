import { NewsItem } from "../NewsItem/NewsItem"
import styles from "./NewsList.module.css"
export const NewsList = ({news}) => {
    return (
        <ul className={styles.list}>
            {news.map(item => <NewsItem key={item.id} item={item} />)}
        </ul>
    )
}