import { Box, SpeedDial, SpeedDialAction } from "@mui/material";
import { DarkMode, LightMode, GitHub } from '@mui/icons-material';
import { useState, useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const Speeddial = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const theme = useContext(ThemeContext)
    return (
        <SpeedDial
            ariaLabel="SpeedDial tooltip example"
            sx={{ position: 'fixed', bottom: 16, right: 16 }}
            icon={theme?.mode === 'light' ? <LightMode /> : <DarkMode />}
            onClose={handleClose}
            onOpen={handleOpen}
            open={open}
        >
            <SpeedDialAction
                key='0'
                icon={theme?.mode === 'light' ? <DarkMode /> : <LightMode />}
                tooltipTitle={theme?.mode === 'light' ? 'شب' : 'روز'}
                tooltipOpen
                onClick={theme?.handleThemeChange}
            />
            <SpeedDialAction
                key='1'
                icon={<Box component='a' color='inherit' display='flex' alignItems='center' href='https://github.com/amin-babaei'><GitHub /></Box>}
                tooltipTitle='گیتهاب'
                tooltipOpen
                onClick={handleClose}
            />
        </SpeedDial>
    )
}

export default Speeddial