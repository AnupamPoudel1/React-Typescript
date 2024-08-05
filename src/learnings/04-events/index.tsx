import { useState } from "react";

type Person = {
    name: string;
}

const index = () => {

    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // const formData = new FormData(e.target as HTMLFormElement)
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);
        console.log(data);
        const username = formData.get('text') as string // as string because text returns null or string but null is not accepted by the Person type as it only accepts string
        const person: Person = { name: username }
        const splitPerson: Person = { name: data.username as string }
        console.log(person, splitPerson);
    }

    return (
        <div className='flex flex-col justify-center items-center bg-gray-100 p-10'>
            <p className='font-bold text-xl'>Events</p>
            <div className='flex flex-col justify-center items-center'>
                <div className="flex flex-col justify-center items-center p-5">
                    <form className="flex flex-col justify-center items-center" onSubmit={handleSubmit}>
                        <input
                            name="username"
                            type="text"
                            className="px-4 py-2 m-2"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            name="email"
                            type="email"
                            className="px-4 py-2 m-2"
                            value={email}
                            onChange={handleChange}
                        />
                        <button
                            type="submit"
                            className="px-5 py-2 bg-black text-white m-2 rounded-md"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default index
