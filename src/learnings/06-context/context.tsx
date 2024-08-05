import React, { createContext, useContext, useState } from "react";

type Theme = 'light' | 'dark' | 'system';

const ThemeProviderContext = createContext<{ name: string } | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {

    const [theme, setTheme] = useState<Theme>();

    return (
        <ThemeProviderContext.Provider value={{ name: 'Anupam' }}>
            {children}
        </ThemeProviderContext.Provider >
    )
}

export const useTheme = () => {
    const context = useContext(ThemeProviderContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within the ThemeProvider');
    }
    return context;
}

