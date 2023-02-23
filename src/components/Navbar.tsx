import { styled } from '@mui/material/styles';
import { Avatar, Badge, IconButton, Toolbar, Typography } from "@mui/material"
import NotificationsIcon from '@mui/icons-material/Notifications';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import { useContext } from "react";
import { DrawerContext } from "@/context/DrawerContext";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const drawerWidth: number = 210;
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Navbar = () => {
  const drawer = useContext(DrawerContext)
  return (
    <AppBar color='default' position="absolute" open={drawer?.open}>
      <Toolbar
        sx={{
          pr: '24px'
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={drawer?.toggleDrawer}
          sx={{
            marginRight: '36px',
            ...(drawer?.open && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          fontSize={17}
          fontWeight='bold'
          color="inherit"
          sx={{ flexGrow: 1 }}
        >
          داشبورد ادمین
        </Typography>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary" anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}>
            <NotificationsIcon color='info'/>
          </Badge>
        </IconButton>
        <IconButton>
          <Avatar sx={{ width: 30, height: 30, color: 'black' }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar