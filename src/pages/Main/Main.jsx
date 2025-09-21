import { useEffect, useState } from "react"
import styles from "./Main.module.css"
import { getNews } from "../../API/apiNews"
import { NewsBanner } from "../../components/NewsBanner/NewsBanner";
import { NewsList } from "../../components/NewsList/NewsList";
import { Skeleton } from "../../components/Skeleton/Skeleton";
import { Pagination } from "../../components/Pagination/Pagination";

export const Main = () => {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1)
    const totalPage = 10;
    const pageSize = 10;

    const fetchNews = async (currentPage) => {
        try {
            setIsLoading(true);
            const responce = await getNews(currentPage,pageSize);
            setNews(responce.news);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    const handleNextPage = () => {
        if (currentPage < totalPage) {
            setCurrentPage(currentPage + 1)
        }
    }

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        fetchNews(currentPage);
    }, [currentPage])

    return (
        <main className={styles.main}>
            {news.length > 0 && !isLoading ? <NewsBanner item={news[0]} /> : <Skeleton count={1} type="banner" />}

            <Pagination handleNextPage={handleNextPage} handlePreviousPage={handlePreviousPage} handlePageClick={handlePageClick} totalPages={totalPage} currentPage={currentPage} />

            { !isLoading ? <NewsList news={news} /> : <Skeleton count={10} type="item" />}

            <Pagination handleNextPage={handleNextPage} handlePreviousPage={handlePreviousPage} handlePageClick={handlePageClick} totalPages={totalPage} currentPage={currentPage} />
        </main>
    )
}

