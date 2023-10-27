import { useDispatch, useSelector } from 'react-redux';
import { handleDelete } from '../reducers/task_slice';

function ListTask() {
    const dispatch = useDispatch();
    const list = useSelector((state) => state.task.list);

    const deleteTask = (task) => {
        dispatch(handleDelete(task));
    };

    return (
        <div className="list-tasks">
            <h3 className="mb-5">List of tasks:</h3>
            {list.map((task, index) => (
                <div key={index} className="task">
                    <p>{task}</p>
                    <button onClick={() => deleteTask(task)}>X</button>
                </div>
            ))}
        </div>
    );
}

export default ListTask;
