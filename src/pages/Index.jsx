import { Box, Container, Flex, Heading, Link, Spacer, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Flex as="nav" bg="blue.500" color="white" padding="1.5rem">
        <Heading size="md">MyApp</Heading>
        <Spacer />
        <Box>
          <Link as={RouterLink} to="/" margin="0 1rem" color="white">
            Home
          </Link>
          <Link as={RouterLink} to="/about" margin="0 1rem" color="white">
            About
          </Link>
        </Box>
      </Flex>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="80vh">
        <VStack spacing={4}>
          <Heading>Welcome to MyApp</Heading>
          <Box>Start building your application here.</Box>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;