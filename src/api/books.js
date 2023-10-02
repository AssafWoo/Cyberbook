import axios from "axios";

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
const GOOGLE_API_ENDPOINT = "https://www.googleapis.com/books/v1/volumes";

let cancelSource;
export const fetchBooks = async (query, startIndex = 0, maxResults = 100) => {
  if (cancelSource) {
    cancelSource.cancel("Canceled due to new request");
  }

  cancelSource = axios.CancelToken.source();

  try {
    const response = await axios.get(GOOGLE_API_ENDPOINT, {
      cancelToken: cancelSource.token,
      params: {
        q: `${query}+subject:Cyberspace`,
        key: API_KEY,
        startIndex,
        maxResults,
      },
    });

    return {
      items: Array.isArray(response.data.items) ? response.data.items : [],
      totalItems: response.data.totalItems,
    };
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log("Request was canceled", error.message);
    } else {
      throw error;
    }

    return {
      items: [],
      totalItems: 0,
    };
  }
};
