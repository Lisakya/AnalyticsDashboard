
import { Box, Flex, useColorMode } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import StatsGrid from "../components/StatsGrid";
import ActivityLog from "../components/ActivityLog";
import UserActivityChart from "../components/UserActivityChart";
import UserDistributionChart from "../components/UserDistributionChart";

const Dashboard = () => {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === "light" ? "gray.50" : "gray.800";
  
  return (
    <Flex minH="100vh">
      <Sidebar />
      <Box 
        flex="1" 
        bg={bgColor} 
        p={5} 
        ml={{ base: 0, md: "64" }} 
        overflowY="auto"
        width="calc(100% - 16rem)" 
        transition="margin-left 0.3s"
      >
        <Box maxW="1400px" mx="auto">
          <StatsGrid />
          
          <Flex 
            direction={{ base: "column", lg: "row" }} 
            gap={5} 
            my={5}
          >
            <Box 
              flex="1" 
              bg={colorMode === "light" ? "white" : "gray.700"} 
              borderRadius="lg" 
              p={4} 
              border="1px" 
              borderColor={colorMode === "light" ? "gray.200" : "gray.600"} 
              shadow="sm"
            >
              <UserActivityChart />
            </Box>
            
            <Box 
              flex="1" 
              bg={colorMode === "light" ? "white" : "gray.700"} 
              borderRadius="lg" 
              p={4} 
              border="1px" 
              borderColor={colorMode === "light" ? "gray.200" : "gray.600"} 
              shadow="sm"
            >
              <UserDistributionChart />
            </Box>
          </Flex>
          
          <Box 
            bg={colorMode === "light" ? "white" : "gray.700"} 
            borderRadius="lg" 
            p={4} 
            mt={5} 
            border="1px" 
            borderColor={colorMode === "light" ? "gray.200" : "gray.600"} 
            shadow="sm"
          >
            <ActivityLog />
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default Dashboard;
