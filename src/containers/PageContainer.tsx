import { useContext } from "react";
import { Container } from "@mui/material";
import Page from "@/components/Page";
import { TabContext } from '@/context/TabContext';
import Home from "@/pages/Home";
import Customers from "@/pages/customers/Customers";
import CalendarPage from "@/pages/calendar/CalendarPage";
import TextEditor from "@/pages/editor/TextEditor";
import ColorPicker from "@/pages/ColorPicker";
import Kanban from "@/pages/Kanban";
import DropAudio from "@/pages/Audio";
import { ChartLine, ChartBar, ChartPi } from "@/pages/charts";

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
                <CalendarPage />
            </Page>
            <Page pageNumber={Tab?.pageNumber || 0} index={3}>
                <TextEditor />
            </Page>
            <Page pageNumber={Tab?.pageNumber || 0} index={4}>
                <ColorPicker />
            </Page>
            <Page pageNumber={Tab?.pageNumber || 0} index={5}>
                <Kanban />
            </Page>
            <Page pageNumber={Tab?.pageNumber || 0} index={6}>
                <DropAudio />
            </Page>
            <Page pageNumber={Tab?.pageNumber || 0} index={7}>
                <ChartLine />
            </Page>
            <Page pageNumber={Tab?.pageNumber || 0} index={8}>
                <ChartBar />
            </Page>
            <Page pageNumber={Tab?.pageNumber || 0} index={9}>
                <ChartPi />
            </Page>
        </Container>
    );
};

export default PageContainer;