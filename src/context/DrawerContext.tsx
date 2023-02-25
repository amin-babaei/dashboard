import { useMediaQuery } from "@mui/material";
import { createContext, FC, useEffect, useState } from "react";
import { useTheme } from '@mui/material/styles';

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
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('sm'))

      useEffect(()=>{
        if(matches)setOpen(false)
      },[matches])

    return (
        <DrawerContext.Provider value={{open,setOpen,toggleDrawer}}>
            {children}
        </DrawerContext.Provider>
    )
}