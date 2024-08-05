import { useReducer } from "react";
import { initState, counterReducer } from "./reducer";

const index = () => {

    const [state, dispatch] = useReducer(counterReducer, initState);

    return (
        <div className='flex flex-col justify-center items-center bg-gray-100 p-10'>
            <p className="font-bold text-xl">Reducers</p>
            <div className="flex flex-col justify-center items-center">
                <p className="text-xl font-bold">
                    Counter: {state.count}
                </p>
                <p className="text-xl font-bold">
                    Status: {state.status}
                </p>
                <div className="p-5 flex justify-center items-center">
                    <button
                        className="px-4 py-2 bg-green-700 text-white font-bold mx-2 rounded-md"
                        onClick={() => dispatch({ type: 'increment' })}
                    >
                        Increment
                    </button>
                    <button
                        className="px-4 py-2 bg-red-700 text-white font-bold mx-2 rounded-md"
                        onClick={() => dispatch({ type: 'decrement' })}
                    >
                        Decrement
                    </button>
                    <button
                        className="px-4 py-2 bg-blue-700 text-white font-bold mx-2 rounded-md"
                        onClick={() => dispatch({ type: 'reset' })}
                    >
                        Reset
                    </button>
                </div>
                <div className="p-2 flex justify-center items-center">
                    <button
                        className="px-4 py-2 bg-green-700 text-white font-bold mx-2 rounded-md"
                        onClick={() => dispatch({ type: 'setStatus', payload: 'active' })}
                    >
                        Set to Active
                    </button>
                    <button
                        className="px-4 py-2 bg-red-700 text-white font-bold mx-2 rounded-md"
                        onClick={() => dispatch({ type: 'setStatus', payload: 'inactive' })}
                    >
                        Set to Inactive
                    </button>
                </div>
            </div>
        </div>
    )
}

export default index
