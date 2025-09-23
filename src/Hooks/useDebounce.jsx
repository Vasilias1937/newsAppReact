import React, { useEffect, useState } from "react";

export const useDebounce = (value, delay) => {
    const [debounsedValue, setDebounsedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounsedValue(value);
        }, delay)

        return () => {
            clearTimeout(handler);
        }
    }, [value, delay])

    return debounsedValue;
}