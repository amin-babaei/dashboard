import { useContext } from 'react';
import { Divider, ListItemIcon, ListItemText } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { TabContext } from '@/context/TabContext';
import { tabsData } from '@/data/ListDrawer';
import { DrawerContext } from '@/context/DrawerContext';

const SidebarContent = () => {
  const Drawer = useContext(DrawerContext)
  const Tab = useContext(TabContext)
  const tabs = tabsData()
  return (
    <>
      {tabs.map((tab, index) => (
        <ListItem key={index} onClick={Tab?.handlePageNumber} tabIndex={index} disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: Drawer?.open ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: Drawer?.open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              {tab.icon}
            </ListItemIcon>
            <ListItemText primary={tab.label} disableTypography sx={{ opacity: Drawer?.open ? 1 : 0, fontSize: '14px' }} />
          </ListItemButton>
          <Divider />
        </ListItem>
      ))}
    </>

  )
}

export default SidebarContent