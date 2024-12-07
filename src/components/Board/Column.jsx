/* eslint-disable react/prop-types */
import { Box, Heading, IconButton, Flex } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import AddTaskModal from './AddTaskModal';

export default function Column({ title, tasks, droppableProps, innerRef, placeholder, status }) {
    const [isOpen, setIsOpen] = useState(false);
    const onClose = () => setIsOpen(false);

    return (
        <Box w="300px" p={4} bg="gray.50" borderRadius="md" minH="80vh">
            <Flex align="center" justify="space-between" mb={4}>
                <Heading size="sm" color="gray.700">{title}</Heading>
                <IconButton
                    aria-label="Add Task"
                    icon={<AddIcon />}
                    size="sm"
                    onClick={() => setIsOpen(true)}
                />
            </Flex>
            <Box ref={innerRef} {...droppableProps} minH="calc(100% - 40px)">
                {tasks}
                {placeholder}
            </Box>
            <AddTaskModal isOpen={isOpen} onClose={onClose} status={status} />
        </Box>
    );
}
