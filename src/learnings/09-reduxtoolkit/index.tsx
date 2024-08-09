import { useAppDispatch, useAppSelector } from "../../hooks"
import { increment, decrement, reset, setStatus } from "./counterSlice"

const index = () => {

    const { count, status } = useAppSelector((state) => state.counter);
    const dispatch = useAppDispatch();

    return (
        <div className='flex flex-col justify-center items-center bg-gray-100 p-10'>
            <p className="font-bold text-xl">Redux-Toolkit Typescript</p>
            <div className="flex flex-col justify-center items-center">
                <p className="text-xl font-bold">
                    Counter: {count}
                </p>
                <p className="text-xl font-bold">
                    Status: {status}
                </p>
                <div className="p-5 flex justify-center items-center">
                    <button
                        className="px-4 py-2 bg-green-700 text-white font-bold mx-2 rounded-md"
                        onClick={() => dispatch(increment())}
                    >
                        Increment
                    </button>
                    <button
                        className="px-4 py-2 bg-red-700 text-white font-bold mx-2 rounded-md"
                        onClick={() => dispatch(decrement())}
                    >
                        Decrement
                    </button>
                    <button
                        className="px-4 py-2 bg-blue-700 text-white font-bold mx-2 rounded-md"
                        onClick={() => dispatch(reset())}
                    >
                        Reset
                    </button>
                </div>
                <div className="p-2 flex justify-center items-center">
                    <button
                        className="px-4 py-2 bg-green-700 text-white font-bold mx-2 rounded-md"
                        onClick={() => dispatch(setStatus('active'))}
                    >
                        Set to Active
                    </button>
                    <button
                        className="px-4 py-2 bg-red-700 text-white font-bold mx-2 rounded-md"
                        onClick={() => dispatch(setStatus('inactive'))}
                    >
                        Set to Inactive
                    </button>
                </div>
            </div>
        </div>
    )
}

export default index
