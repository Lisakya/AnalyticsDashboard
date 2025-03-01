
import {
  Box,
  Flex,
  Text,
  Stack,
  Icon,
  useColorMode,
} from "@chakra-ui/react";
import { 
  FiHome, 
  FiDatabase, 
  FiClipboard, 
  FiBook, 
  FiShoppingBag 
} from "react-icons/fi";

interface NavItemProps {
  icon: React.ElementType;
  children: React.ReactNode;
  isActive?: boolean;
}

const NavItem = ({ icon, children, isActive }: NavItemProps) => {
  const { colorMode } = useColorMode();
  const activeBg = colorMode === "light" ? "brand.50" : "brand.900";
  const activeTextColor = colorMode === "light" ? "brand.600" : "brand.200";
  const hoverBg = colorMode === "light" ? "gray.100" : "gray.700";
  
  return (
    <Flex
      align="center"
      px="4"
      py="3"
      cursor="pointer"
      role="group"
      fontWeight={isActive ? "semibold" : "medium"}
      transition=".15s ease"
      bg={isActive ? activeBg : "transparent"}
      borderRadius="md"
      _hover={{
        bg: hoverBg,
      }}
    >
      <Icon
        mr="3"
        fontSize="18"
        as={icon}
        color={isActive ? activeTextColor : "gray.500"}
        _groupHover={{
          color: activeTextColor,
        }}
      />
      <Text 
        color={isActive ? activeTextColor : "gray.500"} 
        _groupHover={{ color: activeTextColor }}
      >
        {children}
      </Text>
    </Flex>
  );
};

const Sidebar = () => {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === "light" ? "white" : "gray.800";
  const borderColor = colorMode === "light" ? "gray.200" : "gray.700";
  
  return (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      h="full"
      w="64"
      bg={bgColor}
      borderRight="1px"
      borderRightColor={borderColor}
      overflowY="auto"
      display={{ base: "none", md: "block" }}
    >
      <Flex h="20" alignItems="center" justifyContent="center" borderBottomWidth="1px">
        <Box bg="brand.500" p={4} width="80%" textAlign="center" borderRadius="md" color="white" fontWeight="bold">
          Analytics Dashboard
        </Box>
      </Flex>
      
      <Stack direction="column" spacing={1} align="stretch" p={4}>
        <NavItem icon={FiHome} isActive>Dashboard</NavItem>
        <NavItem icon={FiDatabase}>Data Lab</NavItem>
        <NavItem icon={FiClipboard}>Surveys</NavItem>
        <NavItem icon={FiBook}>Library</NavItem>
        <NavItem icon={FiShoppingBag}>Marketplace</NavItem>
      </Stack>
    </Box>
  );
};

export default Sidebar;
