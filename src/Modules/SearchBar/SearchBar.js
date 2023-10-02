import React, { useState, useEffect } from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { debounce } from "../../Utils/debounce";
import { useBookstoreContext } from "../../Context/BookstoreContext";
import { MainPink, White } from "../../Styles/Colors";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [localQuery, setLocalQuery] = useState("");
  const { searchQuery, setSearchQuery } = useBookstoreContext();

  const debouncedSearch = debounce((query) => {
    setSearchQuery(query);
  }, 500);

  useEffect(() => {
    debouncedSearch(localQuery);
  }, [debouncedSearch, localQuery]);

  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <FaSearch color={MainPink} />
      </InputLeftElement>
      <Input
        value={localQuery}
        background={White}
        borderRadius={"15px"}
        onChange={(e) => setLocalQuery(e.target.value)}
        placeholder="Search for books..."
      />{" "}
    </InputGroup>
  );
};

export default SearchBar;
