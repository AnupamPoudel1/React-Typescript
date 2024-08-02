import { type PropsWithChildren } from "react";

// type ComponentProps = {
//     name: string,
//     id: number,
//     // The question mark infront of the children prop just says that its optional 
//     // The children prop might or might not be provided in the Element
//     children?: React.ReactNode
// };

// We can either implicitly define the children prop 
// Or we can use PropsWithChildren which does the same thing
type ComponentProps = PropsWithChildren<{
    name: string,
    id: number,
}>;

const index = (props: ComponentProps): JSX.Element => {
    // We can also do ({name, id}: ComponentProps)
    // Either to destructure the props or not is entirely our choice
    return (
        <div className='flex flex-col justify-center items-center bg-gray-100 p-10'>
            <h1 className="font-bold text-2xl">React Typescript</h1>
            <p className="font-bold text-xl">Props</p>
            <div className="flex flex-col justify-center items-center p-5">
                <p>Id: {props.id}</p>
                <p>Name: {props.name}</p>
                {props.children}
            </div>
        </div>
    )
}

export default index
