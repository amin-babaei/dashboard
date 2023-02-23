import { createContext, FC, useState } from "react";

type Props = { children: React.ReactNode };
interface IDrawer {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    toggleDrawer:()=> void
  }
export const DrawerContext = createContext<IDrawer | null>(null)

export const DrawerProvider : FC<Props> = ({children}) => {
    const [open, setOpen] = useState<boolean>(false);

    const toggleDrawer = () => {
        setOpen(!open);
      };

    return (
        <DrawerContext.Provider value={{open,setOpen,toggleDrawer}}>
            {children}
        </DrawerContext.Provider>
    )
}