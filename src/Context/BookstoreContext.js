import { createContext, useState, useContext, useEffect } from "react";

const BookstoreContext = createContext();

export const useBookstoreContext = () => {
  return useContext(BookstoreContext);
};

export const BookstoreProvider = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [pageSize, setPageSize] = useState(10);
    const [page, setPage] = useState(0);
    const [fetchedBooks, setFetchedBooks] = useState([]);
    const [allBooksFetched, setAllBooksFetched] = useState(false);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        setPage(0);
        setFetchedBooks([]);
        setAllBooksFetched(false);
    }, [pageSize, searchQuery]);


    return (
        <BookstoreContext.Provider
            value={{
                searchQuery,
                setSearchQuery,
                pageSize,
                totalItems,
                setTotalItems,
                setPageSize,
                page,
                setPage,
                fetchedBooks,
                setFetchedBooks,
                allBooksFetched
            }}
        >
            {children}
        </BookstoreContext.Provider>
    );
};