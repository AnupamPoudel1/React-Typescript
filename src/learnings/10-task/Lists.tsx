import { type Task } from "./types"

type ListProps = {
    tasks: Task[],
    toggleTask: ({ id }: { id: string }) => void
}

const Lists = ({ tasks, toggleTask }: ListProps) => {
    return (
        <div className="flex justify-center items-center flex-col">
            {
                tasks.map((task) => {
                    return <div
                        className="px-4 py-2 flex justify-between items-center shadow-md shadow-gray-400 m-2 w-96"
                        key={task.id}
                    >
                        <p className="text-black font-normal font-mono">
                            {task.description}
                        </p>
                        <input
                            type="checkbox"
                            checked={task.isCompleted}
                            onClick={() => {
                                toggleTask({ id: task.id });
                            }}
                        />
                    </div>
                })
            }
        </div>
    )
}

export default Lists
