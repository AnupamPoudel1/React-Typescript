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
            <button
                onClick={() => {
                    if (context.theme === 'light') {
                        context.setTheme('dark');
                        return;
                    }
                    context.setTheme('light');
                }}
                className="bg-black text-white font-bold px-4 py-2 rounded-md"
            >
                Toggle Theme
            </button>
        </div>
    )
}

export default Parent;
