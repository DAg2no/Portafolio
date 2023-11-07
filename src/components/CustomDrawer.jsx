import { Drawer, List, ListItem, ListItemButton, Typography } from "@mui/material";
import { navLinks } from "../helpers/navLinks";

const CustomDrawer = ({ isDrawerOpen, toggleDrawer }) => {


  const renderDrawerList = () => {
    return (
      <List>
        {navLinks.map((link, index) => (
          <ListItem key={index}>
            <ListItemButton onClick={toggleDrawer}>
              <Typography variant="h6" color="inherit" fontSize="1.1rem">
                {link.text}
              </Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    );
  };

  return (
    <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
      {renderDrawerList()}
    </Drawer>
  );
};

export default CustomDrawer;
