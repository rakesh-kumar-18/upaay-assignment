import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        query: '',
        priority: 'all'
    },
    reducers: {
        setQuery(state, action) {
            state.query = action.payload;
        },
        setPriority(state, action) {
            state.priority = action.payload;
        }
    }
});

export const { setQuery, setPriority } = filterSlice.actions;
export default filterSlice.reducer;
