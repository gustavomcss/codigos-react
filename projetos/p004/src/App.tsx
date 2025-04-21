// Import Style App
import './App.css';

// Import Bootsrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css';

// Import React Libs
import { useState } from 'react';

// Import Interface
import { ITask } from './interfaces/Task';

// Import Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';
import Modal from './components/Modal/Modal';

function App() {
    // States
    const [taskList, setTaskList] = useState<ITask[]>([]);
    const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

    // Function to "Delete" Task
    const deleteTask = (id: number) => {
        setTaskList(
            taskList.filter((task) => {
                return task.id !== id;
            })
        );
    };

    // Function to Show or Hide Modal
    const hideOrShowModal = (display: boolean) => {
        const modal = document.querySelector(".Modal");

        if (display) {
            modal!.classList.remove("hide");
        } else {
            modal!.classList.add("hide");
        }
    };

    // Function to Control Modal and Get Task to Update
    const editTask = (task: ITask): void => {
        hideOrShowModal(true);

        setTaskToUpdate(task);
    };

    // Function to Update Task
    const updateTask = (id: number, title: string, difficulty: number) => {
        const updatedTask: ITask = { id, title, difficulty };

        const updatedItems = taskList.map((task) => {
            return task.id === updatedTask.id ? updatedTask : task;
        });

        setTaskList(updatedItems);

        hideOrShowModal(false);
    };

    return (
        <>
            <div className="App">
                <Modal children={<TaskForm btnText="Edit Task" taskList={taskList} task={taskToUpdate} handleUpdate={updateTask} />} />
                <Header />

                <main>
                    <div>
                        <h2>What are you going to do? &#128064;</h2>
                        <TaskForm btnText="Create Task" taskList={taskList} setTaskList={setTaskList} />
                    </div>

                    <div>
                        <h2>Your Tasks:</h2>
                        <TaskList taskList={taskList} handleDelete={deleteTask} handleEdit={editTask} />
                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
};

export default App;
