import Task from "./Task.jsx";
import {useState, useRef} from 'react';


export default function SelectedProject({project, onDeleteProject}) {

    const [taskState, setTaskState] = useState({
        tasks:[]
    });
    const taskRef = useRef();

    function handleAddTask(taskData){

        setTaskState(prevState => {

            const newTask = {
                id: Math.random(),
                content: taskData.content
            }

            return {
                ...prevState,
                tasks: [...prevState.tasks, newTask]
            };
        });

    }

    const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });

    return (
        <div className="w-[35rem] mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
                    <button className="text-stone-600 hover:text-stone-950" onClick={onDeleteProject}>Delete</button>
                </div>
                <p className="mb-4 text-stone-400">{formattedDate}</p>
                <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
            </header>
            <Task onAddTask={handleAddTask} tasks={taskState.tasks} />
        </div>
    );
}