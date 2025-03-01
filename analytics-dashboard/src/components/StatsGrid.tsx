import { Box, SimpleGrid, Text, Stat, StatLabel, StatNumber, StatHelpText } from "@chakra-ui/react";

const StatsCard = ({ title, stat, date, accentColor = "brand.500" }: { title: string; stat: string; date: string; accentColor?: string }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p={5}
      shadow="md"
      bg="white"
      position="relative"
      overflow="hidden"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "4px",
        bg: accentColor,
      }}
      _hover={{
        bg: "gray.100",
        cursor: "pointer",
        transform: "scale(1.05)",
        transition: "transform 0.2s, background-color 0.2s",
      }}
    >
      <Stat>
        <StatLabel fontSize="sm" color="gray.500">{title}</StatLabel>
        <StatNumber fontSize="2xl" fontWeight="bold" my={2}>{stat}</StatNumber>
        <StatHelpText fontSize="xs" color="gray.500">
          {date}
        </StatHelpText>
      </Stat>
    </Box>
  );
};

const StatsGrid = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
      <StatsCard
        title="Daily Active Users"
        stat="1,051"
        date="18 Mar 2024"
        accentColor="brand.500"
      />
      <StatsCard
        title="Monthly Active Users"
        stat="28,435"
        date="Mar 2024"
        accentColor="accent.500"
      />
      <StatsCard
        title="Avg. Time Per User"
        stat="24 min"
        date="Last 7 days"
        accentColor="success.500"
      />
    </SimpleGrid>
  );
};

export default StatsGrid;