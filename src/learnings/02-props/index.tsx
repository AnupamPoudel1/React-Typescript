type ComponentProps = {
    name: string, 
    id: number
};

const index = (props: ComponentProps): JSX.Element => {
    // We can also do ({name, id}: ComponentProps)
    // Either to destructure the props or not is entirely our choice
    return (
        <div>
            <h1>React Typescript</h1>
            <p>Props</p>
            <div>
                <p>Id: {props.id}</p>
                <p>Name: {props.name}</p>
            </div>
        </div>
    )
}

export default index
