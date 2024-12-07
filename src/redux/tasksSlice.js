import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
    {
        id: nanoid(),
        title: 'Brainstorming',
        description: 'Diverse experience into play.',
        status: 'todo',
        priority: 'low',
        commentsCount: 12,
        filesCount: 0,
        assignedTo: ['Alice', 'Bob']
    },
    {
        id: nanoid(),
        title: 'Research',
        description: 'Create an optimal product for users.',
        status: 'todo',
        priority: 'high',
        commentsCount: 10,
        filesCount: 3,
        assignedTo: ['Charlie']
    },
    {
        id: nanoid(),
        title: 'Wireframes',
        description: 'Basic content and visuals.',
        status: 'todo',
        priority: 'high',
        commentsCount: 12,
        filesCount: 0,
        assignedTo: ['Bob', 'Diana']
    },
    {
        id: nanoid(),
        title: 'Brainstorming Session 2',
        description: 'Another iteration of ideas.',
        status: 'inProgress',
        priority: 'low',
        commentsCount: 12,
        filesCount: 0,
        assignedTo: ['Alice']
    },
    {
        id: nanoid(),
        title: 'Design System',
        description: 'Adapt UI from what we did before.',
        status: 'done',
        priority: 'completed',
        commentsCount: 12,
        filesCount: 15,
        assignedTo: ['Charlie', 'Diana']
    }
];

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare({ title, description, status }) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        description,
                        status,
                        priority: 'low',
                        commentsCount: 0,
                        filesCount: 0,
                        assignedTo: []
                    }
                };
            }
        },
        updateTaskStatus(state, action) {
            const { id, status } = action.payload;
            const task = state.find(t => t.id === id);
            if (task) {
                task.status = status;
            }
        },
        reorderTasks(state, action) {
            // For DnD reordering
            const { sourceIndex, destinationIndex, sourceDroppableId, destinationDroppableId } = action.payload;
            // Filter tasks by columns
            const tasksInSource = state.filter(t => t.status === sourceDroppableId);
            const [moved] = tasksInSource.splice(sourceIndex, 1);
            moved.status = destinationDroppableId;
            const tasksInDestination = state.filter(t => t.status === destinationDroppableId);

            // Insert moved task into the new array at destinationIndex
            tasksInDestination.splice(destinationIndex, 0, moved);

            // Reconstruct the state with updated tasks
            const filteredState = state.filter(t => t.id !== moved.id);
            return [...filteredState, ...tasksInDestination];
        }
    }
});

export const { addTask, updateTaskStatus, reorderTasks } = tasksSlice.actions;
export default tasksSlice.reducer;
