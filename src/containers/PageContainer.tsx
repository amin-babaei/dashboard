import { useContext } from "react";
import { Container } from "@mui/material";
import Page from "@/components/Page";
import { TabContext } from '@/context/TabContext';
import Home from "@/pages/Home";

const PageContainer = () => {
    const Tab = useContext(TabContext)
    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Page pageNumber={Tab?.pageNumber || 0} index={0}>
               <Home/>
            </Page>
        </Container>
    );
};

export default PageContainer;