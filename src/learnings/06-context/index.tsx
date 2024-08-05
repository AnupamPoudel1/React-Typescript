import { useTheme, ThemeProvider } from "./context";

const Parent = () => {
    return (
        <ThemeProvider>
            <Component />
        </ThemeProvider>
    )
}

const Component = (): JSX.Element => {

    const context = useTheme();
    console.log(context);

    return (
        <div className='flex flex-col justify-center items-center bg-gray-200 p-10'>
            <h1 className='font-bold text-2xl'>React Typescript</h1>
            <p className='font-bold text-xl'>Context API</p>
        </div>
    )
}

export default Parent;
