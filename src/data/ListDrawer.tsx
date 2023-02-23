import {
    HomeRounded,
    People,
    CalendarMonth,
    Edit,
    ColorLens,
    ViewKanban,
    PlayCircle,
    ShowChart,
    Equalizer,
    DataUsage
} from "@mui/icons-material";

export const tabsData = () => {
    const tabs = [
        { label: "صفحه اصلی", icon: <HomeRounded/>},
        { label: "مشتریان", icon: <People/>},
        { label: "تقویم", icon: <CalendarMonth/>},
        { label: "ویرایشگر متن", icon: <Edit/>},
        { label: "انتخابگر رنگ", icon: <ColorLens/> },
        {label: "کانبان",icon: <ViewKanban/>},
        {label: "موزیک پلیر",icon: <PlayCircle/>},
        {label: "چارت خطی",icon: <ShowChart/>},
        {label: "چارت ستونی",icon: <Equalizer/>},
        {label: "چارت دایره ای",icon: <DataUsage/>},
    ];

    return tabs;
};