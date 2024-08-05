type ChallengeType = {
    type: 'basic' | 'advance',
    username: string,
    email?: string
}

const index = (props: ChallengeType) => {

    const { type, username, email } = props;

    const alertType = type === 'basic' ? 'bg-green-500' : 'bg-red-500';
    const className = `${alertType} p-3 font-bold text-white rounded-md`;

    return (
        <div className='flex flex-col justify-center items-center p-2'>
            <div className={className}>
                User: {username}
                {type === 'advance' ? <p>Email: {email}</p> : null}
            </div>
        </div>
    )
}

export default index
