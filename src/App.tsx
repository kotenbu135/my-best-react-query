import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PostListPage } from "./pages/PostList";
import { ColorModeSwitcher } from "./pages/ColorModeSwitcher";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Button,
} from "@chakra-ui/react";

const queryClient = new QueryClient();

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <QueryClientProvider client={queryClient}>
              <PostListPage />
            </QueryClientProvider>
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <Button
              as="a"
              href="https://ja.wikipedia.org/wiki/特別:おまかせ表示"
              target="_blank"
              colorScheme="blue"
            >
              ランダムWikipedia
            </Button>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
