import { useState, useEffect } from "react";

const url = 'https://www.course-api.com/react-tours-project';

const index = () => {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Failed To Fetch Data.....');
                }
                const rawData = await response.json();
                console.log(rawData);
            } catch (error) {
                const message = error instanceof Error ? error.message : 'Unknown Error Occured .....'
                setIsError(message);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, [])

    if (isLoading) {
        return (
            <div className='flex flex-col justify-center items-center bg-gray-200 p-10'>
                <p className="font-bold text-xl">Loading .....</p>
            </div>
        )
    }
    if (isError) {
        return (
            <div className='flex flex-col justify-center items-center bg-gray-200 p-10'>
                <p className="font-bold text-xl">Error: {isError}</p>
            </div>
        )
    }

    return (
        <div className='flex flex-col justify-center items-center bg-gray-200 p-10'>
            <p className="font-bold text-xl">Reducers</p>
        </div>
    )
}

export default index
