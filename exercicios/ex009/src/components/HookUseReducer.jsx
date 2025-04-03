// Import Page Style Module
import styles from './HookUseReducer.module.css';

// Import React Libs
import { useReducer } from 'react';
import { useState } from 'react';

const HookUseReducer = () => {
    /* 3 - useReducer */
    const [number, dispatch] = useReducer((state, action) => {
        return Math.random(state);
    });

    /* 4 - useReducer & action */
    const initalTasks = [
        { id: 1, text: "Task 1" },
        { id: 2, text: "Task 2" }
    ];

    const taskReducer = (state, action) => {
        switch (action.type) {
            case "ADD":
                const newTask = {
                    id: Math.random(),
                    text: taskText
                };

                setTaskText("");

                return [...state, newTask];
            case "DELETE":
                return state.filter((task) => task.id !== action.id);
            default:
                return state;
        }
    };

    const removeTask = (id) => {
        dispatchTasks({ type: "DELETE", id: id });
    }

    const [taskText, setTaskText] = useState("");
    const [tasks, dispatchTasks] = useReducer(taskReducer, initalTasks);

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatchTasks({ type: "ADD" });
    };

    return (
        <>
            <div className={styles.HookUseReducer}>
                {/* 3 - useReducer */}
                <div className={styles.section}>
                    <h2>useReducer</h2>

                    <p>Number: {number}</p>

                    <button onClick={dispatch}>Change Number!</button>
                </div>

                {/* 4 - useReducer & action */}
                <div className={styles.section}>
                    <h2>useReducer & action</h2>

                    <form onSubmit={handleSubmit}>
                        <label>Type your task: <br />
                            <input type="text" value={taskText} onChange={(e) => setTaskText(e.target.value)} />
                        </label> <br /><br />

                        <input type="submit" value="Send" />
                    </form>

                    <p>Double-click on the task to delete</p>

                    {tasks.map((task) => (
                        <li key={task.id} onDoubleClick={() => removeTask(task.id)}>
                            {task.text}
                        </li>
                    ))}
                </div>
            </div>
        </>
    );
};

export default HookUseReducer;