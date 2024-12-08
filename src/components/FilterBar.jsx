import { Box, TextField, FormControl, Select, MenuItem } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setQuery, setPriority } from '../redux/filterSlice';

export default function FilterBar() {
    const dispatch = useDispatch();
    const { query, priority } = useSelector(state => state.filter);

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                backgroundColor: '#fff',
                p: 2,
                borderRadius: 1,
                mb: 2
            }}
        >
            <TextField
                variant="outlined"
                size="small"
                placeholder="Filter by title..."
                value={query}
                onChange={(e) => dispatch(setQuery(e.target.value))}
                sx={{ width: 200 }}
            />
            <FormControl size="small" sx={{ width: 150 }}>
                <Select
                    value={priority}
                    onChange={(e) => dispatch(setPriority(e.target.value))}
                >
                    <MenuItem value="all">All Priorities</MenuItem>
                    <MenuItem value="low">Low</MenuItem>
                    <MenuItem value="high">High</MenuItem>
                    <MenuItem value="completed">Completed</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
