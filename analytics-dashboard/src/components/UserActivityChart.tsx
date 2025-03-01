
import { Box, Text } from "@chakra-ui/react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "1 Sep", value: 300 },
  { name: "2 Sep", value: 750 },
  { name: "3 Sep", value: 400 },
  { name: "4 Sep", value: 950 },
  { name: "5 Sep", value: 200 },
  { name: "6 Sep", value: 650 },
];

const UserActivityChart = () => {
  return (
    <Box bg="white" p={5} borderRadius="lg" shadow="md" borderWidth="1px">
      <Text fontSize="lg" fontWeight="medium" mb={4} color="gray.700">
        User Activity
      </Text>
      <Box h="300px">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis dataKey="name" tick={{ fill: '#718096' }} />
            <YAxis tick={{ fill: '#718096' }} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                borderRadius: '8px', 
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)', 
                border: 'none' 
              }} 
            />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="#146ae6" 
              fill="rgba(20, 106, 230, 0.1)" 
              strokeWidth={2} 
            />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default UserActivityChart;
