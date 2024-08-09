import { useState, useEffect } from "react"
import Form from "./Form"
import Lists from "./Lists"
import { type Task } from "./types"

const loadTasks = (): Task[] => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
}

const updateStorage = (tasks: Task[]): void => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

const index = () => {

    const [tasks, setTasks] = useState<Task[]>(() => loadTasks());

    const addTask = (task: Task): void => {
        setTasks([...tasks, task]);
    }

    const toggleTask = ({ id }: { id: string }) => {
        setTasks(
            tasks.map((task) => {
                if (task.id === id) {
                    return { ...task, isCompleted: !task.isCompleted };
                }
                return task;
            })
        );
    };

    useEffect(() => {
        updateStorage(tasks);
    }, [tasks])

    return (
        <div className='flex flex-col justify-center items-center bg-gray-200 p-10'>
            <p className="font-bold text-xl">Final - Task</p>
            <div className="flex flex-col justify-center items-center bg-gray-50 p-5 shadow-md shadow-gray-400 m-5 rounded-md">
                <Form addTask={addTask} />
                <Lists tasks={tasks} toggleTask={toggleTask} />
            </div>
        </div>
    )
}

export default index
