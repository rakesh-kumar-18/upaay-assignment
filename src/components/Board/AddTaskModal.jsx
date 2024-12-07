/* eslint-disable react/prop-types */
import {
    Modal, ModalOverlay, ModalContent, ModalHeader,
    ModalFooter, ModalBody, ModalCloseButton,
    Button, Input, Textarea, FormControl, FormLabel
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/tasksSlice';

export default function AddTaskModal({ isOpen, onClose, status }) {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSave = () => {
        if (title.trim()) {
            dispatch(addTask({ title, description, status }));
            setTitle('');
            setDescription('');
            onClose();
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Add Task</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <FormControl mb={4}>
                        <FormLabel>Title</FormLabel>
                        <Input value={title} onChange={e => setTitle(e.target.value)} />
                    </FormControl>
                    <FormControl mb={4}>
                        <FormLabel>Description</FormLabel>
                        <Textarea value={description} onChange={e => setDescription(e.target.value)} />
                    </FormControl>
                </ModalBody>
                <ModalFooter>
                    <Button mr={3} onClick={onClose}>Cancel</Button>
                    <Button colorScheme="blue" onClick={handleSave}>Save</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
