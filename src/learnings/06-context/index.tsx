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
            <p className='font-bold text-xl'>Context API</p>
            <button
                onClick={() => {
                    if (context.theme === 'light') {
                        context.setTheme('dark');
                        return;
                    }
                    context.setTheme('light');
                }}
                className="bg-black text-white font-bold px-4 py-2 rounded-md m-2"
            >
                Toggle Theme
            </button>
        </div>
    )
}

export default Parent;
