import React from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import { MainGreen } from "../../Styles/Colors";

const Pagination = ({ nextPage, prevPage, page, totalItems, pageSize }) => {
  const disableNext = (page + 1) * pageSize >= totalItems;
  return (
    <Flex align="center" justify="center" mt={4} mb={2}>
      <Button
        onClick={prevPage}
        isDisabled={page === 0}
        mr={2}
        color="white"
        borderRadius={"15px"}
        background={MainGreen}
        colorScheme="green"
      >
        Previous
      </Button>

      <Text fontWeight="bold" fontSize="lg" mx={2}>
        {page + 1}
      </Text>

      <Button
        onClick={nextPage}
        isDisabled={disableNext}
        ml={2}
        color="white"
        background={MainGreen}
        borderRadius={"15px"}
        colorScheme="green"
      >
        Next
      </Button>
    </Flex>
  );
};

export default React.memo(Pagination);
