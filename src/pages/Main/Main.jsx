import { useEffect, useState} from "react"
import styles from "./Main.module.css"
import { NewsBanner } from "../../components/NewsBanner/NewsBanner";
import { NewsList } from "../../components/NewsList/NewsList";
import { Skeleton } from "../../components/Skeleton/Skeleton";
import { Pagination } from "../../components/Pagination/Pagination";
import { Categories } from "../../components/Categories/Categories";
import { usePagination } from "../../Hooks/usePagination";
import { useCategories } from "../../Hooks/useCategories";
import { useFetch } from "../../Hooks/useFetch";
import { Search } from "../../components/Search/Search";
import { useDebounce } from "../../Hooks/useDebounce";

export const Main = () => {
    const [keywords, setKeywords] = useState("")
    const debouncedKeywords = useDebounce(keywords, 1500)
    const [categories, setCategories, selectedCategory, setSelectedCategory ] = useCategories();
    const [totalPage, pageSize, currentPage, handleNextPage, handlePageClick, handlePreviousPage] = usePagination(10, 10)
    const [news, fetchNews, fetchCategories, isLoading] = useFetch(selectedCategory, pageSize, setCategories, debouncedKeywords)

    useEffect(() => {
        fetchNews(currentPage);
    }, [currentPage, selectedCategory, debouncedKeywords])

    useEffect(() => {
        fetchCategories();
    }, [])

    return (
        <main className={styles.main}>

            <Categories categories={categories} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />

            <Search keywords={keywords} setKeywords={setKeywords} />

            {news.length > 0 && !isLoading ? <NewsBanner item={news[0]} /> : <Skeleton count={1} type="banner" />}

            <Pagination handleNextPage={handleNextPage} handlePreviousPage={handlePreviousPage} handlePageClick={handlePageClick} totalPages={totalPage} currentPage={currentPage} />

            { !isLoading ? <NewsList news={news} /> : <Skeleton count={10} type="item" />}

            <Pagination handleNextPage={handleNextPage} handlePreviousPage={handlePreviousPage} handlePageClick={handlePageClick} totalPages={totalPage} currentPage={currentPage} />
        </main>
    )
}

