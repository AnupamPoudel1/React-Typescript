type BasicCardProps = {
    type: 'basic',
    username: string
}

type AdvanceCardProps = {
    type: 'advance',
    username: string,
    email: string
}

type CardProps = BasicCardProps | AdvanceCardProps

const index = (props: CardProps) => {

    const { type, username } = props;

    if (type === 'basic') {
        return (
            <div className='flex flex-col justify-center items-center bg-gray-100 p-10'>
                <h1 className='font-bold text-2xl'>React Typescript</h1>
                <p className='font-bold text-xl'>Challenge - Correct Way</p>
                <div className='flex flex-col justify-center items-center p-2'>
                    <div className="p-3 font-bold text-white bg-green-500 rounded-md">
                        User: {username}
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className='flex flex-col justify-center items-center bg-gray-100 p-10'>
            <h1 className='font-bold text-2xl'>React Typescript</h1>
            <p className='font-bold text-xl'>Challenge - Correct Way</p>
            <div className='flex flex-col justify-center items-center p-2'>
                <div className="p-3 font-bold text-white bg-red-500 rounded-md">
                    User: {username} <br />
                    Email: {props.email}
                </div>
            </div>
        </div>
    )
}

export default index
