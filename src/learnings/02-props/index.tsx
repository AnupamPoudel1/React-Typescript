
const index = ({ name, id }: { name: string; id: number }): JSX.Element => {
    return (
        <div>
            <h1>React Typescript</h1>
            <p>Props</p>
            <div>
                <p>Id: {id}</p>
                <p>Name: {name}</p>
            </div>
        </div>
    )
}

export default index
