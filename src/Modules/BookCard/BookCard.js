import { Link, VStack, Button, useToast } from "@chakra-ui/react";
import React, { useState, useEffect, useCallback } from "react";
import ModalComponent from "../../Components/Modal/Modal";
import BookForm from "../BookForm/BookForm";
import { BookImage, Card } from "./Style";
import { MainPink } from "../../Styles/Colors";
import Confetti from "react-confetti";

const BookCard = ({ book }) => {
  const { title, imageLinks, infoLink } = book.volumeInfo;
  const [open, setOpen] = useState(false);
  const [numberOfPieces, setNumberOfPieces] = useState(0);
  const toast = useToast();

  const handleOpenModal = useCallback(() => {
    setOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setOpen(false);
  }, []);

  const handlePurchase = useCallback(
    (data) => {
      console.log("Purchase function called", data);
      setNumberOfPieces(500);
      handleCloseModal();

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      toast({
        title: "Congrats!",
        description: `${title} is on its way to you.`,
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    },
    [handleCloseModal, title, toast]
  );

  useEffect(() => {
    let interval;
    if (numberOfPieces > 0) {
      interval = setInterval(() => {
        setNumberOfPieces((prevCount) => {
          if (prevCount <= 0) {
            clearInterval(interval);
            return 0;
          }
          return prevCount - 400;
        });
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [numberOfPieces]);

  return (
    <>
      <Confetti numberOfPieces={numberOfPieces} />
      <Card>
        <VStack spacing={4} align="center" height="100%">
          <BookImage
            src={imageLinks?.smallThumbnail}
            alt={title}
            onClick={handleOpenModal}
          />
          <Link href={infoLink} isExternal fontWeight="600">
            {title}
          </Link>
          <Button
            colorScheme="pink"
            background={MainPink}
            borderRadius={"15px"}
            onClick={handleOpenModal}
          >
            Purchase
          </Button>
        </VStack>
      </Card>
      {open && (
        <ModalComponent
          title={title}
          content={<BookForm onPurchase={handlePurchase} />}
          onClose={handleCloseModal}
          open={open}
        />
      )}
    </>
  );
};

export default React.memo(BookCard);
