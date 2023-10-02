import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { MainPink } from "../../Styles/Colors";
import { returnFields } from "./fields";

const BookForm = ({ onPurchase }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    onPurchase(data);
  };

  const fields = returnFields(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field) => (
        <FormControl key={field.name} mt={4} isInvalid={field.error}>
          <FormLabel>{field.label}</FormLabel>
          <Input
            borderRadius={"15px"}
            placeholder={field.placeholder}
            type={field.type}
            {...register(field.name, field.validation)}
          />
          <FormErrorMessage>
            {field.error && field.error.message}
          </FormErrorMessage>
        </FormControl>
      ))}
      <Button
        margin="1rem 0"
        borderRadius={"15px"}
        type="submit"
        width="100%"
        colorScheme={"pink"}
        background={MainPink}
      >
        Purchase
      </Button>
    </form>
  );
};

export default BookForm;
