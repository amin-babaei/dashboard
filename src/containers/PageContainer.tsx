import { useContext } from "react";
import { Container } from "@mui/material";
import Page from "@/components/Page";
import { TabContext } from '@/context/TabContext';
import Home from "@/pages/Home";
import Customers from "@/pages/customers/Customers";
import Calendar from "@/pages/Calendar";

const PageContainer = () => {
    const Tab = useContext(TabContext)
    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4}}>
            <Page pageNumber={Tab?.pageNumber || 0} index={0}>
                <Home />
            </Page>
            <Page pageNumber={Tab?.pageNumber || 0} index={1}>
                <Customers />
            </Page>
            <Page pageNumber={Tab?.pageNumber || 0} index={2}>
                <Calendar />
            </Page>
        </Container>
    );
};

export default PageContainer;