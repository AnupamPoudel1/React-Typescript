// The return type of the element is important
const index = (): JSX.Element | string | null => {

    return (
        <div className='flex flex-col justify-center items-center bg-gray-200 p-10'>
            <p className="font-bold text-xl">Return Types</p>
        </div>
    )

    return 'Hello'

    return null
}

export default index
