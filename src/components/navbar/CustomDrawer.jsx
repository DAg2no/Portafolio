import { Drawer, } from "@mui/material";
import { renderDrawerList } from "../../helpers/renderDrawerList";

export const CustomDrawer = ({ isDrawerOpen, toggleDrawer }) => {



  return (
    <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
      {renderDrawerList()}
    </Drawer>
  );
};

