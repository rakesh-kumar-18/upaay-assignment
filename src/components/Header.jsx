import { Flex, Box, Heading, InputGroup, InputLeftElement, Input, Avatar, IconButton } from '@chakra-ui/react';
import { SearchIcon, BellIcon } from '@chakra-ui/icons';

export default function Header() {
    return (
        <Flex
            as="header"
            align="center"
            justify="space-between"
            w="100%"
            bg="white"
            boxShadow="sm"
            p={4}
        >
            <Heading size="md" color="gray.700">
                Project M.
            </Heading>

            <InputGroup w="300px">
                <InputLeftElement pointerEvents="none">
                    <SearchIcon color="gray.400" />
                </InputLeftElement>
                <Input placeholder="Search for anything..." variant="outline" />
            </InputGroup>

            <Flex align="center" gap={4}>
                <IconButton
                    aria-label="Notifications"
                    icon={<BellIcon />}
                    variant="ghost"
                />
                <Box textAlign="right">
                    <Heading size="sm" color="gray.800">Palak Jain</Heading>
                    <Box fontSize="xs" color="gray.500">Rajasthan, India</Box>
                </Box>
                <Avatar name="Palak Jain" size="sm" />
            </Flex>
        </Flex>
    );
}
