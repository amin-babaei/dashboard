import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import { IconButton, Toolbar } from '@mui/material';
import { useContext } from 'react';
import { DrawerContext } from '@/context/DrawerContext';

interface IProps{
  children: JSX.Element
}

const drawerWidth: number = 210;
const DrawerCustom = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      '& .MuiDrawer-paper': {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: 'border-box',
        [theme.breakpoints.down('sm')]: {
          width: theme.spacing(8),
        },
        ...(!open && {
          overflowX: 'hidden',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          width: theme.spacing(7),
          [theme.breakpoints.up('sm')]: {
            width: theme.spacing(8),
          },
        }),
      },
    }),
  );

const SidebarContainer = (props:IProps) => {
  const Drawer = useContext(DrawerContext)
  const { children } = props;
  return (
    <DrawerCustom variant="permanent" open={Drawer?.open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={Drawer?.toggleDrawer}>
              <ChevronRightIcon />
            </IconButton>
          </Toolbar>
            {children}
        </DrawerCustom>
  )
}

export default SidebarContainer