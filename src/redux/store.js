import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';
import filterReducer from './filterSlice';
import { loadState, saveState } from '../utils/persistState';

const persistedState = loadState();

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        filter: filterReducer
    },
    preloadedState: persistedState
});

store.subscribe(() => {
    saveState(store.getState());
});
