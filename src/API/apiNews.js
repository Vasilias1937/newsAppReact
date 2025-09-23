import axios from "axios"

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL
const API_KEY= import.meta.env.VITE_NEWS_API_KEY

export const getNews = async ({page_number = 1, page_size = 10, category, find_by_keywords}) => {
    try {
        const response = await axios.get('/api/search', {
            params: {
              apiKey: API_KEY,
              page_number,
              page_size,
              category,
              find_by_keywords
            }
          })

        return response.data
    } catch (error) {
        console.log(error);
    }
}


export const getCategories = async () => {
  try {
      const response = await axios.get('/api/available/categories', {
          params: {
            apiKey: API_KEY,
          }
        })

      return response.data
  } catch (error) {
      console.log(error);
  }
}