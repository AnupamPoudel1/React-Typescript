import { useState } from "react"
import { type Task } from "./types"

type FormProps = {
    addTask: (task: Task) => void;
}

const Form = ({ addTask }: FormProps) => {

    const [task, setTask] = useState<string>('');
    const [error, setError] = useState<boolean>(false);
    const [disable, setDisable] = useState<boolean>(false);
    const [errMsg, setErrMsg] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setDisable(true);
        if (!task) {
            setError(true);
            setErrMsg('Please enter a task');
            setTimeout(() => {
                setError(false);
                setDisable(false);
            }, 2000);
            return;
        }
        addTask({
            id: new Date().getTime().toString(),
            description: task,
            isCompleted: false
        })
        setTask('');
        setDisable(false);
    }

    return (
        <form
            className="p-5 flex justify-center items-center rounded-lg shadow-lg shadow-gray-400 mb-5 mx-2 relative"
            onSubmit={handleSubmit}
        >
            <div className={error ? "error absolute px-4 py-2 -top-10 -right-60 bg-red-700 rounded-md text-white font-medium font-mono transition-all duration-300" : "error absolute px-4 py-2 -top-10 -right-[150%] bg-red-700 rounded-md text-white font-medium font-mono transition-all duration-300"}>
                {errMsg}
            </div>
            <input
                type="text"
                className="px-4 py-2 w-96 bg-gray-100 rounded-md font-normal font-mono text-black focus:outline-none shadow-md shadow-gray-400"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button
                type="submit"
                className="px-4 py-2 bg-gray-500 font-bold text-white font-mono rounded-md ml-2 shadow-gray-600 shadow-md"
                disabled={disable}
            >
                Add Task
            </button>
        </form>
    )
}

export default Form
