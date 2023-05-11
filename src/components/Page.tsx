import { Box } from "@mui/material";
import Speeddial from "./Speeddial";

interface IProps{
    children: React.ReactNode
    pageNumber: number
    index: number
}
const Page = (props:IProps) => {
    const { children, pageNumber, index } = props;

    return (
        <div>
            {pageNumber === index && (
                <Box component='section' sx={{height:'80vh',overflow:'auto'}}>
                    {children}
                </Box>
            )}
            <Speeddial/>
        </div>
    );
};

export default Page;