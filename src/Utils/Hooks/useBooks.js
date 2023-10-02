import { useQuery } from "react-query";
import { fetchBooks } from "../../api/books";
import { useBookstoreContext } from "../../Context/BookstoreContext";
import { deduplicateBooks } from "../removeDuplicates";

const useBooks = (query, page, pageSize) => {
  const {
    setTotalItems,
    fetchedBooks,
    setFetchedBooks,
    allBooksFetched,
    setAllBooksFetched,
  } = useBookstoreContext();

  const { refetch, ...queryInfo } = useQuery(
    ["books", query, page, pageSize],
    async () => {
      const startIndex = page * pageSize;
      let endIndex = startIndex + pageSize;

      if (fetchedBooks.length >= endIndex) {
        return fetchedBooks.slice(startIndex, endIndex);
      }

      if (allBooksFetched) {
        return fetchedBooks.slice(startIndex, startIndex + pageSize);
      }

      let requiredBooks = pageSize;
      let results = [];

      while (requiredBooks > 0) {
        const batchSize = Math.min(requiredBooks, 40);
        const response = await fetchBooks(
          query,
          startIndex + results.length,
          batchSize
        );
        const batch = response.items;
        results = [...results, ...batch];
        setTotalItems(response.totalItems);

        if (batch.length < batchSize) {
          setAllBooksFetched(true);
          break;
        }

        requiredBooks -= batchSize;
      }

      results = deduplicateBooks(results);

      setFetchedBooks((prev) => {
        const updatedBooks = [...prev];
        for (let i = 0; i < results.length; i++) {
          updatedBooks[startIndex + i] = results[i];
        }
        return deduplicateBooks(updatedBooks);
      });

      return results;
    },
    {
      retry: 1,
      retryDelay: (attempt) => Math.min(attempt * 1000, 3000),
    }
  );

  return { refetch, ...queryInfo };
};

export default useBooks;
