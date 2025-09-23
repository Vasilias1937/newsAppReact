import React from "react";
import { getNews, getCategories } from "../API/apiNews";
import { useState } from "react";
export const useFetch = (selectedCategory, pageSize, setCategories, keywords ) => {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchNews = async (currentPage) => {
        try {
            setIsLoading(true);
            const responce = await getNews({
                page_number: currentPage,
                page_size: pageSize,
                category: selectedCategory === 'All' ? null : selectedCategory,
                find_by_keywords: keywords
            });
            setNews(responce.news);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    const fetchCategories = async () => {
        try {
            const responce = await getCategories();
            setCategories(["All", ...responce.categories])
        } catch (error) {
            console.log(error);
        }
    }

    return [
        news,
        fetchNews,
        fetchCategories,
        isLoading
    ]

}