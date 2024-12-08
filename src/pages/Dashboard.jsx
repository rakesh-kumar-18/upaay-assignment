import { Box, Stack } from '@mui/material';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useSelector, useDispatch } from 'react-redux';
import Column from '../components/Board/Column';
import TaskCard from '../components/Board/TaskCard';
import { reorderTasks } from '../redux/tasksSlice';
import FilterBar from '../components/FilterBar';

export default function Dashboard() {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks);
    const { query, priority } = useSelector(state => state.filter);

    const filterTasks = (status) => {
        return tasks.filter(t => {
            if (priority !== 'all' && t.priority !== priority) return false;
            if (query && !t.title.toLowerCase().includes(query.toLowerCase())) return false;
            return t.status === status;
        });
    };

    const onDragEnd = (result) => {
        if (!result.destination) return;
        const { source, destination } = result;
        if (source.droppableId === destination.droppableId && source.index === destination.index) {
            return;
        }

        dispatch(reorderTasks({
            sourceIndex: source.index,
            destinationIndex: destination.index,
            sourceDroppableId: source.droppableId,
            destinationDroppableId: destination.droppableId
        }));
    };

    const columns = [
        { id: 'todo', title: 'To Do' },
        { id: 'inProgress', title: 'In Progress' },
        { id: 'done', title: 'Done' }
    ];

    return (
        <Box sx={{ flex: 1, p: 2 }}>
            <FilterBar />
            <DragDropContext onDragEnd={onDragEnd}>
                <Stack direction="row" spacing={2}>
                    {columns.map(column => (
                        <Droppable droppableId={column.id} key={column.id}>
                            {(provided) => (
                                <Column
                                    title={column.title}
                                    droppableProps={provided.droppableProps}
                                    innerRef={provided.innerRef}
                                    placeholder={provided.placeholder}
                                    status={column.id}
                                    tasks={filterTasks(column.id).map((task, index) => (
                                        <Draggable draggableId={task.id} index={index} key={task.id}>
                                            {(provided) => (
                                                <TaskCard
                                                    task={task}
                                                    innerRef={provided.innerRef}
                                                    provided={provided}
                                                />
                                            )}
                                        </Draggable>
                                    ))}
                                />
                            )}
                        </Droppable>
                    ))}
                </Stack>
            </DragDropContext>
        </Box>
    );
}
