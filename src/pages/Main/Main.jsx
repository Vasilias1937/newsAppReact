import { useEffect, useState } from "react"
import styles from "./Main.module.css"
import { getNews } from "../../API/apiNews"
import { NewsBanner } from "../../components/NewsBanner/NewsBanner";
import { NewsList } from "../../components/NewsList/NewsList";

export const Main = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        const fetchNews = async () => {
            try {
                const responce = await getNews();
                setNews(responce.news);
            } catch (error) {
                console.log(error);
            }
        }

        fetchNews();
    }, [])

    return (
        <main className={styles.main}>
            <NewsList news={news} />
        </main>
    )
}

