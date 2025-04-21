// Import Style Component 
import './TaskForm.css';

// Import React Libs
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';

// Import Interfaces
import { ITask } from '../../interfaces/Task';

// Interface
interface IProps {
    btnText: string;
    taskList: ITask[];
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
    task?: ITask | null;
    handleUpdate?(id: number, title: string, difficulty: number): void;
};

const TaskForm = ({ btnText, taskList, setTaskList, task, handleUpdate }: IProps) => {
    // States
    const [id, setId] = useState<number>(0);
    const [title, setTitle] = useState<string>("");
    const [difficulty, setDifficulty] = useState<number>(0);

    // Function to Create Task Object
    const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (handleUpdate) {
            handleUpdate(id, title, difficulty);
        } else {
            setId(Math.floor(Math.random() * 1000));

            const newTask: ITask = { id, title, difficulty };

            setTaskList!([...taskList, newTask]);

            setTitle("");
            setDifficulty(0);
        }
    };

    // Function to Handle Form Input Change
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "title") {
            setTitle(e.target.value);
        } else if (e.target.name === "difficulty") {
            setDifficulty(parseInt(e.target.value));
        }
    };

    // useEffect to Fill Form of Modal with Task to be Updated
    useEffect(() => {
        if (task) {
            setId(task.id);
            setTitle(task.title);
            setDifficulty(task.difficulty);
        }
    }, [task]);

    return (
        <>
            <div className="TaskForm">
                <form onSubmit={addTaskHandler}>
                    <label>Title:
                        <input type="text" name="title" placeholder="Task Title" value={title} onChange={handleChange} />
                    </label>
                    <label>Difficulty (0-5):
                        <input type="number" name="difficulty" placeholder="Task Difficulty" value={difficulty} onChange={handleChange} min={0} max={5} />
                    </label>

                    <input type="submit" value={btnText} />
                </form>
            </div>
        </>
    );
};

export default TaskForm;