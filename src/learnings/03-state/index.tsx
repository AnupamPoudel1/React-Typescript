import { useState } from "react"

type Link = {
    id: number,
    url: string,
    text: string
}

const NavList: Link[] = [
    {
        id: 1,
        url: 'home',
        text: 'Home'
    },
    {
        id: 2,
        url: 'about',
        text: 'About'
    },
    {
        id: 3,
        url: 'skills',
        text: 'Skills'
    }
]

const index = () => {

    const [text, setText] = useState<string>('React');
    const [number, setNumber] = useState<number>(0);
    const [list, setList] = useState<string[]>([]);
    const [links, setLinks] = useState<Link[]>(NavList);

    return (
        <div className='flex flex-col justify-center items-center bg-gray-200 p-10'>
            <h1 className='font-bold text-2xl'>React Typescript</h1>
            <p className='font-bold text-xl'>State</p>
            <div className='flex flex-col justify-center items-center'>
                <div className="flex flex-col justify-center items-center p-5">
                    <p>{text}</p>
                    <p>{number}</p>
                    <p>{list}</p>
                </div>
                <button
                    className='px-5 py-2 bg-black text-white rounded-md'
                    onClick={() => {
                        setText('React + TypeScript');
                        setNumber(number + 1);
                        setList(['Anupam', 'Rose']);
                        setLinks([...links, { id: 4, url: 'contact', text: 'Contact' }]);
                    }}
                >
                    Click Me
                </button>
            </div>
        </div>
    )
}

export default index
