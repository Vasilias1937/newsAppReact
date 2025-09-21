import React from "react";
import { useState } from "react";
export const useCategories = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");

    return [
        categories,
        setCategories,
        selectedCategory,
        setSelectedCategory
    ]

}