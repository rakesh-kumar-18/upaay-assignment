# Dashboard UI

This project is a React-based dashboard UI. The application includes three task columns ("To Do", "In Progress", "Done"), the ability to add tasks, filter tasks, persist state across page refreshes, and move tasks between columns via drag-and-drop. It uses Material UI (MUI) for styling, Redux Toolkit for state management, and local storage for state persistence.

## Key Features

1. **Task Management**:  
   - **Add Tasks**: Add tasks with a title and description to any of the three columns.
   - **Move Tasks**: Drag and drop tasks between columns to change their status.
   - **Filter Tasks**: Filter tasks by title and priority.

2. **State Management & Persistence**:  
   Uses Redux Toolkit for managing application state (tasks and filters). The state is persisted to `localStorage`, ensuring that tasks and their statuses remain intact after page refreshes.

3. **Drag-and-Drop**:  
   Implemented via `react-beautiful-dnd` to allow for intuitive reordering and moving tasks between columns.

## Tools & Technologies

- **React**: Core library for building the UI.
- **Material UI (MUI)**: UI component library for styling and layout.
- **Redux Toolkit & React-Redux**: State management solution with Redux Toolkit for cleaner, scalable code.
- **Local Storage**: Browser storage to persist state across sessions.
- **react-beautiful-dnd**: Library for drag-and-drop functionality.

## How to Run the Project Locally

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/rakesh-kumar-18/upaay-assignment
   cd upaay-assignment
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   ```bash
   npm run dev
   ```

4. **Open the App in Your Browser**:
   Navigate to [http://localhost:5173](http://localhost:5173) to view the dashboard UI.