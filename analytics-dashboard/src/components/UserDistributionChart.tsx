import { Box, Text, Flex, Circle, HStack, Stack, Heading } from "@chakra-ui/react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Staff", value: 151, color: "#146ae6" },  // brand.500
  { name: "Students", value: 300, color: "#5cc9ff" }, // accent.500
  { name: "Faculty", value: 200, color: "#38b2ac" }, // success.500
  { name: "Visitors", value: 100, color: "#f6ad55" }, // warning.500
];

const authData = [
  { name: "Microsoft", value: 300, color: "#146ae6" },
  { name: "Internal", value: 250, color: "#5cc9ff" },
  { name: "SAML", value: 200, color: "#38b2ac" },
];

const Legend = ({ data }: { data: { name: string; value: number; color?: string }[] }) => {
  return (
    <Stack direction="column" align="stretch" gap={2} mt={2}>
      {data.map((entry, index) => (
        <HStack key={`legend-${index}`}>
          <Circle size="10px" bg={entry.color || `gray.${(index + 5) * 100}`} />
          <Text fontSize="sm">{entry.name} - {entry.value}</Text>
        </HStack>
      ))}
    </Stack>
  );
};

const UserDistributionChart = () => {
  return (
    <Box bg="white" p={5} borderRadius="lg" shadow="md" borderWidth="1px">
      <Heading size="md" mb={2} color="gray.700">
        User Distribution
      </Heading>
      <Text fontSize="sm" color="gray.500" mb={4}>
        Breakdown by user type and authentication method
      </Text>
      
      <Flex mt={4} direction={{ base: "column", xl: "row" }} gap={6}>
        <Box flex="1" h="200px">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={80}
                innerRadius={30}
                dataKey="value"
                paddingAngle={2}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} stroke="transparent" />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  borderRadius: '8px', 
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)', 
                  border: 'none' 
                }} 
              />
            </PieChart>
          </ResponsiveContainer>
        </Box>
        
        <Box flex="1">
          <Legend data={data} />
          
          <Text fontSize="md" fontWeight="medium" mt={6} mb={2} color="gray.700">
            By Authentication Method
          </Text>
          
          <Flex wrap="wrap" gap={8}>
            {authData.map((item, index) => (
              <Box key={index}>
                <Text fontSize="md" color="gray.500">{item.name}</Text>
                <Text fontSize="2xl" fontWeight="bold" color={item.color}>{item.value}</Text>
              </Box>
            ))}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default UserDistributionChart;