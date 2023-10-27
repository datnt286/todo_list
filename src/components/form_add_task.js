import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { handleAdd } from '../reducers/task_slice';

function FormAddTask() {
    const taskRef = useRef('');
    const dispatch = useDispatch();

    const addTask = () => {
        if (taskRef.current.value === '') {
            alert('Please input the name of the task!');
        } else {
            dispatch(handleAdd(taskRef.current.value));
            taskRef.current.value = '';
        }
    };

    return (
        <div className="form-add-task">
            <label>Task name:</label>
            <input
                ref={taskRef}
                type="text"
                placeholder="Input name of task"
            />
            <button onClick={addTask}>Add</button>
        </div>
    );
}

export default FormAddTask;
