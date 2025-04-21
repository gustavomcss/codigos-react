// Import Style Component 
import './TaskList.css';

// Import Interfaces
import { ITask } from '../../interfaces/Task';

// Interface
interface Props {
    taskList: ITask[];
    handleDelete(id: number): void;
    handleEdit(task: ITask): void;
};

const TaskList = ({ taskList, handleDelete, handleEdit }: Props) => {
    return (
        <>
            <div className="TaskList">
                {taskList.length > 0 ? (
                    taskList.map((task) => (
                        <div key={task.id} className="task">
                            <div className="task-info">
                                <h3>{task.title}</h3>
                                <p>Difficulty: {task.difficulty}</p>
                            </div>

                            <div className="task-actions">
                                <i className="bi bi-pencil" onClick={() => {handleEdit(task)}}></i>
                                <i className="bi bi-trash" onClick={() => {handleDelete(task.id)}}></i>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>There aren't tasks registered.</p>
                )}
            </div>
        </>
    );
};

export default TaskList;