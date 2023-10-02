import React from "react";
import { BoxSize } from "../../Styles/Styles";
import { DarkerTheme } from "../../Styles/Colors";
import { Skeleton } from "@chakra-ui/react";
import BookCard from '../BookCard/BookCard';

const BooksDisplay = ({ isLoading, data, pageSize }) => {
  if (isLoading) {
    return (
      <>
        {Array.from({ length: pageSize }).map((_, idx) => (
          <BoxSize
            flexSize="2 0 45%"
            background="transparent"
            color={DarkerTheme}
            key={idx}
          >
            <Skeleton height="200px" borderRadius="15px" />
          </BoxSize>
        ))}
      </>
    );
  }

  if (data && data.length > 0) {
    return (
      <>
        {data.map((book) => (
          <BoxSize
            flexSize="2 0 45%"
            background="transparent"
            color={DarkerTheme}
            key={book.id}
          >
            <BookCard book={book} />
          </BoxSize>
        ))}
      </>
    );
  }

  return null;
};

export default React.memo(BooksDisplay);
