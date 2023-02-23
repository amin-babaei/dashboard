import { CacheProvider } from "@emotion/react"
import { Box, CssBaseline, ThemeProvider, Toolbar } from '@mui/material';
import emotionCache from '@/utils/cachRtl';
import theme from '@/utils/theme';
import Navbar from '@/components/Navbar';
import SidebarContainer from '@/containers/SidebarContainer';
import SidebarContent from '@/components/SidebarContent';
import PageContainer from '@/containers/PageContainer';

const App = () => {
  const clientSideEmotionCache = emotionCache();

  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
          <Box sx={{ display: 'flex'}}>
            <CssBaseline />
              <Navbar/>
              <SidebarContainer>
                <SidebarContent/>
              </SidebarContainer>
            <Box
              component="main"
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
