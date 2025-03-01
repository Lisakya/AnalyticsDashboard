
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Box, Heading, Text, Button, Center, VStack, Icon } from "@chakra-ui/react";
import { FiAlertTriangle } from "react-icons/fi";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Center minH="100vh" bg="gray.50">
      <VStack spacing={6} p={8} textAlign="center" maxW="500px">
        <Icon as={FiAlertTriangle} boxSize={16} color="brand.500" />
        <Heading size="3xl" color="gray.800">404</Heading>
        <Text fontSize="xl" color="gray.600">Oops! The page you're looking for doesn't exist.</Text>
        <Button 
          as={Link} 
          to="/" 
          colorScheme="brand" 
          size="lg" 
          mt={2}
          bg="brand.500"
          _hover={{ bg: "brand.600" }}
        >
          Return to Dashboard
        </Button>
      </VStack>
    </Center>
  );
};

export default NotFound;
