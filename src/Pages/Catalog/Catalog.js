import { Box, Heading } from "@chakra-ui/react";
import { useBookstoreContext } from "../../Context/BookstoreContext";
import useBooks from "../../Utils/Hooks/useBooks";
import Pagination from "../../Modules/Pagination/Pagination";
import { Flex } from "../../Styles/Styles";
import PageSizeSelect from "../../Modules/PageSizeSelect/PageSizeSelect";
import BooksDisplay from "../../Modules/BookDisplay/BookDisplay";

const Catalog = () => {
  const { searchQuery, page, pageSize, setPage, setPageSize, totalItems } =
    useBookstoreContext();
  const { data = [], isLoading } = useBooks(searchQuery, page, pageSize);

  const nextPage = () => {
    setPage((p) => p + 1);
  };

  const prevPage = () => {
    if (page > 0) {
      setPage((p) => p - 1);
    }
  };

  const handlePageSizeChange = (value) => {
    setPage(0);
    setPageSize(value);
  };

  const options = [{ value: 10 }, { value: 25 }, { value: 50 }];

  if (data && data.length === 0 && !isLoading)
    return (
      <>
        {" "}
        <Flex radius="15px" margin="1rem 0rem" padding="1rem">
          <Heading fontSize={"1.5rem"} fontWeight={"400"}>
            Opps... :(
            <br />
            Seems like we didnt find any books relevant for your search
          </Heading>
        </Flex>
      </>
    );

  return (
    <Box>
      <br />
      <PageSizeSelect
        pageSize={pageSize}
        handlePageSizeChange={handlePageSizeChange}
        options={options}
      />

      <Pagination
        nextPage={nextPage}
        prevPage={prevPage}
        page={page}
        pageSize={pageSize}
        totalItems={totalItems}
      />
      <Flex background="transparent">
        <BooksDisplay isLoading={isLoading} data={data} pageSize={pageSize} />
      </Flex>
      <Pagination
        nextPage={nextPage}
        prevPage={prevPage}
        page={page}
        pageSize={pageSize}
        totalItems={totalItems}
      />
    </Box>
  );
};

export default Catalog;
