/* eslint-disable react/prop-types */
import { Box, Text, Badge, HStack, AvatarGroup, Avatar } from '@chakra-ui/react';

export default function TaskCard({ task, provided, innerRef }) {
    return (
        <Box
            ref={innerRef}
            {...provided?.draggableProps}
            {...provided?.dragHandleProps}
            bg="white"
            borderRadius="md"
            p={4}
            mb={4}
            boxShadow="xs"
        >
            <HStack justify="space-between" mb={2}>
                <Text fontWeight="bold">{task.title}</Text>
                <Badge colorScheme={task.priority === 'high' ? 'red' : task.priority === 'completed' ? 'green' : 'blue'}>
                    {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                </Badge>
            </HStack>
            <Text fontSize="sm" color="gray.600" mb={2}>
                {task.description}
            </Text>
            <HStack justify="space-between" fontSize="xs" color="gray.500">
                <Text>{task.commentsCount} comments</Text>
                <Text>{task.filesCount} files</Text>
            </HStack>
            <AvatarGroup size="sm" max={3} mt={2}>
                {task.assignedTo.map(name => (
                    <Avatar key={name} name={name} />
                ))}
            </AvatarGroup>
        </Box>
    );
}
