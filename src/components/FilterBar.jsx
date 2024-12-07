import { Flex, Select, Input } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { setQuery, setPriority } from '../redux/filterSlice';

export default function FilterBar() {
    const dispatch = useDispatch();
    const { query, priority } = useSelector(state => state.filter);

    return (
        <Flex align="center" gap={4} p={4} bg="white" boxShadow="sm" borderRadius="md" mb={4}>
            <Input
                placeholder="Filter by title..."
                value={query}
                onChange={e => dispatch(setQuery(e.target.value))}
                w="200px"
            />
            <Select value={priority} onChange={(e) => dispatch(setPriority(e.target.value))} w="150px">
                <option value="all">All Priorities</option>
                <option value="low">Low</option>
                <option value="high">High</option>
                <option value="completed">Completed</option>
            </Select>
        </Flex>
    );
}
