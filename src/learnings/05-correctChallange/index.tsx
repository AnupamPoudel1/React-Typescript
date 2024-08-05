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
            <div className='flex flex-col justify-center items-center p-2'>
                <div className="p-3 font-bold text-white bg-green-500 rounded-md">
                    User: {username}
                </div>
            </div>
        )
    }
    return (
        <div className='flex flex-col justify-center items-center p-2'>
            <div className="p-3 font-bold text-white bg-red-500 rounded-md">
                User: {username} <br />
                Email: {props.email}
            </div>
        </div>
    )
}

export default index
