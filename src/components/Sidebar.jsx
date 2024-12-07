import { Box, Flex, VStack, Heading, Text, Button } from '@chakra-ui/react';

export default function Sidebar() {
    return (
        <Flex
            direction="column"
            bg="white"
            w="250px"
            p={4}
            borderRight="1px solid"
            borderColor="gray.200"
        >
            <VStack align="start" spacing={4} mb={8}>
                <Text fontWeight="bold">Home</Text>
                <Text>Messages</Text>
                <Text>Tasks</Text>
                <Text>Members</Text>
                <Text>Settings</Text>
            </VStack>

            <Heading size="sm" mb={4} color="gray.600">My Projects</Heading>
            <VStack align="start" spacing={2} mb={8}>
                <Text fontWeight="bold" color="gray.800">Mobile App</Text>
                <Text color="gray.600">Website Redesign</Text>
                <Text color="gray.600">Design System</Text>
                <Text color="gray.600">Wireframes</Text>
            </VStack>

            <Box p={4} bg="yellow.50" borderRadius="md">
                <Heading size="sm" mb={2}>Thoughts Time</Heading>
                <Text fontSize="xs" color="gray.600" mb={2}>We don’t have any notice for you, till then you can share your thoughts with your peers.</Text>
                <Button size="sm" colorScheme="yellow">Write a message</Button>
            </Box>
        </Flex>
    );
}
