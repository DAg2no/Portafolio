import { Drawer, List, ListItem, Typography } from "@mui/material";
import { navLinks } from "../../helpers/navLinks";
import { Link } from "react-router-dom";

export const CustomDrawer = ({ isDrawerOpen, toggleDrawer }) => {


  const renderDrawerList = () => {
    return (
      <List>
        {navLinks.map((link, index) => (
          <ListItem key={index}>
              <Link to={link.link} style={{textDecoration: 'none', color: 'inherit',}}>
          <Typography variant="h6" color="inherit" fontSize="1.1rem">
            {link.text}
          </Typography>
        </Link>
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

