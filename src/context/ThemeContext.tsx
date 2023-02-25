import { createContext, Dispatch, FC, MouseEvent, useState } from "react";

type Props = { children: React.ReactNode };
interface ITab {
    mode: string
    setMode: Dispatch<React.SetStateAction<string>>
    handleThemeChange:(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void
  }
export const ThemeContext = createContext<ITab | null>(null)

export const ThemeProvider : FC<Props> = ({children}) => {
    const [mode, setMode] = useState<ITab['mode']>('light');

    const handleThemeChange = () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    };
    
    return (
        <ThemeContext.Provider value={{mode,setMode,handleThemeChange}}>
            {children}
        </ThemeContext.Provider>
    )
}