import React from "react";
import { ChakraProvider, CSSReset, Box } from "@chakra-ui/react";
import { BookstoreProvider } from "./Context/BookstoreContext";
import SearchBar from "./Modules/SearchBar/SearchBar";
import Catalog from "./Pages/Catalog/Catalog";
import { QueryClient, QueryClientProvider } from "react-query";
import { LightTheme } from "./Styles/Colors";
import { AppWrapper } from "./Styles/Styles";

const queryClient = new QueryClient();

function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <QueryClientProvider client={queryClient}>
        <Box margin="0 auto" p={5} background={LightTheme}>
          <BookstoreProvider>
            <AppWrapper>
            <SearchBar />
            <Catalog />
            </AppWrapper>
          </BookstoreProvider>
        </Box>
      </QueryClientProvider>
    </ChakraProvider>
  );
}
export default App;
