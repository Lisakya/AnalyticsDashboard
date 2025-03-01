import { Box, Text, Stack, HStack, Divider, Badge } from "@chakra-ui/react";

interface ActivityItemProps {
  userName: string;
  action: string;
  time: string;
  highlight?: boolean;
}

const ActivityItem = ({ userName, action, time, highlight }: ActivityItemProps) => {
  return (
    <Box 
      py={2} 
      _hover={{ bg: "gray.100", cursor: "pointer" }} 
      borderRadius="md"
      transition="background-color 0.2s"
    >
      <HStack align="flex-start" gap={1}>
        <Text fontWeight="medium" color="brand.600">{userName}</Text>
        {highlight ? (
          <Text>{action} <Badge colorScheme="green" variant="subtle" ml={1}>new</Badge></Text>
        ) : (
          <Text>{action}</Text>
        )}
      </HStack>
      <Text fontSize="sm" color="gray.500">{time}</Text>
    </Box>
  );
};

const ActivityLog = () => {
  return (
    <Box bg="white" p={5} borderRadius="lg" shadow="md" borderWidth="1px">
      <Text fontSize="lg" fontWeight="medium" mb={4} color="gray.700">
        Activity Log
      </Text>
      
      <Stack direction="column" gap={2} align="stretch" divider={<Divider />}>
        <ActivityItem 
          userName="admin123" 
          action="changed permissions to admin" 
          time="2hrs ago" 
          highlight
        />
        <ActivityItem 
          userName="user456" 
          action="successfully logged in" 
          time="3hrs ago" 
        />
        <ActivityItem 
          userName="manager789" 
          action="updated dashboard settings" 
          time="5hrs ago" 
        />
        <ActivityItem 
          userName="developer321" 
          action="deployed new feature" 
          time="yesterday" 
        />
        <ActivityItem 
          userName="analyst001" 
          action="created new report" 
          time="2 days ago" 
          highlight
        />
      </Stack>
    </Box>
  );
};

export default ActivityLog;