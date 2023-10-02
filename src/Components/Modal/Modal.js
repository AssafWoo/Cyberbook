import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
  } from "@chakra-ui/react";
import { useRef } from "react";
  
  const ModalComponent = ({  title, content, onClose , open}) => {
    const modalRef = useRef(null);

    return (
      <Modal isOpen={open} onClose={onClose}>
        <ModalOverlay />
        <ModalContent padding="1rem" ref={modalRef}>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {content}
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  };
  
  export default ModalComponent;
  