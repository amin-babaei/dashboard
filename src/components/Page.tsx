import { Box } from "@mui/material";
import Speeddial from "./Speeddial";

interface IProps{
    children: JSX.Element
    pageNumber: number
    index: number
}
const Page = (props:IProps) => {
    const { children, pageNumber, index } = props;

    return (
        <div>
            {pageNumber === index && (
                <Box>
                    {children}
                </Box>
            )}
            <Speeddial/>
        </div>
    );
};

export default Page;