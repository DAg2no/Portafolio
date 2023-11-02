import { Drawer, List, ListItem, ListItemButton } from "@mui/material";

const CustomDrawer = ({ isDrawerOpen, toggleDrawer }) => {
  return (
    <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
      <List>
        <ListItem>
          <ListItemButton primary="Portafolio" />
        </ListItem>
        <ListItem>
          <ListItemButton primary="Projects" />
        </ListItem>
        <ListItem>
          <ListItemButton primary="Description" />
        </ListItem>
        <ListItem>
          <ListItemButton primary="Contacts" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default CustomDrawer;
