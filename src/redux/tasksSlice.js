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
        priority: 'medium',
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
            const { sourceIndex, destinationIndex, sourceDroppableId, destinationDroppableId } = action.payload;

            const todoTasks = state.filter(t => t.status === 'todo');
            const inProgressTasks = state.filter(t => t.status === 'inProgress');
            const doneTasks = state.filter(t => t.status === 'done');

            const sourceArray = sourceDroppableId === 'todo' ? todoTasks
                : sourceDroppableId === 'inProgress' ? inProgressTasks
                    : doneTasks;

            const destinationArray = destinationDroppableId === 'todo' ? todoTasks
                : destinationDroppableId === 'inProgress' ? inProgressTasks
                    : doneTasks;

            const [moved] = sourceArray.splice(sourceIndex, 1);
            moved.status = destinationDroppableId;
            destinationArray.splice(destinationIndex, 0, moved);

            state.length = 0;
            state.push(...todoTasks, ...inProgressTasks, ...doneTasks);
        }
    }
});

export const { addTask, updateTaskStatus, reorderTasks } = tasksSlice.actions;
export default tasksSlice.reducer;
