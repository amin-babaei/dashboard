import { CacheProvider } from "@emotion/react"
import { Box, CssBaseline, ThemeProvider, Toolbar } from '@mui/material';
import emotionCache from '@/utils/cachRtl';
import { darkTheme, lightTheme } from '@/utils/theme';
import Navbar from '@/components/Navbar';
import {ThemeContext} from '@/context/ThemeContext'
import SidebarContainer from '@/containers/SidebarContainer';
import SidebarContent from '@/components/SidebarContent';
import PageContainer from '@/containers/PageContainer';
import { useContext } from "react";

const App = () => {
  const clientSideEmotionCache = emotionCache();
  const mode = useContext(ThemeContext)
  const theme = mode?.mode === "dark" ? darkTheme : lightTheme;
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
          <Box component="main" sx={{ display: 'flex'}}>
            <CssBaseline />
              <Navbar/>
              <SidebarContainer>
                <SidebarContent/>
              </SidebarContainer>
            <Box
              component="div"
              sx={{
                flexGrow: 1,
                minHeight: '100vh',
              }}
            >
              <Toolbar />
              <PageContainer/>
            </Box>
          </Box>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
