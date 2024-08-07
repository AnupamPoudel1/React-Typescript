import { fetchData } from "./types";
import { useQuery } from "@tanstack/react-query";

const index = () => {

    const {
        isPending,
        isError,
        error,
        data: responses,
    } = useQuery({
        queryKey: ['data'],
        queryFn: fetchData
    });

    if (isPending) {
        return (
            <div className='flex flex-col justify-center items-center bg-gray-200 p-10'>
                <p className="font-bold text-xl">Loading .....</p>
            </div>
        )
    }

    if (isError) {
        return (
            <div className='flex flex-col justify-center items-center bg-gray-200 p-10'>
                <p className="font-bold text-xl">Error: {error.message}</p>
            </div>
        )
    }

    return (
        <div className='flex flex-col justify-center items-center bg-gray-200 p-10'>
            <p className="font-bold text-xl">Fetch</p>
            <div className="m-2 p-2">
                {responses.map((response) => {
                    return (
                        <p className="font-normal text-base m-2" key={response.id}>
                            Name: {response.name}
                        </p>
                    )
                })}
            </div>
        </div>
    )
}

export default index
