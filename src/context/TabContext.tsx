import { createContext, FC, MouseEvent, useState } from "react";

type Props = { children: React.ReactNode };
interface ITab {
    pageNumber: number
    setPageNumber: React.Dispatch<React.SetStateAction<number>>
    handlePageNumber:(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void
  }
export const TabContext = createContext<ITab | null>(null)

export const TabProvider : FC<Props> = ({children}) => {
    const [pageNumber, setPageNumber] = useState<ITab['pageNumber']>(0);

    const handlePageNumber = (event:MouseEvent<HTMLElement>) => {
        setPageNumber(+event.currentTarget.tabIndex)
    };
    
    return (
        <TabContext.Provider value={{pageNumber,setPageNumber,handlePageNumber}}>
            {children}
        </TabContext.Provider>
    )
}