import { useState, useEffect } from "react";
import { type Tour, tourSchema } from './types';

const url = 'https://www.course-api.com/react-tours-project';

const index = () => {

    const [data, setData] = useState<Tour[]>([])
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
                const rawData: Tour[] = await response.json();
                const result = tourSchema.array().safeParse(rawData);
                if (!result.success) {
                    console.log(result.error.message);
                    throw new Error('Failed To Parse Data.....');
                }
                setData(result.data);
            } catch (error) {
                const message = error instanceof Error ? error.message : 'Unknown Error Occured.....'
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
            <p className="font-bold text-xl">Fetch</p>
            <div className="m-2 p-2">
                {data.map((data) => {
                    return (
                        <p className="font-normal text-base m-2" key={data.id}>
                            Name: {data.name}
                        </p>
                    )
                })}
            </div>
        </div>
    )
}

export default index
