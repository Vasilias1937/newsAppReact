import React from "react";
import { useState } from "react";
export const usePagination = (totalPage, pageSize) => {
    const [currentPage, setCurrentPage] = useState(1)

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

    return [
        totalPage,
        pageSize,
        currentPage,
        handleNextPage,
        handlePageClick,
        handlePreviousPage,
    ]
}