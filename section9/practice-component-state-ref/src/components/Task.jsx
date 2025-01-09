import Input from "./Input.jsx";
import {useRef} from 'react';

export default function Task({tasks, onAddTask}) {

    const taskRef = useRef();

    function saveTask() {
        onAddTask({
            content:  taskRef.current.value
        })
    }

    let content;
    if( tasks && tasks.length > 0) {
        content = <ul>
            {tasks.map((task) => (
                <li key={task.id} className="flex gap-2">
                    <span>{task.content}</span>
                    <button>clear</button>
                </li>
            ))}
        </ul>
    }else {
        content = <p className="text-stone-800 mb-4">This project does not have any tasks</p>
    }

    return (
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
            <div className="flex gap-4">
                <Input textArea={false} />
                <button onClick={saveTask}>Add Task</button>
            </div>
            {content}
        </section>
    )
}